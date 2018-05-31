//BaseUrl
// 10000001
const baseurl = 'http://192.168.1.234:8080/';
// const baseurl = 'https://rrw.chinaduijiao.com/';
const url = 'https://rrw.chinaduijiao.com/';
module.exports = {
  baseUrl: baseurl,
  url: url,
  qiniu:'p9279wgum.bkt.clouddn.com',
  /**
   * GET请求
   */
  GET: function (url, data, success) {
    requestGet(url, data, success)
  },
  /**
   * POST请求
   */
  POST: function (url, data, success) {
    requestPost(url, data, success)
  }
}
function requestGet(url, data, success, fail) {
  request(url, 'GET', data, success)
}
function requestPost(url, data, success, fail) {
  request(url, 'POST', data, success, fail)
}
function request(url, method, data, success, fail) {
  wx.showLoading({
    title: '正在加载中',
  })
  
  wx.request({
    url: baseurl + url,
    data: data,
    header: { "Content-Type": "application/x-www-form-urlencoded" },
    method: method,
    success: function (res) {
      wx.hideLoading()
      console.log(JSON.stringify(data))
      // 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
      // if (res.data == '') {
      //   wx.showModal({
      //     title: '提示',
      //     content: '这个问题找谢大佬',
      //   })
      // }
      success(res)
    },
    fail: function () {
      wx.hideLoading()
      fail && fail()
      wx.showToast({
        title: '网络请求失败',
        icon: 'none'
      })
    },
    complete: function (res) {
      wx.stopPullDownRefresh()
    }
  })
}
