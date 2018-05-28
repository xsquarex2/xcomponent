//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        components: ["上拉加载下拉刷新"]
    },
    onLoad: function () {

    },
    // 点击item
    clickitem: function (res) {
        var index = res.currentTarget.dataset.index;
        switch (index) {
            case 0:
                wx.navigateTo({
                  url: '/pages/xrefresh/xrefresh'
                })
                break
        }
    }

})
