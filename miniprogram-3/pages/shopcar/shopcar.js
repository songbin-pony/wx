// pages/shopcar/shopcar.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticket_list: [],
    ticket_selected_list: [],
    user_name: "",
    manage_or_complish: "manage",
    pay_or_del: "pay",
    // 是否全选
    select_all: false

  },
  // 点击管理
  Manage: function () {
    this.setData({
      manage_or_complish: "complish",
      pay_or_del: "del"
    })

  },
  // 点击完成
  Complish: function () {
    this.setData({
      manage_or_complish: "manage",
      pay_or_del: "pay"
    })
  },
  // 点击全选
  Select_All: function () {
    var select_condition = this.data.select_all
    var temp = this.data.ticket_list
    if (temp[0].index == 0) {
      for (var i = 0; i < temp.length; i++) {
        temp[i].index = 1;
        select_condition = true;
      }
    } else {
      for (var i = 0; i < temp.length; i++) {
        temp[i].index = 0;
        select_condition = false;
      }
    }
    this.setData({
      ticket_list: temp,
      select_all: select_condition
    })
  },
  // 单选车次
  select_one: function (res) {
    var temp = this.data.ticket_list
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].add_time == res.currentTarget.id) {
        if (temp[i].index == 1) {
          temp[i].index = 0;
        } else {
          temp[i].index = 1;
        }
        break;
      }
    }
    this.setData({
      ticket_list: temp
    })
  },
  // 删除购物车东西
  del_commodity: function () {
    var temp = this.data.ticket_list
    var temp_del = new Array()
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].index == 1) {
        temp_del.push(temp[i])
      }
    }
    for (var i = 0; i < temp_del.length; i++) {
      wx.request({
        url: 'https://songbin.club/zhangjintao/del_commodity.php',
        method: "GET",
        data: {
          user_name: temp_del[i].user_name,
          add_time: temp_del[i].add_time,
          ticket_num: temp_del[i].ticket_num,
          train_no: temp_del[i].train_no,
          start_train_date: temp_del[i].start_train_date,
        },
        dataType: 'json',
        success: (res) => {
          this.onShow()
          console.log(res.data.info)
        }
      })
    }
  },
  // 支付
  pay_money:function(){
    var user_name=this.data.user_name
    var temp = this.data.ticket_list
    var temp_pay = new Array()
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].index == 1) {
        temp_pay.push(temp[i])
      }
    }
    var now_time = util.formatTime_3(new Date())
    var order_id = user_name + '-' + now_time
    for (var i = 0; i < temp_pay.length; i++) {
      wx.request({
        url: 'https://songbin.club/zhangjintao/addorder.php',
        method: "GET",
        data: {
          order_id:order_id,
          user_name: temp_pay[i].user_name,
          create_time: now_time,
          ticket_num: temp_pay[i].ticket_num,
          train_no: temp_pay[i].train_no,
          start_station_name:temp_pay[i].start_station_name,
          end_station_name: temp_pay[i].end_station_name,
          start_time: temp_pay[i].start_time,
          arrive_time: temp_pay[i].arrive_time,
          start_train_date: temp_pay[i].start_train_date,
        },
        dataType: 'json',
        success: (res) => {
          this.onShow()
          console.log(res.data)
        }
      })
    }
    // 传参
    getApp().data.order_id=order_id
    wx.navigateTo({
      url: '/pages/scan_code/scan_code',
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.data.user_name = getApp().data.name
    wx.request({
      url: 'https://songbin.club/zhangjintao/shop_car.php',
      method: "GET",
      data: {
        user_name: this.data.user_name
      },
      dataType: 'json',
      success: (res) => {
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].index = 0;
        }
        this.setData({
          ticket_list: res.data,
        })
      }
    })




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