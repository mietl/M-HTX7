// components/header-article/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'标题'
    },
    rightShow:{
      type:Boolean,
      value:true
    },
    rightText:{
      type:String,
      value:'更多'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    trailingTap(){
      this.triggerEvent('trailingTap')
    }
  }
})
