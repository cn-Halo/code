var baseUrl = 'https://api.douban.com';
var url = baseUrl +'/v2/movie/in_theaters';
var app = getApp();
var baseStart = 0;
var baseCount = 5;
Page({
  data: {
    navbar: ['正在上映', '即将上映', '北美票房榜','Top250'],
    currentTab: 0 ,
    subjects:[],
    start: baseStart,
    count: baseCount,
    height: app.globalData.windowHeight
  },
  onLoad:function(){
    this.getMovieData(url)
  },

  getMovieData:function(url){
    let self = this;
    wx.request({
      url: url,
      data: {
        count: this.data.count,
        start: this.data.start
      },
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        self.setData({
          subjects: res.data.subjects
        });
        console.log(self.data.subjects)
      }
    })
  },
  navbarTap: function (e) {
    console.log(e);
    let idx = e.currentTarget.dataset.idx
    if(idx == 0){ //正在上映
      url = baseUrl+'/v2/movie/in_theaters';
    } else if (idx == 1){//即将上映
      url = baseUrl + '/v2/movie/coming_soon';
    } else if (idx == 2){
      url = baseUrl + '/v2/movie/us_box';
    }else if (idx == 3) {
      url = baseUrl + '/v2/movie/top250';
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.setData({
      start: baseStart,
      count: baseCount,
    });
    this.getMovieData(url);
  },
  lower: function (e) {
    console.log(e)
    this.setData({
      start: this.data.start + this.data.count
    });
    let self = this;
    wx.request({
      url: url,
      data: {
        count: this.data.count,
        start: this.data.start
      },
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        let subjects = self.data.subjects;
        let resSubjects =  res.data.subjects;
        if (resSubjects.length > 0){
          Array.prototype.push.apply(subjects, resSubjects);
          self.setData({
            subjects: subjects
          });
        }     
        // console.log('bb', self.data.subjects.length);  
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '精选电影',
      path: '/pages/movie/movie'
    }
  }
})