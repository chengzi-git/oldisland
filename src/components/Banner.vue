<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <img src="http://cdn.iciba.com/www/img/www/0312/ciba-icon.png" />
      <h1>金山词霸</h1>
      <p>多端数据云端同步，支持多个设备</p>
      <p>拍照语音翻译，支持英法日等7国语音</p>
      <ul>
        <li class="wrapper-item">
          <div class="item-content">
            <img src="http://cdn.iciba.com/www/img/www/0312/apple-icon.png" />
            iPhone版下载
          </div>
          <div class="item-footer">
            <p>手机直接扫码下载</p>
            <img src="http://cdn.iciba.com/www/img/www/0312/android-qrcode-new.png" alt />
          </div>
        </li>
        <li class="wrapper-item">
          <div class="item-content">
            <img src="http://cdn.iciba.com/www/img/www/0312/android-icon.png" />
            Android版下载
          </div>
          <div class="item-footer">
            <p>手机直接扫码下载</p>
            <img src="http://cdn.iciba.com/www/img/www/0312/android-qrcode-new.png" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 80%;
  min-width: 1200px;
  margin: 0 auto;
  background: url(//cdn.iciba.com/www/img/www/0312/dl-bg.jpg) no-repeat;
  background-size: 100% 100%;
  height: 480px;
  margin-top: -40px;
  position: relative;
  z-index: 1;
  .wrapper-content {
    text-align: center;
    line-height: 1.4;
    position: absolute;
    top: 120px;
    left: 85px;
    h1 {
      font-size: 30px;
      color: #222;
      margin: 6px auto 10px;
    }
    p {
      font-size: 14px;
      color: #666;
      letter-spacing: 0;
    }
    ul {
      margin-top: 20px;
      .wrapper-item:hover{
      overflow:visible;
      .item-content{
          background-color: #0288fb;
      }
      }
    }
    .wrapper-item {
      width: 160px;
      height: 44px;
      font-size: 14px;
      cursor: pointer;
      line-height: 44px;
      display: inline-block;
      margin: 0 5px;
      overflow:hidden;
      vertical-align: top;
      .item-content {
        color: #fff;
        background-color: #111;
        position: relative;
      }
      .item-content img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
      }
      .item-footer {
        background-color: #fff;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #dedede;
        border-radius: 1px;
        p {
          font-size: 12px;
          color: #999;
          line-height: 1.4;
          margin-bottom: 4px;
        }
        img {
          width: 140px;
          height: 140px;
        }
      }
    }
  }
}
</style>