<template>
  <div class="bigbox">
    <div class="header-nav">
      <div class="header-nav-left">
        <ul>
          <li class="nav-tiem active">首页</li>
          <li class="nav-tiem">背单词</li>
          <li class="nav-tiem">双语美文</li>
          <li class="nav-tiem">练听力</li>
          <li class="nav-tiem">文档翻译</li>
          <li class="nav-tiem">人工翻译</li>
        </ul>
      </div>
      <div class="header-nav-right">
        <ul>
          <li class="nav-tiem">客户端下载</li>
          <li class="nav-tiem">专栏平台</li>
          <li class="nav-tiem fa fa-user"></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="container_nav">
        <ul>
          <li>自动检测语言</li>
          <li class="active" @click="translate1">翻译</li>
          <li>人工翻译</li>
          <li>文档翻译</li>
        </ul>
      </div>
      <div class="warpper">
        <div class="warpper_left">
          <textarea  class="leftext" v-model="text" cols="30" rows="10"></textarea>
        </div>
        <div class="warpper_right">
          <textarea  class="rigtext" v-model="translate" readonly resize="none" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: this.$route.params.name,
      translate: this.$route.params.content.content.out
    };
  },
  methods: {
    // iscontext(){
    //   if(this.text){
        
    //   }
    // }
    translate1(){
      if(this.text){
      this.axios(
          `/fys?a=fy&f=auto&t=auto&w=${this.text}`
        ).then(res => {
          console.log(res.data);
          this.translate=res.data.content.out||res.data.content.word_mean[0]
        });
      }
    }
  },
  beforeMount() {
    this.$router.afterEach(to => {
      this.text = to.params.name;
      this.translate = to.params.content.content.out||to.params.content.content.word_mean[0]
      console.log({
        to: to.params
      });
    });
  },
  mounted() {
    this.translate1()
  },
};
</script>
<style lang="scss" scoped>
//导航栏布局
.header-nav {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  color: hsla(0, 0%, 100%, 0.6);
  height: 50px;
  background: #26282a;
  padding: 0 150px;
  z-index: 99;
  ul {
    cursor: pointer;
  }
  .header-nav-left {
    flex: 1;
    .nav-tiem {
      float: left;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .header-nav-right {
    flex: 0 0 200px;
    text-align: center;
    .nav-tiem {
      float: left;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .nav-tiem:hover {
    color: #fff;
  }
}
.bigbox {
  width: 100%;
  min-width: 1200px;
  min-height: 800px;
  height: 100%;
  background: #f0f0f0;
}
.container {
  width: 800px;
  height: 500px;
  margin: 0px auto;
  padding-top: 100px;
}
.container_nav {
  ul {
    display: flex;
    justify-content: left;
  }
  li {
    font-size: 18px;
    padding: 5px 8px;
    margin-right: 30px;
    background: #fff;
    &.active {
        background: yellowgreen;
        color: white;
        cursor: pointer;
      }
    &:last-child {
      margin-right: 10px;
    }
  }
}
.warpper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .leftext {
    margin-right: 20px;
    width: 380px;
    height: 380px;
    outline: none;
    border: 5px solid yellowgreen;
  }
  .rigtext {
    border: 0;
    width: 380px;
    height: 390px;
    outline: none;
  }
}
</style>
