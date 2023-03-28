// pages/mian-video/index.js
import { getTopMV } from '../../api/video';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs:[],
    hasMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.getTopMVData(0);
    // const res = await getTopMV(0);
    // this.setData({ topMVs:res.data })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.getTopMVData(0);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getTopMVData(this.data.topMVs.length);
  },

  async getTopMVData(offset){
    // 初始化没有更多数据
    if(!this.data.hasMore && offset!=0){
      return;
    }

    let data = this.data.topMVs;
    const result = await getTopMV(offset);
    // 停止刷新动作
    if(offset==0){
      wx.stopPullDownRefresh()
    }
    
    if(offset !== 0){
      data = this.data.topMVs.concat(result.data);
    }else{
      data = result.data;
    }
    // 设置状态
    this.setData({ topMVs:data });
    this.setData( {hasMore:result.hasMore})

 
  },

  // 跳转视频详情页面
  pushVideoDetail(e){
    let item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../video_detail/index?id='+item.id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})