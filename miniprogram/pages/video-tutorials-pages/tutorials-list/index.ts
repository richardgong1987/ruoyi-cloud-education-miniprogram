// pages/video-tutorials-pages/tutorials-list/index.ts
Page({

  /**
   * Page initial data
   */
  data: {
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
  goPage(event:any) {

    wx.setStorage({
      key:"readVideo",
      data:event.currentTarget.dataset.item
    });
    wx.navigateTo({
      url: `/pages/video-tutorials-pages/read-video/index`
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    wx.getStorage({key:"toTutorial",success:({data})=>{
        console.log(data);
    }})
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})