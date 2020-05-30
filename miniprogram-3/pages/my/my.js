// pages/my/my.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_whether_login: false,
    my_name: "",
    my_password: ""

  },
  // 退出登陆
  User_Quit: function() {
    this.setData({
      my_whether_login: false
    })
  },
  // 未支付订单
  unpaid_order: function() {
    if (this.data.my_whether_login == false) {
      wx.showToast({
        title: '请先登陆',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.navigateTo({
        url: '/pages/unpaid/unpaid',
      })

    }
  },
  // 已经支付订单
  paid_order: function() {
    if (this.data.my_whether_login == false) {
      wx.showToast({
        title: '请先登陆',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.navigateTo({
        url: '/pages/paid/paid',
      })

    }


  },
  //待退款订单
  need_refund:function(){
    if (this.data.my_whether_login == false) {
      wx.showToast({
        title: '请先登陆',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.navigateTo({
        url: '/pages/unrefund/unrefund',
      })

    }
  },
  //已经退款订单
refunded:function(){
  if (this.data.my_whether_login == false) {
    wx.showToast({
      title: '请先登陆',
      icon: 'none',
      duration: 1000
    })
  } else {
    wx.navigateTo({
      url: '/pages/refunded/refunded',
    })

  }

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      my_whether_login: getApp().data.whether_login
    })
    if (this.data.my_whether_login !== false) {
      this.setData({
        my_name: getApp().data.name,
        my_password: getApp().data.password
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})