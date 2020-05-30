// pages/refunded/refunded.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name: "",
    unpaid_order: [],
    need_order: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.user_name = getApp().data.name
    wx.request({
      url: 'https://songbin.club/zhangjintao/refunded_get.php',
      method: "GET",
      data: {
        user_name: this.data.user_name,
      },
      dataType: 'json',
      success: (res) => {
        this.data.unpaid_order = res.data
        console.log(res.data)

        var temp_list = this.data.unpaid_order
        var list = new Array()//订单的数目
        var last = new Array()//处理的结果
        for (var i = 0; i < temp_list.length; i++) {
          if (list.indexOf(temp_list[i].order_id) == -1) {
            list.push(temp_list[i].order_id);
          }
        }
        for (var j = 0; j < list.length; j++) {
          last[j] = new Array()
          for (var i = 0; i < temp_list.length; i++) {
            if (list[j] == temp_list[i].order_id) {
              last[j].push(temp_list[i])
            }
          }
        }
        this.setData({
          need_order: last
        })
      }
    })

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