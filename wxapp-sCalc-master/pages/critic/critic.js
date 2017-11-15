var baseUrl = 'https://api.douban.com';
Page({
  data: {
    subject:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    console.log('options',options);
    wx.request({
      url: baseUrl + '/v2/movie/subject/' + options.id,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        self.setData({
          subject: res.data
        })
        console.log(res.data)
      }
    })

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
   
  },

  previewImage:function(e){
    let url = e.target.dataset.src;
    wx.previewImage({
      urls: [url]
    })
  }
})