<template>
  <div class="app">
    <div class="container">
      <!-- 导航栏 -->
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
      <!-- 搜索框 -->
      <div class="search_box">
        <div class="search_bar">
          <div class="search_icon" @click="translate1"></div>
          <div class="search_input">
            <input v-model="searchtxt" type="text" class="search_input_main" />
          </div>
          <div class="search_clear" @click="clear">
            <i class="fa fa-times"></i>
            <span>清除</span>
          </div>
          <div class="search_hot">
            <i class="fa fa-fire"></i>
            <span>最新热词</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content_left">
          <div class="translate">
            <div class="translate_title">
              <h1>{{txt}}</h1>
              <div class="audio">
                <span>英 [hə'ləʊ]</span>
                <audio :src="enurl" ref="voice"></audio>
                <span class="fa fa-volume-up" @click="autoplay"></span>
                <span>美 [həˈloʊ]</span>
                <audio :src="amurl" ref="voice2"></audio>
                <span class="fa fa-volume-up" @click="autoplay2"></span>
              </div>
            </div>
            <div class="translate_list" v-for="(v,i) in cont" :key="i">
              <span class="list_name">{{v.part}}</span>
              <span class="list_txt">{{v.means}}</span>
            </div>
            <h1 class="txts">变形</h1>
            <p>
              <span class="list_name">复数:</span>
              {{txts}}
            </p>
          </div>
          <div class="translate_s">
            <span class="title">双语例句</span>
            <div v-for="(item,i) in demos" :key="i">
              <p class="txt1">
                <span>{{i+1}}.</span>
                <span>{{item.Network_en}}</span> 
              </p>
              <p class="txt2">{{item.Network_cn}}</p>
            </div>
          </div>
        </div>
        <div class="content_right">
          <div>
            <div>
              <span class="title">每日一句</span>
              <img
                class="rig-img"
                src="https://v-sq.ks3-cn-beijing.ksyun.com/image/597c8db1962bd5c36f96ef94b4ffb337.jpg"
                alt
              />
              <p
                class="day"
              >I think the truly natural things are dreams, which nature can't touch with decay.</p>
              <p class="day_fanyi">我认为梦境才最为真切，它自然纯净、无法侵腐。</p>
            </div>
            <div class="banner">
              <img src="https://ubmcmm.baidustatic.com/media/v1/0f000DTw89QNVxRHwQ8C7s.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchtxt: this.$route.params.result.baesInfo.word_name,
      cont: this.$route.params.result.baesInfo.symbols[0].parts,
      txt: this.$route.params.result.baesInfo.word_name,
      txts: this.$route.params.result.exchanges[0],
      demos: this.$route.params.result.sentence,
      enurl: this.$route.params.result.baesInfo.symbols[0].ph_tts_mp3,
      amurl: this.$route.params.result.baesInfo.symbols[0].ph_am_mp3_bk
    };
  },
  methods: {
    clear() {
      this.searchtxt = "";
    },
    translate1() {
      if (this.searchtxt) {
        this.axios(
          `/cont?a=getWordMean&c=search&list=1%2C2%2C3%2C4%2C5%2C8%2C9%2C10%2C12%2C13%2C14%2C18%2C21%2C22%2C3003%2C3005&word=${this.searchtxt}`
        ).then(res => {
          console.log(res.data);
          this.searchtxt = res.data.baesInfo.word_name;
          this.cont = res.data.baesInfo.symbols[0].parts;
          this.txt = res.data.baesInfo.word_name;
          this.demos = res.data.sentence,
          this.txts = res.data.exchanges[0];
          this.enurl = res.data.baesInfo.symbols[0].ph_tts_mp3;
          this.amurl = res.data.baesInfo.symbols[0].ph_am_mp3_bk;
        });
      }
    },
    autoplay() {
      if (this.$refs.voice.paused) {
        this.$refs.voice.play();
      } else {
        this.$refs.voice.pause();
      }
    },
    autoplay2() {
      if (this.$refs.voice.paused) {
        this.$refs.voice2.play();
      } else {
        this.$refs.voice2.pause();
      }
    },
  },
  beforeCreate() {
    this.$router.afterEach(to => {
      this.searchtxt = to.params.result.baesInfo.word_name;
      this.cont = to.params.result.baesInfo.symbols[0].parts;
      this.txt = to.params.result.baesInfo.word_name;
      this.txts = to.params.result.exchanges[0];
      this.demos = to.params.result.sentence,
      this.enurl = to.params.result.baesInfo.symbols[0].ph_tts_mp3;
      this.amurl = to.params.result.baesInfo.symbols[0].ph_am_mp3_bk;
    });
  }
};
</script>
<style lang="scss" scoped>
.header-nav {
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
  height: 500px;
  margin: 0px auto;
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
//搜索栏
.search_box {
  background-color: transparent;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  display: table;
  .search_bar {
    position: relative;
    margin: 10px auto 0;
    width: 998px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 13px;
    color: #999;
    .search_icon {
      float: left;
      background-image: url("http://www.iciba.com/images/search.png?t=1587026612946");
      background-position: -170px -190px;
      width: 21px;
      height: 21px;
      margin: 11px 12px 0;
      -webkit-transition: 0.25s;
      transition: 0.25s;
      cursor: pointer;
    }
    .search_input {
      float: left;
      width: 780px;
      height: 100%;
      margin-top: 8px;
      position: relative;
      .search_input_main {
        height: 24px;
        line-height: 24px;
        padding: 9px 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #333;
        border: 0;
        outline: none;
        padding: 0;
      }
    }
    .search_clear,
    .search_hot {
      transition: 0.25s;
      margin-left: 12px;
      float: left;
      cursor: pointer;
    }
  }
}
//翻译内容
.translate {
  width: 678px;
  min-width: 678px;
  background-color: #f9f8e4;
  padding: 3px 20px 10px;
  // margin: 0 auto;
  .translate_title {
    h1 {
      line-height: 26px;
      margin-top: 10px;
      margin-right: 20px;
      font-size: 32px;
      color: #32220e;
    }
    .audio{
      margin-top: 10px;
      span{
        color: #ccc;
        &.fa{
          color: #666;
          margin-left: 5px;
        }
      }
    }
  }
  .translate_list {
    span {
      display: inline-block;
      margin: 10px 10px 10px 0;
    }
  }
  .txts {
    margin-bottom: 5px;
    font-size: 18px;
    color: #32220e;
  }
  .list_name {
    line-height: 26px;
    color: #958d79;
    font-size: 16px;
    text-align: center;
    margin-right: 10px;
  }
}
//双语例句
.translate_s {
  width: 678px;
  min-width: 678px;
  background-color: #ffffff;
  padding: 3px 20px 10px;
  // margin: 0 auto;
  color: #3c4855;
  .title {
    font-size: 18px;
    border-bottom: 1px solid #000;
    display: inline-block;
    padding: 10px 0;
  }
  div {
    margin-top: 20px;
  }
  .txt1 {
    font-size: 16px;
  }
  .txt2 {
    font-size: 14px;
    margin-left: 12px;
    margin-top: 10px;
  }
}
.content {
  background: #f0f0f0;
  display: flex;
  padding-left: 265px;
  .content_right {
    width: 300px;
    min-width: 300px;
    margin-left: 20px;
    .title {
      display: inline-block;
      padding: 5px 8px;
      border-bottom: 1px solid #000;
    }
    .rig-img {
      width: 100%;
      margin-top: 10px;
    }
    .day {
      margin-top: 10px;
      font-size: 18px;
      word-break: break-all;
      word-wrap: break-word;
      color: #333;
    }
    .day_fanyi {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
    }
    .banner {
      margin-top: 10px;
    }
  }
}
</style>