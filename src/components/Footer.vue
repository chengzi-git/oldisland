<template>
  <div class="wrapper">
    <ul class="wrapper-ul">
      <li class="wrapper-li">
        <img src="http://cdn.iciba.com/www/img/www/0312/phone.png" />
        <h3>致电销售顾问</h3>
        <p>拨打我们的电话，与经验丰富的销售顾问交流</p>
        <h5>13511035060</h5>
      </li>
      <li class="wrapper-li">
        <img src="http://cdn.iciba.com/www/img/www/0312/mail.png" />
        <h3>电子邮件咨询</h3>
        <p>发邮件至我们的邮箱，我们将尽快为您答疑解惑</p>
        <h5>kcb_kf@kingsoft.com</h5>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  min-width: 1200px;
  background-color: #26282a;
  .wrapper-ul {
    width: 1200px;
    margin: 0 auto;
  }
  .wrapper-li {
    display: inline-block;
    padding: 50px 0;
    text-align: center;
    width: 50%;
    line-height: 1.4;
    img {
      width: 34px;
      height: 34px;
    }
    h3 {
      font-size: 20px;
      color: hsla(0, 0%, 100%, 0.4);
      margin-top: 20px;
    }
    p {
      font-size: 14px;
      color: hsla(0, 0%, 100%, 0.4);
      margin-top: 4px;
    }
    h5 {
      font-size: 20px;
      color: #fff;
      margin-top: 6px;
    }
  }
}
</style>