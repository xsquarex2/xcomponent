// pages/xrefresh/xrefresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  onLoad: function (options) {

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
    var lists = this.data.lists;
    lists.splice(this.data.lists.length, 0, 0,1,2,3,4);
    this.setData({
      lists: lists
    })
  }
})