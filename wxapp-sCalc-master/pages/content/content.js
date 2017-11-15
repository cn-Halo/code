Page({
  data: {
    imgUrls: [
      'https://static.vux.li/demo/1.jpg',
      'https://static.vux.li/demo/2.jpg',
      'https://static.vux.li/demo/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    news: []
  },
  onLoad:function(){
    var news = [{
      "title": "盛世华安公司荣获2017世界物联网博览会优秀奖",
      "title_plain": "盛世华安公司荣获2017世界物联网博览会优秀奖",
      "excerpt": "<p>9月10日下午，“2017世界物联网博览会——新技术新产品成果颁奖大会”在江苏无锡举行。经过公开征集、专家初审、专家综合评审、公示 [&hellip;]</p>\n",
    }]
    this.setData({
      news:news
    })
  }
  

})