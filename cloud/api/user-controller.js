const BaseController = require('./base-controller.js')
const constellation = ['水瓶座', '双鱼座', '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座'];
const tenpay = require('tenpay');//支付核心模块
const constellationDate = [
  [
    [1, 21],
    [2, 19],
  ],
  [
    [2, 20],
    [3, 20],
  ],
  [
    [3, 21],
    [4, 20],
  ],
  [
    [4, 21],
    [5, 21],
  ],
  [
    [5, 22],
    [6, 21],
  ],
  [
    [6, 22],
    [7, 22],
  ],
  [
    [7, 23],
    [8, 23],
  ],
  [
    [8, 24],
    [9, 23],
  ],
  [
    [9, 24],
    [10, 23],
  ],
  [
    [10, 24],
    [11, 22],
  ],
  [
    [11, 23],
    [12, 21],
  ],
  [
    [12, 22],
    [1, 20],
  ],
];
class UserController extends BaseController {
  constructor() {
    super()
  }
  async login(data, context) {
    let {
      shareId,
      openid
    } = data
    openid = openid || context.OPENID
    let user = await db.collection('users').doc(openid).field({
      openid: true,
      subscribe: true,
      nick: true,
      avtater: true,
      isBinding: true,
      userType: true,
      isAuth: true,
      school: true,
      grade: true,
      sysMsgCount: true,
      noticeCount: true
    }).get().then(res => {
      return res.data
    }).catch((err) => {
      console.log(err)
      return null
    })
    if (!user) {
      user = await db.collection('users').add({
        data: {
          shareId,
          _id: context.OPENID,
          openid: context.OPENID,
          unionid: context.UNIONID,
          subscribe: null,
          nick: null,
          avtater: null,
          platform: 'wx',
          isAuth: false,
          isBinding: false,
          userType: 0,
          grade: 0,
          subscribe: false,
          registerDate: Date.now(),
          sysMsgCount: 0,
          noticeCount: 0,
          followNum: 0,
          fansNum: 0,
          thumbsNum: 0,
          drill: 100,
          shell: 0
        }
      }).then((res) => {
        return {
          _id: res._id,
          school: null,
        }
      }).catch((err) => {
        console.log(err)
        return null
      })
    }
    return user
  }
  async bindInfo(data, context) {
    data.isBinding = true
    return await db.collection('users').doc(context.OPENID).update({
      data
    }).then(() => this.success()).catch(() => this.fail())
  }
  async details(data, context) {
    const { id } = data
    return await db.collection('users').doc(id)
    .get().then(async res => {
      if (res.data) {
        res.data.isSelf = id === context.OPENID
        res.data.hasFollow = await db.collection('userFollows').where({
          fromId: context.OPENID
        }).count().then(_res => {
          return _res.total > 0
        }).catch(() => {
          return false
        })
      }
      return this.success(res.data)
    }).catch(() => this.fail())
  }
  async follow(data, context) {
    const {
      toId
    } = data
    try {
      return await db.runTransaction(async transaction => {
        const hasNotice = await transaction.collection('userNotices').where({
          toId,
          fromId: context.OPENID,
          noticeType: 6
        }).count()
        let follcount=await transaction.collection('userFollows').where({
          toId,
          fromId: context.OPENID,
        }).count()
        if (follcount.total>0) {
          return true
        }
        let isUp = await transaction.collection('userFollows').add({
            data: {
              toId,
              fromId: context.OPENID,
              followDate: Date.now(),

            }
          })
        
        if (!isUp) {
          await transaction.rollback(-100)
        }
        isUp = await transaction.collection('users').doc(context.OPENID).update({
          data: {
            followNum: _.inc(1)
          }
        })
        if (!isUp) {
          await transaction.rollback(-100)
        }
        isUp = await transaction.collection('users').doc(toId).update({
          data: hasNotice.total ? {
            fansNum: _.inc(1)
          } : {
              fansNum: _.inc(1),
              noticeCount: _.inc(1)
            }
        })
        if (!isUp) {
          await transaction.rollback(-100)
        }
        if (!hasNotice.total) {
          isUp = await transaction.collection('userNotices').add({
            data: {
              toId,
              fromId: context.OPENID,
              noticeType: 6,
              isRead: false,
              senDate: Date.now()
            }
          })
          if (!isUp) {
            await transaction.rollback(-100)
          }
        }
        return true
      }).then(() => {
        return this.success()
      }).catch(() => {
        return this.fail()
      })
    } catch (e) {
      return this.fail()
    }
  }
  async cancelFollow(data, context) {
    const {
      id
    } = data
    const userId = context.OPENID
    return await db.runTransaction(async transaction => {
      let isUp = await transaction.collection('userFollows').where({
        fromId: userId,
        toId: id
      }).remove()
      if (!isUp) {
        await transaction.rollback(-100)
      }
      isUp = await transaction.collection('users').where({
       openid:userId
      }).update({
        data: {
          followNum: _.inc(-1)
        }
      })
      if (!isUp) {
        await transaction.rollback(-100)
      }
      isUp = await transaction.collection('users').where({
        openid:id
       }).update({
        data: {
          fansNum: _.inc(-1)
        }
      })
      if (!isUp) {
        await transaction.rollback(-100)
      }
    }).then(() => {
      return this.success()
    }).catch(() => {
      return this.fail()
    })
  }
  async newData(data, context) {
    return await db.collection('users').doc(context.OPENID).field({
      _id: 1,
      nick: 1,
      avtater: 1,
      isBinding: 1,
      isAuth: 1,
      sysMsgCount: 1,
      noticeCount: 1,
      followNum: 1,
      fansNum: 1,
      thumbsNum: 1,
      shell: 1,
      drill: 1
    }).get().then(res => this.success(res.data)).catch(() => this.fail())
  }
  async searchSchool(data, context) {
    const {
      keyword,
      pageIndex,
      pageSize
    } = data
    return await db.collection('schools').where({
      name: db.RegExp({
        regexp: '.*' + keyword,
        options: 'i',
      })
    }).skip((pageIndex - 1) * pageSize)
      .limit(pageSize).get()
      .then(res => this.success(res.data))
      .catch(() => this.fail())
  }
  async change(data, context) {
    const {
      filed,
      value
    } = data
    const user = {
      [filed]: value,
    }
    if (filed === 'birthday') {
      const date = new Date(value);
      const m = date.getMonth() + 1;
      const d = date.getDate();
      let index = -1;
      for (let i = 0; i < constellationDate.length; i++) {
        const e = constellationDate[i];
        if ((m === e[0][0] && d >= e[0][1]) || (m === e[1][0] && d <= e[1][1])) {
          index = i;
          break;
        }
      }
      if (index > -1) {
        user.constellation = constellation[index];
      }
    }
    if (filed === 'hometown') {
      const arr = value.split(' ');
      user.province = arr[0];
      user.city = arr[1];
    }
    return await db.collection('users').doc(context.OPENID).update({
      data: user
    }).then(() => this.success()).catch(() => this.fail())
  }
  async followList(data, context) {
    const {
      pageIndex,
      pageSize,
      type,
      userId
    } = data
    
    return await db.collection('userFollows').where({
     [type == 0 ? 'fromId' : 'toId']: userId
    }).skip((pageIndex - 1) * pageSize)
      .limit(pageSize)
      .orderBy('followDate', 'desc')
      .get()
      .then(async res => {
        for (var item in res.data) {
          var OPID=type==1?res.data[item].fromId:res.data[item].toId
          await db.collection('userNotices').add({
            data:{
              OPID
            }
          })
          res.data[item].user = await db.collection('users').where({
            openid:OPID
          }).get(res => {
            return res.data && res.data[0] || null
          }).catch(() => {
            return null
          })
        }
        return this.success(res.data)
      }).catch(() => {
        return this.success([])
      })
  }
  async auth(data, content) {
    const {
      realName,
      authSrc
    } = data
    return await db.collection('users').doc(content.OPENID).update({
      data: {
        realName,
        authSrc
      }
    }).then(() => this.success()).catch(() => {
      return this.fail()
    })
  }
  async qrCode(data, context) {
    const { postId, commentId } = data
    const userId = context.OPENID
    const scene = `id=${userId}`
    //.getUnlimited
    return await cloud.openapi.wxacode.get({
      scene,
      width: 144,
      //page:'pages/index',
      path: 'pages/index',
    }).then(async res => {
      if (res.errCode === 0) {
        return await cloud.uploadFile({
          cloudPath: `qrcode/${userId}.jpg`,
          fileContent: res.buffer,
        }).then(async res => {
          return await cloud.getTempFileURL({
            fileList: [res.fileID]
          }).then(_res => {
            if (_res.fileList[0].status === 0) {
              return this.success(_res.fileList[0].tempFileURL)
            }
            return this.fail(10001, _res.fileList[0].errMsg)
          }).catch((err) => this.fail(10002, err.message))
        }).catch((err) => {
          return this.fail(10003, err.message)
        })
      } else {
        return this.fail(10004, res.errmsg)
      }
    }).catch(err => this.fail(10005, err.message))
  }
  async kefu(data, content) {

    //这个没用，借用一下这个
     await cloud.openapi.customerServiceMessage.send({
      touser:content.OPENID,
      msgtype: 'link',
      link: {
        title: '石大小圈子',
        description: '商业合作请添加微信',
        url: 'http://love.gh0614.com/quanziimage/mywechat.jpg',
        thumbUrl: 'https://7465-test-second-1302040267.tcb.qcloud.la/mywechat.jpg?sign=293e2730d790e3bb81ae1bd3f060c9a0&t=1590665924'
      }
    }).then((
    ) => this.success(
    )).catch(() => {
      return this.fail()
    })
    return await cloud.openapi.customerServiceMessage.send({
      touser:content.OPENID,
      msgtype: 'link',
      link: {
        title: '石大小圈子',
        description: '小程序交流中心请加QQ群',
        url: 'http://love.gh0614.com/quanziimage/QQgroup.jpg',
        thumbUrl: 'https://7465-test-second-1302040267.tcb.qcloud.la/logo.png?sign=4f7c407344bed22a9f940a563227d671&t=1590666779'
      }
    }).then((
    ) => this.success()).catch(() => {
      return this.fail()
    })

  }

  async pay(data, content) {
    return await db.runTransaction(async t => {
      const vip=await db.collection('users').doc(content.OPENID).get()

         if(vip.data.grade==3){
                return this.fail()
         }
         else{
          const curTime = Date.now();
          const api = tenpay.init(payconfig)
          return await api.getPayParams({
            //商户订单号
            out_trade_no: 'vipcharge_' + 'money'+ '' + curTime,
            body: '充值vip',       //商品名称
            total_fee: 250,     //金额，注意是数字，不是字符串
            openid: content.OPENID, //***用户的openid
            }).catch(() => {
            return this.fail()
          })
         }

    })
   
  }
  
  async payvipvoer(data, content) {
    return await db.runTransaction(async t => {
      if (!db.collection('users').doc(content.OPENID).update({
        data:{
          grade: 3,
        }
      }).catch(() => false)) {
        await t.rollback(-100)
      }
      if (!t.collection('trades').add({
        data:{
          addDate: Date.now(),
          userId:content.OPENID,
          type:4,//用现金充值
          payresult:data.payresult,
        }
       }).catch(() => false)) {
        await t.rollback(-100)
      }
    }).then(() => this.success()).catch((err) => this.fail(10001, err))
  }
}
module.exports = UserController;