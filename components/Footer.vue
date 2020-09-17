<template>
  <footer class="footer">
    <container class="footer__container">
      <footer-logo class="footer__logo" />

      <menu>
        <ul class="footer__menu">
          <div class="footer__column-wrapper">
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/services/dedicated/"
              >
                Серверы
              </nuxt-link>
            </li>
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/services/cloud/"
              >
                Облако
              </nuxt-link>
            </li>
          </div>
          <div class="footer__column-wrapper">
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/services/colocation"
              >
                Оборудование
              </nuxt-link>
            </li>
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/solutions/"
              >
                Решения
              </nuxt-link>
            </li>
          </div>
          <div class="footer__column-wrapper">
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/about/data-centers/"
              >
                Дата-центры
              </nuxt-link>
            </li>
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/about/company/"
              >
                О компании
              </nuxt-link>
            </li>
          </div>
          <div class="footer__column-wrapper">
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/blog/"
              >
                Блог
              </nuxt-link>
            </li>
            <li class="footer__menu-item">
              <nuxt-link
                class="footer__menu-link"
                to="/about/contacts/"
              >
                Офисы
              </nuxt-link>
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
        <li class="footer__socials-item">
          <a
            class="foooter__socials-link"
            href="https://t.me/SelectelNews"
            target="_blank"
          >
            <telegram-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li class="footer__socials-item">
          <a
            class="foooter__socials-link"
            href="https://www.facebook.com/selectel/"
            target="_blank"
          >
            <facebook-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li class="footer__socials-item">
          <a
            class="foooter__socials-link"
            href="https://vk.com/selectel"
            target="_blank"
          >
            <vk-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li class="footer__socials-item">
          <a
            class="foooter__socials-link"
            href="https://twitter.com/selectel"
            target="_blank"
          >
            <tweeter-logo class="foooter__socials-logo" />
          </a>
        </li>
        <li class="footer__socials-item">
          <a
            class="foooter__socials-link"
            href="https://habr.com/ru/company/selectel/"
            target="_blank"
          >
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
}

.footer__menu {
  display: flex;
  justify-content: space-between;
  margin-right: 79px;
}

.footer__menu-link {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  transition: all ease 0.2s;
  color: #fff;
  text-decoration: none;
}

.footer__menu-link:hover {
  background: rgba(128, 128, 128, 0.466);
  border-radius: 5px;
}

.footer__column-wrapper {
  display: flex;
  flex-direction: column;
}

.footer__menu-item {
  margin-bottom: 14px;
}

.footer__menu-item:last-of-type {
  margin-bottom: 0;
}

.footer__copytight-text {
  color: #fff;
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
  align-self: center;
  display: flex;
}

.footer__socials-item {
  margin-right: 18px;
}

.footer__socials-item:last-of-type {
  margin-right: 0;
}

.foooter__socials-link {
  cursor: pointer;
  transition: all ease 0.3s;
}

.foooter__socials-link:hover .foooter__socials-logo /deep/ path {
  fill: #eb4247;
}

@media screen and (max-width: 1380px) {
  .footer__container {
    grid-column-gap: 15%;
  }
}
@media screen and (max-width: 1170px) {
  .footer__container {
    grid-column-gap: 5%;
  }

  .footer__menu {
    margin-right: 0;
  }
}

@media screen and (max-width: 960px) {
  .footer {
    padding: 40px 0;
  }

  .footer__container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "socials"
      "menu"
      "copyright";
    grid-row-gap: 30px;
  }

  .footer__menu {
    grid-area: menu;
    margin-top: 23px;
    margin-right: 111px;
  }

  .foooter__socials {
    grid-area: socials;
    margin: 9px 0 0 3px;
  }

  .footer__copyright {
    margin-top: 45px;
    grid-area: copyright;
  }

  .footer__logo {
    grid-area: logo;
  }
}

@media screen and (max-width: 600px) {
  .footer__logo {
    width: 250px;
  }

  .footer__menu {
    flex-direction: column;
    justify-content: flex-start;
  }

  .footer__menu-item {
    margin-bottom: 10px;
  }
  
  .footer__column-wrapper {
    margin-bottom: 10px;
  }
}
</style>
