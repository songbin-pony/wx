//index.js
//获取应用实例
var util = require('../../utils/util.js');
Page({
  data: {
    from_station: "武汉",
    to_station: "上海",
    train_list:[],
    date:"2020-04-08",


  },
  // 获取出发时间
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    getApp().data.now_time = this.data.date
  },
  onLoad: function () {
    var time = util.formatTime(new Date())
    this.setData({
      date: time
    })
    getApp().data.now_time = time

  },
  onShow: function() {
    this.setData({
      from_station: getApp().data.from_station,
      to_station: getApp().data.to_station
    })
  },
  from_station_input: function() {
    getApp().data.station_of_from_or_to = "from"
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  to_station_input: function() {
    getApp().data.station_of_from_or_to = "to"
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  loginBtnClick:function(){
    var appdata=getApp().data
    wx.request({
      url: 'https://kyfw.12306.cn/otn/leftTicketPrice/query?leftTicketDTO.train_date='+appdata.now_time+'&leftTicketDTO.from_station='+appdata.from_station_code+'&leftTicketDTO.to_station='+appdata.to_station_code+'&leftTicketDTO.ticket_type=1&randCode=',
      method: "GET",
      dataType: 'json',
      success: (res) => {
        console.log(res)
        this.data.train_list = res.data.data
        getApp().data.train_list = res.data.data
      }
    })
    setTimeout(function () {
    wx.navigateTo({
      url: '/pages/train_list/train_list',
    })
    }, 50)

  }

})