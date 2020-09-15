<template>
  <footer class="footer">
    <container class="footer__container">
      <footer-logo class="footer__logo" />

      <menu>
        <ul class="footer__menu">
          <div class="footer__column-wrapper">
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/services/dedicated/">Серверы</a>
            </li>
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/services/cloud/">Облако</a>
            </li>
          </div>
          <div class="footer__column-wrapper">
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/services/colocation">Оборудование</a>
            </li>
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/solutions/">Решения</a>
            </li>
          </div>
          <div class="footer__column-wrapper">
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/about/data-centers/">Дата-центры</a>
            </li>
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/about/company/">О компании</a>
            </li>
          </div>
          <div class="footer__column-wrapper">
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/blog/">Блог</a>
            </li>
            <li>
              <a class="footer__menu-link" href="https://selectel.ru/about/contacts/">Офисы</a>
            </li>
          </div>
        </ul>
      </menu>

      <div class="footer__copyright">
        <p class="footer__copytight-text">
          © ООО «Селектел», 2008—2020
        </p>
        <p class="footer__copytight-text">
          Лицензия на телематические услуги № 176266 и № 176267
        </p>
      </div>

      <ul class="foooter__socials">
        <li>
          <a class="foooter__socials-link" href="https://t.me/SelectelNews">
            <telegram-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li>
          <a class="foooter__socials-link" href="https://www.facebook.com/selectel/">
            <facebook-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li>
          <a class="foooter__socials-link" href="https://vk.com/selectel">
            <vk-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li>
          <a class="foooter__socials-link" href="https://twitter.com/selectel">
            <tweeter-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li>
          <a class="foooter__socials-link" href="https://habr.com/ru/company/selectel/">
            <habr-logo class="foooter__socials-logo" />
          </a>
        </li>
      </ul>
    </container>
  </footer>
</template>

<script>
import container from "@/components/ui/container";
import WhiteLogo from "@/static/images/whiteLogo.svg";
import TelegramLogo from "@/static/images/telegram.svg";
import FacebookLogo from "@/static/images/facebook.svg";
import VkLogo from "@/static/images/vk.svg";
import TweeterLogo from "@/static/images/tweeter.svg";
import HabrLogo from "@/static/images/habr.svg";

export default {
  components: {
    "footer-logo": WhiteLogo,
    container,
    "telegram-logo": TelegramLogo,
    "facebook-logo": FacebookLogo,
    "vk-logo": VkLogo,
    "tweeter-logo": TweeterLogo,
    "habr-logo": HabrLogo,
  },
};
</script>

<style scoped>
.footer {
  background: #092433;
  display: flex;
  padding: 80px 0;
  color: #fff;
}

.footer__container {
  display: grid;
  grid-template-columns: 322px 2fr;
  grid-column-gap: 231px;
  grid-row-gap: 27px;
  /*   grid-template-areas:
    "logo menu"
    "copyright socials";*/
}

.footer__menu {
  display: flex;
  gap: 94px;
}

.footer__menu-link {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  transition: all ease .2s;
  color: inherit;
  text-decoration: none;
}

.footer__menu-link:hover {
  opacity: .5;
}

.footer__column-wrapper {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.foooter__socials {
  display: flex;
  align-self: center;
}

.footer__copytight-text {
  margin: 2px 0 0 2px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  opacity: 0.5;
  max-width: 230px;
}

.footer__copytight-text:last-of-type {
  margin-top: 4px;
}

.foooter__socials {
  margin-top: 35px;
  display: flex;
  gap: 18px;
}

.foooter__socials-link {
 cursor: pointer;
  transition: all ease .2s;
}

.foooter__socials-link:hover {
  opacity: .5;
}
</style>
