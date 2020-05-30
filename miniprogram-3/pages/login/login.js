// pages/login/login.js
Page({
  data: {
    userName: '',
    userPwd: "",
    login_message:""
  },
  //获取用户输入的用户名
  userNameInput: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passWdInput: function(e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
 
  loginBtnClick: function(e) {
    getApp().data.whether_login = false
    getApp().data.name = this.data.userName
    getApp().data.password = this.data.userPwd
    console.log("用户名：" + this.data.userName + " 密码：" + this.data.userPwd)
    wx.request({
      url: 'https://songbin.club/zhangjintao/checkuser.php',
      method: "GET",
      data: {
        user_name: this.data.userName
      },
      dataType: 'json',
      success: (res) => {
        console.log(res.data[0])
        if (res.data[0].password !== this.data.userPwd) {
          this.setData({
            login_message: "用户名或密码不正确"
          })
        } else {
          getApp().data.whether_login = true
          getApp().data.name = this.data.userName
          getApp().data.password = this.data.userPwd
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            })
          }, 2000)

        }


      }
    })
},
register: function() {
  wx.navigateTo({
    url: '/pages/register/register',
  })
}
})