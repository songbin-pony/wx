// pages/train_info_detail/train_info_detail.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    train_list_selected: [],
    user_name: "",
    ticket_num: 1,

  },
  // 增加加票
  add_Ticket: function () {
    var ticket_num = this.data.ticket_num
    ticket_num = ticket_num + 1;
    this.setData({
      ticket_num: ticket_num
    })

  },
  // 减少票数
  subtract_Ticket: function () {
    var ticket_num = this.data.ticket_num
    ticket_num = ticket_num - 1;
    this.setData({
      ticket_num: ticket_num
    })
  },
  // 加入购票车
  add_to_shopcar: function (res) {
    if (getApp().data.whether_login == false) {
      wx.showToast({
        title: '请先登陆',
        icon: 'none',
        duration: 1000
      })
    } else {
      var now_time = util.formatTime_2(new Date())
      wx.request({
        url: 'https://songbin.club/zhangjintao/post.php',
        method: 'GET',
        data: {
          user_name: this.data.user_name,
          add_time: now_time,
          ticket_num:this.data.ticket_num,
          train_no: this.data.train_list_selected.train_no,
          start_station_name: this.data.train_list_selected.start_station_name,
          end_station_name: this.data.train_list_selected.end_station_name,
          start_time: this.data.train_list_selected.start_time,
          arrive_time: this.data.train_list_selected.arrive_time,
          start_train_date: this.data.train_list_selected.start_train_date
        },
        header: {
          'content-Type': 'application/x-www-form-urlencoded'
        },
        success(res) {
          console.log(res.data)
          if (res.data.status == 0) {
            wx.showToast({
              title: '加入购物车失败！请再次加入',
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '成功！',
              icon: 'success',
              duration: 1500
            })
          }
        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      train_list_selected: getApp().data.train_list_selected,
      user_name: getApp().data.name
    })
    console.log(this.data.train_list_selected)
    console.log(this.data.user_name)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})