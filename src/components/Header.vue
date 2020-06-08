<template>
  <div class="wrapper">
    <div class="container">
      <div class="container-header" :class="{'acitve':!ischang}">
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
        <div class="header-content">
          <div class="content-text">
            <p class="text-title">金山词霸</p>
            <p class="text-wrap">{{text}}</p>
          </div>
          <div class="content-inp">
            <div>
              <button class="content-btn" :class="{'active':ischang}" @click="isChang">查词</button>
              <button class="content-btn" :class="{'active':!ischang}" @click="isChang">翻译</button>
            </div>
            <input
              ref="id"
              type="text"
              @blur.prevent="changeCount"
              @focus="focusfns"
              v-model="searchText"
              placeholder="请输入您要翻译的单词或句子"
              @keyup.enter="search"
            />
            <button class="button" @click="search">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div class="interface" v-show="faceChange">
          <ul class="interface-list">
            <li  @click="dianji" class="interface-item" v-for="(item,i) in this.interface" :key="i" >
              <i class="item-key">{{item.key}}</i>
              {{item.paraphrase}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ischang: true,
      searchText: "",
      source: {},
      interface: "",
      faceChange: false
    };
  },
  methods: {
    dianji(){
      console.log(123)
    },
    isChang() {
      this.ischang = !this.ischang;
    },
    search() {
      if (this.searchText && this.ischang) {
        this.axios(
          `/cont?a=getWordMean&c=search&list=1%2C2%2C3%2C4%2C5%2C8%2C9%2C10%2C12%2C13%2C14%2C18%2C21%2C22%2C3003%2C3005&word=${this.searchText}`
        ).then(res => {
          console.log(res);
          this.$router.push({name:'About',params:{result:res.data}})
        });
      }else if(this.searchText && !this.ischang){
        let text =this.searchText
        this.axios(
          `/fys?a=fy&f=auto&t=auto&w=${this.searchText}`
        ).then(res => {
          console.log(res.data);
          this.$router.push({name:'Translate',params:{content:res.data,name:text}})
        });
      }
    },
    changeCount() {
      this.faceChange = false;
    },
    focusfns() {
      if (this.searchText) {
        this.faceChange = true;
      }
    }
  },
  watch: {
    searchText(newval, oldval) {
      if (newval != oldval && newval) {
        this.axios(
          `/ints?c=word&m=getsuggest&nums=10&client=6&is_need_mean=1&word=${this.searchText}`
        ).then(res => {
          this.interface = res.data.message;
          // console.log(this.interface);
          this.faceChange = true;
        });
      } else {
        this.faceChange = false;
      }
    }
  },
  mounted() {
    this.$refs.id.focus();
  },
  computed: {
    text() {
      let p = this.ischang
        ? "涵盖牛津词典、柯林斯高阶词典等55本词书"
        : "支持中、英、日、西、韩等七国语言互译";
      return p;
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  min-width: 1200px;
  width: 100vw;
}
.container-header {
  min-width: 100vw;
  height: 570px;
  background-image: url("http://cdn.iciba.com/www/img/www/0312/banner-1x.png");
  background-size: 100% 100%;
  position: relative;
  &.acitve {
    background-image: url("http://cdn.iciba.com/www/img/www/0312/banner-2x.png");
    background-size: 100% 100%;
  }
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
  // 联想布局
  .interface {
    position: absolute;
    left: 50%;
    margin-left: -340px;
    top: 415px;
    width: 606px;
    background-color: #fff;
    overflow: hidden;
    // padding-right: 20px;
    z-index: 99;
    .interface-item:hover{
      background-color: skyblue;
      cursor: pointer;
    }
    .interface-item {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .item-key {
        font-weight: 600;
      }
    }
  }
}

.header-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  .content-text {
    .text-title {
      font-size: 52px;
      color: #fff;
      font-weight: 600;
    }
    .text-wrap {
      font-size: 18px;
      color: #fff;
      margin-top: 6px;
    }
  }
  .content-inp {
    width: 680px;
    height: 56px;
    font-size: 0;
    margin-top: 40px;
    .content-btn {
      width: 88px;
      height: 38px;
      border: 0;
      outline: none;
      position: relative;
      top: 1px;
      clip-path: polygon(0% 0%, 20% 0%, 60% 0%, 100% 100%, 0% 100%);
      font-size: 16px;
      box-sizing: border-box;
      padding-right: 20px;
      opacity: 0.5;
      &.active {
        background: #fff;
        opacity: 1;
        font-weight: 600;
      }
    }
    input {
      width: 606px;
      height: 56px;
      border: 0;
      padding: 0;
      vertical-align: middle;
      padding-left: 20px;
      box-sizing: border-box;
      outline: none;
    }
    .button {
      width: 74px;
      height: 56px;
      border: 0;
      vertical-align: middle;
      background-color: #111;
      outline: none;
      color: #fff;
      font-size: 20px;
    }
    .button:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>