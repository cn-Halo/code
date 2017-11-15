var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
var app = getApp();
Page({
  data:{
    height: app.globalData.windowHeight,
    longitude:0,
    latitude:0,
    markers:[],
    controls: [{
      id: 1,
      iconPath: '../../img/me2.png',
      position: {
        left: app.globalData.windowWidth - 40,
        top: 300 - 50,
        width: 30,
        height: 30
      },
      clickable: true
    },{
        id: 2,
        iconPath: '../../img/food.png',
        position: {
          left: app.globalData.windowWidth - 40,
          top: 300 - 50-40,
          width: 30,
          height: 30
        },
        clickable: true
      }, {
        id: 3,
        iconPath: '../../img/navigation.png',
        position: {
          left: app.globalData.windowWidth - 40,
          top: 300 - 50 - 40 - 40,
          width: 30,
          height: 30
        },
        clickable: true
      }]
  },
  onLoad: function () {

  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
    var self = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log('longitude:',longitude)
        console.log('latitude:',latitude)
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   scale: 28
        // })
        self.setData({
          longitude: longitude,
          latitude: latitude
        })  
      }
    })

  },
  baiduSearch:function(query){
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'FpBDZvPZvU4XeduwfLRfib6n2rYe6SXA'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      console.log(data)
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
    }
    BMap.search({
      "query": query,
      fail: fail,
      success: success,
      iconPath: '../../img/marker_red.png',
      iconTapPath: '../../img/marker_red.png'
    });

  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 31.811226,
        longitude: 119.974062,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  controltap(e) {
    if(e.controlId === 1){
      this.mapCtx.moveToLocation()
    } else if (e.controlId === 2){
      this.baiduSearch('美食');
    } else if (e.controlId === 3) {
      wx.openLocation({
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        scale: 28
      })
    }
  },
  markertap(e) {
    console.log(e)
    var markers = this.data.markers
    // markers.filter(o => {
    //   if(o.id === e.markerId){
    //     // o.label = { color: '#FF0000DD', content:'aaaaaaaaaaa'};
    //     o.callout = { content: '你好啊 的撒', color: '#FF0000DD', display: 'ALWAYS', padding: 20, borderRadius:0.5};
    //   }
    // })
    // this.setData({
    //   markers: markers
    // });
  },
})