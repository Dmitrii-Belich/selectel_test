<template>
  <!-- eslint-disable vue/no-v-html
  eslint-disable vue/no-deprecated-slot-attribute-->
  <section class="banners">
    <swiper
      ref="mySwiper"
      class="banners__swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="banner in bannersData"
        :key="banner.id"
      >
        <!-- Есть возможность вставлять изображения приходящие с сервера,
        индивидуальное для каждого слайда-->
        <a :href="banner.button.link">
          <div
            class="banners__slide"
            style="background-image: url(&quot;/images/banner.png&quot;); "
          >
            <container class="banners__container">
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
              />
            </container>
          </div>
        </a>
      </swiper-slide>
    </swiper>
    <div class="banners__buttons">
      <switchbutton
        slot="button-prev"
        class="swiper-button-prev"
      />
      <div
        slot="pagination"
        class="swiper-pagination banners__pagination"
      />
      <switchbutton
        slot="button-next"
        type="right"
        class="swiper-button-next"
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
      swiperOption: {
        slidesPerView: "auto",
        simulateTouch: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  computed: {
    bannersData() {
      return this.$store.getters["blocks/getBanners"];
    },
  },
};
</script>

<style scoped>
.banners__buttons {
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 42px;
  z-index: 100;
  align-items: flex-end;
}

.banners__pagination {
  position: static;
  font-size: 18px;
  line-height: 24px;
  margin: 0 20px 6px;
  width: 42px;
}

.banners {
  box-sizing: border-box;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.banners__slide {
  background-size: cover;
  background-position: center;
  height: 620px;
  padding: 0 0 34px;
  box-sizing: border-box;
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
  color: #fff;
  text-decoration: none;
}

.banners__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  margin-left: 111px;
  margin-bottom: 48px;
  max-width: 930px;
  color: #fff;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .banners__buttons {
    width: 100%;
    justify-content: space-between;
    bottom: 20px;
    padding: 0 17px;
    box-sizing: border-box;
  }

  .banners__slide {
    height: 400px;
    padding: 0 0 90px;
  }

  .banners__title {
    font-size: 36px;
    line-height: 49px;
    margin: 0 0 11px;
  }

  .banners__subtitle {
    font-size: 18px;
    line-height: 25px;
    margin: 0 0 20px;
    max-width: 610px;
  }
}

@media screen and (max-width: 460px) {
  .banners__title {
    font-size: 28px;
    line-height: 35px;
  }

  .banners__subtitle {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
