// pages/reward/reward.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  tapName:function(e){
    wx.previewImage({
      urls: ['http://cdn.layui.com/upload/2017_11/6260688_1510653650207_67908.jpg'] // 需要预览的图片http链接列表
    })
  }

})