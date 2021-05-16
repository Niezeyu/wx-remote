// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    oppn: false,
    num: 17,
    showFeng: false,
    mobyle: "自动扫风",
    showTime: false,
  },
  // 事件处理函数
  btnClose: function() {
    var oppn = this.data.oppn
    this.setData({
      oppn: !oppn,
      showFeng: false,
      showTime: false
    })
  },
  saofeng() {
    if(this.data.oppn === false) { 
      return
    }
    var showFeng = this.data.showFeng
    this.setData({
      showFeng: !showFeng,
    })
  },
  zidongguanbi() {
    if(this.data.oppn === false) { 
      return
    }
    var showTime = this.data.showTime
    this.setData({
      showTime: !showTime,
    })
  },
  up() {
    if(this.data.oppn == true) {
    if(this.data.num > 29) {
      this.data.num = 30
      return
    } else {
     var num = this.data.num
     this.setData({
      num: num + 1,
    })
    }
  }
    return
  },
  down() {
    if(this.data.oppn == true) {
    if(this.data.num < 17) {
      this.data.num = 16
      return
    } else {
     var num = this.data.num
     this.setData({
      num: num - 1,
    })
    }
  }
  return
  }
})
