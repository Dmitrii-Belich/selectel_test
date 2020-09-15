<template>
  <section class="banners">
    <container>
      <swiper
      class="banners__swiper"
        ref="mySwiper"
        :options="swiperOption"
      >
        <swiper-slide
        class="banners__slide"
          v-for="banner in bannersData"
          :key="banner.id"
        >
          <h1
            class="banners__title"
            v-html="banner.title"
          />
          <p class="banners__subtitle" v-html="banner.description" />
          <mainbutton
          class="banners__button"
            :text="banner.button.text"
            :link="banner.button.link"
          />
        </swiper-slide>
      </swiper>
      <div class="banners__pagination">
        <switchbutton
          type="left"
          @click="back"
        />
        <p class="banners__pages">{{`${1} / ${bannersData.length}`}}</p>
        <switchbutton
          type="right"
          @click="further"
        />
      </div>
    </container>
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
      mySwiper: {},
      swiperOption: {
        slidesPerView: "auto",
        effect: "coverflow",
        simulateTouch: false,
        loop: true,
pagination: {
            el: '.swiper-pagination'
          },
      },
    };
  },
  beforeCreate () {

  },


  computed: {
    bannersData() {
      return this.$store.getters["blocks/getBanners"];
    },
    swiper() {
        return this.$refs.mySwiper.$swiper
      },
  },
  methods: {
    back() {
      console.log(this.swiper)
      this.swiper.slidePrev(400, true)
    },
    further() {
      console.log(this.swiper)
     this.swiper.slideNext(400, true);
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
  height: 620px;
  padding: 0 0 34px;
  box-sizing: border-box;
  background-image: url("/images/banner.png");
  background-size: cover;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.banners__slide {
  height: 620px;
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
