const QRCode = require('../../utils/weapp-qrcode.js')
let qrcode;
Page({

  /**
   * 页面的初始数据
   */
  data:{
    qrcodeWidth:300,
    price:100,
    order_id:"",
    user_name:"",
    url:""

  },
  cope_url:function(){
    wx.setClipboardData({
      data: this.data.url,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.user_name=getApp().data.name
    this.data.order_id = getApp().data.order_id
    this.setData({
      url :getApp().data.server + 'price=' + this.data.price + '&username=' + this.data.user_name + '&order_id=' + this.data.order_id
    })
    
    console.log(this.data.url)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
      qrcode = new QRCode('canvas', {
        usingIn: this,
        width: this.data.qrcodeWidth,
        height: this.data.qrcodeWidth,
        colorDark: "black",
        colorLight: "white",
        correctLevel: QRCode.CorrectLevel.H,
      })
    qrcode.makeCode(this.data.url)

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