<template>
  <div class="wrapper">
    <ul class="wrapper-ul">
      <li class="wrapper-li">
        <img src="http://cdn.iciba.com/www/img/www/0312/win-icon.png" />
        <h3>PC版个人版下载</h3>
        <p>准确、便捷的查词翻译软件</p>
        <em>查看更多 ></em>
      </li>
      <li class="wrapper-li">
        <img src="http://cdn.iciba.com/www/img/www/0312/mac-icon.png" />
        <h3>PC版企业版下载</h3>
        <p>准确、便捷的查词翻译软件</p>
        <em>查看更多 ></em>
      </li>
      <li class="wrapper-li">
        <img src="http://cdn.iciba.com/www/img/www/0312/ios-icon.png" />
        <h3>Mac版下载</h3>
        <p>准确、便捷的查词翻译软件</p>
        <em>查看更多 ></em>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 80%;
  min-width: 1203px;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 50px;
  .wrapper-ul {
    width: 100%;
  }
  .wrapper-li {
    width: 391px;
    height: 310px;
    position: relative;
    background-color: #fff;
    display: inline-block;
    margin-right: 15px;
    cursor: pointer;
    text-align: center;
    padding-top: 43px;
    line-height: 1.4;
    &:last-child{
    margin-right: 0;
    }
    h3{
      font-size: 22px;
    color: #222;
    margin-top: 30px;
    }
    p{
      font-size: 14px;
    color: #999;
    margin-top: 6px;
    }
    em{
      font-size: 14px;
    color: #0288fb;
    margin-top: 7px;
    }
  }
  .wrapper-li:hover{
    box-shadow: 4px 4px 5px #ccc;
  }
}
</style>