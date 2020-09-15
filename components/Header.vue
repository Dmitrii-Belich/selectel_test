<template>
  <header class="header">
    <container class="header__container">
      <header-logo class="header__logo" />
      <div class="header__wrapper">
        <a href="tel:+78005550675" class="header__link">8 800 555 06 75</a>
        <a href="mailto:sales@selectel.ru" class="header__link">sales@selectel.ru</a>
      </div>
    </container>
  </header>
</template>

<script>
import SelectelLogo from "@/static/images/logo.svg";
import container from "@/components/ui/container";
export default {
  components: {
    "header-logo": SelectelLogo,
    container,
  },
};
</script>

<style  scoped>
.header {
  display: flex;
  padding: 28px 0;
  background: #F2F2F2;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  width: 135px;
  height: 32px;
}

.header__link {
  color: #000;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  margin-right: 34px;
}

.header__link:last-of-type {
  margin: 0;
}
</style>
