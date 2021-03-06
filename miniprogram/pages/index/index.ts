// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  pageLifetimes: {
    show() {

      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  data: {
    tutorials: [
      {
        labels: "分级绘本",
        items: [
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }, {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }
        ]
      },

      {
        labels: "自然拼音绘本",
        items: [
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }, {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }



        ]
      },

      {
        labels: "英文动画片",
        items: [
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }, {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }



        ]
      },

      {
        labels: "语法专项训练",
        items: [
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }, {
            title: "RAZ分级绘本 ",
            url: "https://img.yzcdn.cn/vant/cat.jpeg"
          }



        ]
      },

    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goPage(event:any) {

    wx.setStorage({
      key:"toTutorial",
      data:event.currentTarget.dataset.item
    })
    wx.navigateTo({
      url: `/pages/video-tutorials-pages/tutorials-list/index`
    })
  },
})
