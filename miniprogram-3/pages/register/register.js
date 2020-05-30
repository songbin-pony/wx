// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    register_username: "",
    register_password_1: "",
    register_password_2: "",
    register_message: ""
  },
  // 输入注册的用户名
  userNameInput: function(e) {
    this.setData({
      register_username: e.detail.value
    })
  },
  passWdInput_1: function(e) {
    this.setData({
      register_password_1: e.detail.value
    })
  },
  passWdInput_2: function(e) {
    this.setData({
      register_password_2: e.detail.value
    })
  },
  // 点击注册触发的动作
  registerBtnClick: function() {
    // 校验密码
    var password_1 = this.data.register_password_1
    var password_2 = this.data.register_password_2
    var name_to_register = this.data.register_username
    if ((password_1 === "") || (password_2 === "")) {
      this.setData({
        register_message: "密码不能为空"
      })
    } else if (password_1 !== password_2) {
      this.setData({
        register_message: "两次输入的密码不相同"
      })
    } else if (name_to_register === "") {
      this.setData({
        register_message: "用户名不能为空"
      })
    } else {
      // 校验名字
      wx.request({
        url: 'https://songbin.club/zhangjintao/findname.php',
        method: "GET",
        data: {
          user_name: name_to_register
        },
        dataType: 'json',
        success: (res) => {
          console.log(res.data)
          if (res.data.length !== 0) {
            this.setData({
              register_message: "用户名已被注册"
            })
          } else {
            wx.request({
              url: 'https://songbin.club/zhangjintao/adduser.php',
              method: "GET",
              data: {
                user_name: name_to_register,
                password:password_1
              },
              dataType: 'json',
              success: (res) => {
                console.log(res.data)

              }
            })

            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 2000
            })
            setTimeout(function() {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)

          }
        }
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