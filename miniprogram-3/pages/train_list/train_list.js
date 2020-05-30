// pages/train_list/train_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    train_list: [],
    train_list_selected:[],

  },
  // 列车详情页跳转
  train_info_detail_click:function(res){
    var train_list_selected = res.currentTarget.id
    for(var i=0;i<this.data.train_list.length;i++){
      if (this.data.train_list[i].queryLeftNewDTO.train_no==train_list_selected){
        this.data.train_list_selected = this.data.train_list[i].queryLeftNewDTO
      }
    }
    getApp().data.train_list_selected=this.data.train_list_selected
    wx.navigateTo({
      url: '/pages/train_info_detail/train_info_detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      train_list: getApp().data.train_list
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