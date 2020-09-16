<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="banners">
    <swiper
      ref="mySwiper"
      class="banners__swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="banner in bannersData"
        :key="banner.id"
        class="banners__slide"
        style="background-image: url(&quot;/images/banner.png&quot;);
  background-size: cover;"
      >
        <!-- Есть возможность вставлять изображения приходящие с сервера,
      индивидуальное для каждого слайда -->
        <container>
          <h1
            class="banners__title"
            v-html="banner.title"
          />
          <p
            class="banners__subtitle"
            v-html="banner.description"
          />
          <mainbutton
            class="banners__button"
            :text="banner.button.text"
            :link="banner.button.link"
          />
        </container>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-fraction"><span class="swiper-pagination-current"></span>  <span class="swiper-pagination-total"></span></div>
    </swiper>
    <div class="banners__pagination">
      <switchbutton
        type="left"
        @click="back"
      />
      <p class="banners__pages">
        {{ `${page} / ${bannersData.length}` }}
      </p>
      <switchbutton
        type="right"
        @click="further"
      />
    </div>
  </section>
</template>

<script>
import container from "@/components/ui/container";
import mainbutton from "@/components/ui/mainbutton";
import switchbutton from "@/components/ui/switchbutton";
export default {
  components: {
    container,
    mainbutton,
    switchbutton,
  },
  data() {
    return {
      page: 1,
      swiperOption: {
        slidesPerView: "auto",
        effect: "coverflow",
        simulateTouch: false,
        loop: true,
        pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
      },
    };
  },

  computed: {
    bannersData() {
      return this.$store.getters["blocks/getBanners"];
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    back() {
      this.swiper.slidePrev(400, true);
      console.log(this.swiper.activeIndex);
      console.log(this.swiper);
      this.page = this.swiper.activeIndex > this.bannersData.length ? this.swiper.activeIndex  - this.bannersData.length : this.swiper.activeIndex
    },
    further() {
      this.swiper.slideNext(400, true);
      console.log(this.swiper.activeIndex);
      console.log(this.swiper);
      this.page = this.swiper.activeIndex > this.bannersData.length ? this.swiper.activeIndex  - this.bannersData.length : this.swiper.activeIndex
    },
  },
};
</script>

<style scoped>
.banners__pagination {
  display: flex;
  position: absolute;
  bottom: 42px;
  left: 46%;
  z-index: 100;
}

.banners {
  box-sizing: border-box;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.banners__slide {
  height: 620px;
  padding: 0 0 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.banners__title {
  font-weight: 500;
  font-size: 64px;
  line-height: 87px;
  margin-bottom: 14px;
  max-width: 1050px;
}
.banners__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  margin-left: 111px;
  margin-bottom: 48px;
  max-width: 930px;
}
.banners__pages {
  font-size: 18px;
  line-height: 24px;
  margin: 7px 20px 0;
}
</style>
