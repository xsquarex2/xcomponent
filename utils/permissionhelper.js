module.exports = {
  /**
   * scope.userLocation
   * scope.address
   * scope.invoiceTitle
   * scope.werun
   * scope.record
   * scope.writePhotosAlbum
   * scope.camera
   */
  getpermission: function (permission,back) {
    getPermission(permission,back);
  }
}
/**
 * 获取权限
 */
function getPermission(permission,back) {
  wx.getSetting({
    success: res => {
      if (!res.authSetting[permission]) {
        wx.showModal({
          title: '提示',
          content: '请授予权限',
          complete:function(res){
            if (res.confirm){
              wx.openSetting({
                complete: function (res) {
                  // 执行参数的函数
                  if (typeof back == "function") {
                    if (res.authSetting[permission]) {
                      back(true)
                    } else {
                      back(false)
                    }
                  }
                }
              })
            }else{
              back(false)
            }
          }
        })
      } else {
        back(true)
      }
    }
  })
}
