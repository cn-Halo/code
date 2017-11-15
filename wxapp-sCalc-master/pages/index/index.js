//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '简易计算器☞',
    userInfo: {},
    defaultSize: 'default',
    disabled: false,
    iconType:'info_circle'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toCalc:function(){
    wx.navigateTo({
      url:'../calc/calc'
    })
  },
  toFood: function () {
    wx.navigateTo({
      url: '../food/food'
    })
  },
  toMovie: function () {
    wx.navigateTo({
      url: '../movie/movie'
    })
  },
  onLoad: function () {
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage:function(){
    return {
      title: '小工具',
      path: '/pages/index/index'
    }
  }
})
