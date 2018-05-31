// pages/xrefresh/xrefresh.js
var xmore;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    page: 1,
  },
  onLoad: function (options) {
    xmore = this.selectComponent('#xmore')
  },
  getTen() {
    var lists = []
    for (var i = 0; i < 10; i++) {
      lists.push(i)
    }
    return lists;
  },

  // 加载更多
  onReachBottom: function (e) {

    var that = this;
    var lists = this.data.lists;
    if (that.data.page == 3) {
      xmore
    }
    if (that.data.page == 3) {
      xmore.shownomore();
    }
    if (!xmore.isnomore()) {
      setTimeout(function () {

        lists.splice(that.data.lists.length, 0, 0, 1, 2, 3, 4);
        that.setData({
          lists: lists
        })
        console.log("请求了")
        that.data.page = that.data.page + 1;
        xmore.showloading();

      }, 1000)
    }
  },
  onPullDownRefresh: function () {
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 1000)
  }
})