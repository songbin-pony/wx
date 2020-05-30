// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    station: "北京站",
    station_code: "BJP",
    station_list: [],
    station_of_from_or_to:""

  },
  // 输入框输入
  bindinput: function (e) {
    var value = e.detail.value
    wx.cloud.init({
      env: getApp().data.cloud_env
    })
    const db = wx.cloud.database()
    const _ = db.command
    db.collection("station").where({
      station: db.RegExp({
        regexp: value
      })
    }).get({
      success: (res) => {
        this.setData({
          station_list: res.data
        })
      }
    })
  },
  // 站点选择
  search_button_list_Click:function(res){
    for (var i = 0; i < this.data.station_list.length; ++i) {
      if (res.currentTarget.id == this.data.station_list[i].station){
        this.data.station = this.data.station_list[i].station
        this.data.station_code = this.data.station_list[i].station_code
      }  
    }
    if(this.data.station_of_from_or_to=="from"){
      getApp().data.from_station=this.data.station;
      getApp().data.from_station_code = this.data.station_code;
    }
    else{
      getApp().data.to_station = this.data.station;
      getApp().data.to_station_code = this.data.station_code;
    }
    wx.navigateBack({
      delta:1
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.station_of_from_or_to=getApp().data.station_of_from_or_to
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