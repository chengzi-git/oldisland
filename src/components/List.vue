<template>
  <div class="wrapper">
    <ul class="warpper-ul">
      <li class="warpper-li" v-for="(item,i) in textArr" :key="i">
        <div class="content-item">
          <img :src="item.img" />
          <div class="item-cont">
            <p class="item-title">{{item.title}}</p>
            <p class="item-txt">{{item.txt}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textArr: [
        {
          title: "背单词",
          txt: "覆盖117本考试词表",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/1a.png"
        },
        {
          title: "双语美文",
          txt: "了解全球新闻的窗口",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/2a.png"
        },
        {
          title: "练听力",
          txt: "VOA、BBC在线收听",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/3a.png"
        },
        {
          title: "说口语",
          txt: "每日一练说地道英语 ",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/4a.png"
        },
        {
          title: "文档翻译",
          txt: "Word、Excel智能翻译 ",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/5a.png"
        },
        {
          title: "证件翻译",
          txt: "身份证、等人工翻译",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/6a.png"
        },
        {
          title: "简历翻译",
          txt: "求职简历的人工翻译 ",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/7a.png"
        },
        {
          title: "论文翻译",
          txt: "毕业论文人等工翻译",
          img: "http://cdn.iciba.com/www/img/www/0312/funclist/8a.png"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  min-width:1200px;
  margin: 0 auto;
  width: 80%;
  height: 252px;
  padding: 40px 20px 0 20px;
  background: #fff;
  position: relative;
  top: -60px;
  .warpper-ul {
    width: 100%;
    height: 100%;
    .warpper-li {
      float: left;
      width: 25%;
      height: 50%;
      cursor: pointer;
    }
    .content-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item-cont{
        margin-left: 20px;
    }
    .item-title {
      font-size: 20px;
      color: #111;
      font-weight: 700;
    }
    .item-txt {
      font-size: 14px;
      color: #999;
      margin-top: 7px;
    }
  }
}
</style>