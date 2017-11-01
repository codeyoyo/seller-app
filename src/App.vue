<template>
  <div>
    <v-header v-bind:seller="seller" id='header'></v-header>
    <div class="tab" id='tab'>
      <div class="tab-item">
        <router-link to="/goods">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
    </div>

    <transition name="slide">
       <router-view></router-view>
    </transition>

    <v-bottom id='bottom'></v-bottom>
  </div>
</template>

<script>
  import header from 'components/header/header.vue';
  import bottom from 'components/bottom/bottom.vue';
  export default {
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header,
      'v-bottom':bottom
    },
    created() {
      this.seller = this.$store.getters.getSellerData;
    }
  };
</script>

<style>
  .tab {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    position: relative;
  }

  .tab::after {
    position: absolute;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    content: ' ';
  }

  .tab::before {
    position: absolute;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    left: 0;
    top: 0;
    height: 1px;
    width: 100%;
    content: ' ';
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab .tab-item > a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }

  .tab .tab-item > .active {
    color: rgb(240, 20, 20);
  }
</style>
