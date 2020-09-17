<template>
  <header class="header">
    <container class="header__container">
      <header-logo class="header__logo" />
      <div class="header__wrapper">
        <a
          href="tel:+78005550675"
          class="header__link"
        >8 800 555 06 75</a>
        <a
          href="mailto:sales@selectel.ru"
          class="header__link"
        >sales@selectel.ru</a>
      </div>
    </container>
  </header>
</template>

<script>
import SelectelLogo from "@/assets/svg/logo.svg";
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
  background: #f2f2f2;
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
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  margin-right: 34px;
  transition: all ease 0.2s;
}

.header__link:hover {
  color:  #eb4247;
}

.header__link:last-of-type {
  margin: 0;
}

@media screen and (max-width: 768px) {
  .header {
    padding: 16px 0;
  }

  .header__wrapper {
    display: flex;
    margin-bottom: 2px;
  }

  .header__link {
    font-size: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='31' viewBox='0 0 32 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.1927 26.2419L27.7888 29.4831C26.2321 30.9655 23.7566 31.1037 22.0286 29.8047L21.3036 29.2598C14.1098 23.8523 7.60689 17.6601 1.928 10.8102L1.35569 10.1199C-0.00843399 8.47446 0.136723 6.11728 1.69346 4.63494L5.09735 1.39373C6.58048 -0.0185122 8.67942 2.03001 10.8027 4.04152C12.9114 6.03929 15.0545 7.99072 13.6469 9.33103L11.5674 11.3111C10.716 12.1218 10.6049 13.3999 11.3048 14.3328C13.0426 16.6495 15.1712 18.6764 17.6042 20.3311C18.584 20.9975 19.9261 20.8918 20.7775 20.0811L22.857 18.101C24.1464 16.8732 26.2584 18.9185 28.4082 20.9093C30.5385 22.8819 32.7196 24.788 31.1927 26.2419Z' fill='%23092433'/%3E%3C/svg%3E");
    background-position: center;
    margin-right: 35px;
    display: block;
    height: 30px;
    width: 31px;
  }

  .header__link:hover {
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='31' viewBox='0 0 32 31' fill='%23eb4247' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.1927 26.2419L27.7888 29.4831C26.2321 30.9655 23.7566 31.1037 22.0286 29.8047L21.3036 29.2598C14.1098 23.8523 7.60689 17.6601 1.928 10.8102L1.35569 10.1199C-0.00843399 8.47446 0.136723 6.11728 1.69346 4.63494L5.09735 1.39373C6.58048 -0.0185122 8.67942 2.03001 10.8027 4.04152C12.9114 6.03929 15.0545 7.99072 13.6469 9.33103L11.5674 11.3111C10.716 12.1218 10.6049 13.3999 11.3048 14.3328C13.0426 16.6495 15.1712 18.6764 17.6042 20.3311C18.584 20.9975 19.9261 20.8918 20.7775 20.0811L22.857 18.101C24.1464 16.8732 26.2584 18.9185 28.4082 20.9093C30.5385 22.8819 32.7196 24.788 31.1927 26.2419Z' fill='%23eb4247;'/%3E%3C/svg%3E");
  }

  .header__link:last-of-type {
    width: 38px;
    height: 29px;
    margin-right: 26px;
    background-image: url("data:image/svg+xml,%3Csvg width='38' height='29' viewBox='0 0 38 29' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.6667 0H6.33333C2.85 0 0 2.61 0 5.8V23.2C0 26.39 2.85 29 6.33333 29H31.6667C35.15 29 38 26.39 38 23.2V5.8C38 2.61 35.15 0 31.6667 0ZM6.33333 2.9H31.6667C31.9833 2.9 32.1417 2.9 32.4583 3.045L20.1083 14.355C19.475 14.935 18.525 14.935 17.8917 14.355L5.54167 3.045C5.85833 2.9 6.01667 2.9 6.33333 2.9ZM3.16667 23.2V5.8C3.16667 5.51 3.16667 5.365 3.325 5.075L13.6167 14.5L12.6667 15.37L3.325 23.925C3.16667 23.635 3.16667 23.49 3.16667 23.2ZM31.6667 26.1H6.33333C6.01667 26.1 5.85833 26.1 5.54167 25.955L15.0417 17.255L15.8333 16.53C16.625 17.255 17.7333 17.69 19 17.69C20.2667 17.69 21.2167 17.255 22.1667 16.53L32.4583 25.955C32.1417 26.1 31.9833 26.1 31.6667 26.1ZM34.8333 23.2C34.8333 23.49 34.8333 23.635 34.675 23.925L24.3833 14.5L34.675 5.075C34.8333 5.365 34.8333 5.51 34.8333 5.8V23.2Z' fill='%23092433'/%3E%3C/svg%3E");
  }

  .header__link:last-of-type:hover {
    background-image: url("data:image/svg+xml,%3Csvg width='38' height='29' viewBox='0 0 38 29' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.6667 0H6.33333C2.85 0 0 2.61 0 5.8V23.2C0 26.39 2.85 29 6.33333 29H31.6667C35.15 29 38 26.39 38 23.2V5.8C38 2.61 35.15 0 31.6667 0ZM6.33333 2.9H31.6667C31.9833 2.9 32.1417 2.9 32.4583 3.045L20.1083 14.355C19.475 14.935 18.525 14.935 17.8917 14.355L5.54167 3.045C5.85833 2.9 6.01667 2.9 6.33333 2.9ZM3.16667 23.2V5.8C3.16667 5.51 3.16667 5.365 3.325 5.075L13.6167 14.5L12.6667 15.37L3.325 23.925C3.16667 23.635 3.16667 23.49 3.16667 23.2ZM31.6667 26.1H6.33333C6.01667 26.1 5.85833 26.1 5.54167 25.955L15.0417 17.255L15.8333 16.53C16.625 17.255 17.7333 17.69 19 17.69C20.2667 17.69 21.2167 17.255 22.1667 16.53L32.4583 25.955C32.1417 26.1 31.9833 26.1 31.6667 26.1ZM34.8333 23.2C34.8333 23.49 34.8333 23.635 34.675 23.925L24.3833 14.5L34.675 5.075C34.8333 5.365 34.8333 5.51 34.8333 5.8V23.2Z' fill='%23eb4247'/%3E%3C/svg%3E");
  }
}
</style>
