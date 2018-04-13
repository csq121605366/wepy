// import _ from 'lodash';
// global._ = _;
import wepy from 'wepy'
import * as qiniu from 'qiniu-js/dist/qiniu.min.js'

wepy.qiniu = qiniu

const asyncWrap = fn => (options = {}) => new Promise((resolve, reject) => {
  let conf = {
    success: res => {
      resolve(res)
    },
    fail: err => {
      reject(err)
    }
  }
  wepy[fn](Object.assign({}, conf, options))
})

wepy.requestAsync = asyncWrap('request')
wepy.loginAsync = asyncWrap('login')
wepy.getSystemInfoAsync = asyncWrap('getSystemInfo')
