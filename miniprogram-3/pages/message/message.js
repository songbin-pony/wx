// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province_list: [],
    scenery_name_list: [],
    province_selected: "",
    scenery_name_after_selected: []

  },
  // 显示市级景点
  scenery_name_button_list_Click: function(res) {
    var scenery_name_list = [];
    for (var i = 0; i < this.data.scenery_name_list.length; i++) {
      if (this.data.scenery_name_list[i].addr == res.currentTarget.id) {
        scenery_name_list.push(this.data.scenery_name_list[i].name);
      }
    }
    this.setData({
      scenery_name_after_selected: scenery_name_list,
      province_selected: res.currentTarget.id
    })
    console.log(scenery_name_list);
    console.log(res.currentTarget.id);
  },
  // 转到每个市级的景点
  scenery_name_detail_Click: function(res) {
    var municipal_name = res.currentTarget.id
    wx.request({
      url: 'https://songbin.club/zhangjintao/index.php?scenery_name=' + res.currentTarget.id,
      method: "GET",
      dataType: 'json',
      success: (res) => {
        console.log(res)
        getApp().data.municipal_scenery_list = res.data
        console.log(res.data)
        getApp().data.municipal_name = municipal_name
      }
    })
    setTimeout(function() {
      wx.navigateTo({
        url: '/pages/municipal_scenery_list/municipal_scenery_list',
      })
    }, 50)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://songbin.club/zhangjintao/index1.php',
      method: "GET",
      dataType: 'json',
      success: (res) => {
        this.data.scenery_name_list = res.data;
        var province_list = [];
        for (var i = 0; i < this.data.scenery_name_list.length; i++) {
          if (province_list.indexOf(this.data.scenery_name_list[i].addr) == -1) {
            province_list.push(this.data.scenery_name_list[i].addr);
          }
        }
        this.setData({
          province_list: province_list
        })
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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