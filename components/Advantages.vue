<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="advantages">
    <container
      class="advantages__container"
      type="small"
    >
      <h2
        class="advantages__title"
        v-html="advantagesData.title"
      />
      <p
        class="advantages__subtitle"
        v-html="advantagesData.subtitle"
      />
      <ul class="advantages__flex-container">
        <advantage
          v-for="item in advantagesData.items"
          :key="item.id"
          :image="item.image"
          :title="item.title"
          :content="item.content"
        />
      </ul>
    </container>
  </section>
</template>

<script>
import container from "@/components/ui/container";
import advantage from "@/components/ui/advantage";
export default {
  components: {
    container,
    advantage,
  },
  computed: {
    advantagesData() {
      return this.$store.getters["blocks/getAdvantages"];
    },
  },
};
</script>

<style  scoped>
.advantages {
  display: flex;
  padding: 0 0 96px;
  color: #092433;
}

.advantages__title {
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 16px;
}

.advantages__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 32px;
}

.advantages__flex-container {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1160px) {

  .advantages__container {
    padding: 0px 16px;
  }
}

@media screen and (max-width: 768px) {

  .advantages {
    padding: 0 0 64px;
  }
}

@media screen and (max-width: 500px) {

  .advantages__title {
    font-size: 22px;
    line-height: 28px;
  }

  .advantages__subtitle {
    font-size: 14px;
  }
}
</style>
