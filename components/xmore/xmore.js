// components/xmore/xmore.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textnomore: {
      type: String,
      value: '没有更多了...'
    },
    textloading:{
      type:String,
      value:'玩命加载中...请稍等',
    },

  },
  /**
   * 组件的初始数据
   */
  data: {
    //0表示没有更多了,1为加载中
    status:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    shownomore:function(){
      this.setData({
        status:0,
      })
    },
    showloading:function(){
      this.setData({
        status:1,
      })
    },
    isnomore:function(){
      return this.data.status == 0;
    }
  }
})
