(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{201:function(t,e,n){"use strict";n.r(e);var o={props:{text:{type:String,default:""}}},r=(n(221),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"button"},[this._v("\n  "+this._s(this.text)+"\n")])}),[],!1,null,"33e42486",null);e.default=component.exports},202:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("41b35e00",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7e5ed0f4",content,!0,{sourceMap:!1})},204:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("51e13450",content,!0,{sourceMap:!1})},205:function(t,e,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("a78ab83a",content,!0,{sourceMap:!1})},206:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("43155ebe",content,!0,{sourceMap:!1})},207:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("a27448c4",content,!0,{sourceMap:!1})},208:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("08fab279",content,!0,{sourceMap:!1})},209:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("02bf1952",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("4dcc8e32",content,!0,{sourceMap:!1})},211:function(t,e,n){var content=n(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("db392856",content,!0,{sourceMap:!1})},212:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1b7833da",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";n.r(e);var o=n(2),r={components:{"opened-svg":Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M11.002 13.995V24h1.995V13.995c0-.544.454-.997.998-.997H24v-1.995H13.995c-.544 0-.997-.454-.997-.998V0h-1.995v10.005c0 .544-.454.997-.998.997H0v1.995h10.005c.544 0 .997.454.997.998z",fill:"#092433"}})])}),[],!1,null,null,null).exports,"closed-svg":Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"24",height:"2",viewBox:"0 0 24 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{fill:"#092433",d:"M0 0h24v2H0z"}})])}),[],!1,null,null,null).exports},props:{question:{type:String,default:""},answer:{type:String,default:""}},data:function(){return{isQuestionOpened:!1}}},d=(n(237),Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"faq-question",on:{click:function(e){t.isQuestionOpened=!t.isQuestionOpened}}},[n("button",{staticClass:"faq-question__button"},[t.isQuestionOpened?n("closed-svg"):n("opened-svg")],1),t._v(" "),n("h3",{staticClass:"faq-question__title",domProps:{innerHTML:t._s(t.question)}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isQuestionOpened,expression:"isQuestionOpened"}],staticClass:"faq-question__answer",domProps:{innerHTML:t._s(t.answer)},on:{click:function(t){t.stopPropagation()}}})])}),[],!1,null,"6fa61a98",null));e.default=d.exports},214:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n(201),d=n(218),l={components:{container:o.default,mainbutton:r.default,switchbutton:d.default},data:function(){return{swiperOption:{slidesPerView:"auto",simulateTouch:!1,loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{bannersData:function(){return this.$store.getters["blocks/getBanners"]}}},c=(n(225),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banners"},[n("swiper",{ref:"mySwiper",staticClass:"banners__swiper",attrs:{options:t.swiperOption}},t._l(t.bannersData,(function(e){return n("swiper-slide",{key:e.id},[n("a",{attrs:{href:e.button.link}},[n("div",{staticClass:"banners__slide",staticStyle:{"background-image":'url("/selectel_test/images/banner.png")'}},[n("container",{staticClass:"banners__container"},[n("h1",{staticClass:"banners__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("p",{staticClass:"banners__subtitle",domProps:{innerHTML:t._s(e.description)}}),t._v(" "),n("mainbutton",{staticClass:"banners__button",attrs:{text:e.button.text}})],1)],1)])])})),1),t._v(" "),n("div",{staticClass:"banners__buttons"},[n("switchbutton",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-pagination banners__pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),n("switchbutton",{staticClass:"swiper-button-next",attrs:{slot:"button-next",type:"right"},slot:"button-next"})],1)],1)}),[],!1,null,"6f75e9fc",null);e.default=component.exports;installComponents(component,{Mainbutton:n(201).default,Container:n(31).default,Switchbutton:n(218).default})},215:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n(219),d={components:{container:o.default,advantage:r.default},computed:{advantagesData:function(){return this.$store.getters["blocks/getAdvantages"]}}},l=(n(231),n(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"advantages"},[n("container",{staticClass:"advantages__container",attrs:{type:"small"}},[n("h2",{staticClass:"advantages__title",domProps:{innerHTML:t._s(t.advantagesData.title)}}),t._v(" "),n("p",{staticClass:"advantages__subtitle",domProps:{innerHTML:t._s(t.advantagesData.subtitle)}}),t._v(" "),n("ul",{staticClass:"advantages__flex-container"},t._l(t.advantagesData.items,(function(t){return n("advantage",{key:t.id,attrs:{image:t.image,title:t.title,content:t.content}})})),1)])],1)}),[],!1,null,"77d01c2a",null);e.default=component.exports;installComponents(component,{Advantage:n(219).default,Container:n(31).default})},216:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n(220),d={components:{container:o.default,product:r.default},computed:{productsData:function(){return this.$store.getters["blocks/getProducts"]}}},l=(n(235),n(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"products"},[n("container",{staticClass:"products__container",attrs:{type:"centered"}},[n("h2",{staticClass:"products__title",domProps:{innerHTML:t._s(t.productsData.title)}}),t._v(" "),n("p",{staticClass:"products__subtitle",domProps:{innerHTML:t._s(t.productsData.subtitle)}}),t._v(" "),n("ul",{staticClass:"products__grid-container"},t._l(t.productsData.items,(function(t){return n("product",{key:t.id,attrs:{link:t.link,title:t.title,description:t.description}})})),1)])],1)}),[],!1,null,"667b7288",null);e.default=component.exports;installComponents(component,{Product:n(220).default,Container:n(31).default})},217:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n(213),d={components:{container:o.default,faqquestion:r.default},computed:{faqData:function(){return this.$store.getters["blocks/getFaq"]}}},l=(n(239),n(2)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"faq"},[e("container",{staticClass:"faq__container",attrs:{type:"small"}},[e("h2",{staticClass:"faq__title"},[this._v("\n      "+this._s(this.faqData.title)+"\n    ")]),this._v(" "),e("ul",{staticClass:"faq__questions"},this._l(this.faqData.items,(function(t){return e("faqquestion",{key:t.id,attrs:{answer:t.answer,question:t.question}})})),1)])],1)}),[],!1,null,"29d69327",null);e.default=component.exports;installComponents(component,{Faqquestion:n(213).default,Container:n(31).default})},218:function(t,e,n){"use strict";n.r(e);var o={props:{type:{type:String,enum:["left","right"],default:"left"}}},r=(n(223),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:["button","button_type_"+this.type]})}),[],!1,null,"686c3e3c",null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);var o={props:{image:{type:String,default:""},title:{type:String,default:""},content:{type:String,default:""}}},r=(n(229),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"advantage"},[e("h3",{staticClass:"advantage__title",domProps:{innerHTML:this._s(this.title)}}),this._v(" "),e("div",{staticClass:"advantage__wrapper"},[e("img",{staticClass:"advantage__image",attrs:{src:this.image,alt:""}}),this._v(" "),e("div",{staticClass:"advantage__content",domProps:{innerHTML:this._s(this.content)}})])])}),[],!1,null,"02c35be4",null);e.default=component.exports},220:function(t,e,n){"use strict";n.r(e);var o={props:{link:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}}},r=(n(233),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"product"},[e("a",{staticClass:"product__link",attrs:{href:this.link}},[e("h3",{staticClass:"product__title",domProps:{innerHTML:this._s(this.title)}}),this._v(" "),e("p",{staticClass:"product__description",domProps:{innerHTML:this._s(this.description)}})])])}),[],!1,null,"729edded",null);e.default=component.exports},221:function(t,e,n){"use strict";var o=n(202);n.n(o).a},222:function(t,e,n){(e=n(21)(!1)).push([t.i,".button[data-v-33e42486]{font-style:normal;font-weight:500;font-size:16px;text-align:center;line-height:22px;text-transform:uppercase;padding:16px 32px;background:#fff;border:1px solid #092433;border-radius:6px;transition:all .2s ease;cursor:pointer}.button[data-v-33e42486]:hover{background:#eb4247;border:1px solid #eb4247;color:#fff}@media screen and (max-width:768px){.button[data-v-33e42486]{width:100%}}",""]),t.exports=e},223:function(t,e,n){"use strict";var o=n(203);n.n(o).a},224:function(t,e,n){(e=n(21)(!1)).push([t.i,".button[data-v-686c3e3c]{position:static;width:20px;height:40px;transition:all .2s ease;cursor:pointer;background:transparent;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='21' height='40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.533 21.21l16.424 16.422L18.589 40 3.446 24.85.97 22.36a3.333 3.333 0 01.009-4.71l2.46-2.456L18.59 0l2.368 2.368L4.533 18.84a1.672 1.672 0 000 2.368z' fill='%23fff'/%3E%3C/svg%3E\");opacity:.5}.button_type_right[data-v-686c3e3c]{transform:rotate(180deg)}.button[data-v-686c3e3c]:after{content:\"\"}.button[data-v-686c3e3c]:hover{opacity:1}",""]),t.exports=e},225:function(t,e,n){"use strict";var o=n(204);n.n(o).a},226:function(t,e,n){(e=n(21)(!1)).push([t.i,".banners__buttons[data-v-6f75e9fc]{display:flex;position:absolute;justify-content:center;bottom:42px;z-index:100;align-items:flex-end}.banners__pagination[data-v-6f75e9fc]{position:static;font-size:18px;line-height:24px;margin:0 20px 6px;width:42px}.banners[data-v-6f75e9fc]{color:#fff;position:relative;justify-content:center;align-items:flex-end}.banners[data-v-6f75e9fc],.banners__slide[data-v-6f75e9fc]{box-sizing:border-box;display:flex}.banners__slide[data-v-6f75e9fc]{background-size:cover;background-position:50%;height:620px;padding:0 0 34px;flex-direction:column;justify-content:flex-end}.banners__title[data-v-6f75e9fc]{font-weight:500;font-size:64px;line-height:87px;margin-bottom:14px;max-width:1050px;color:#fff;text-decoration:none}.banners__subtitle[data-v-6f75e9fc]{font-style:normal;font-weight:400;font-size:24px;line-height:33px;margin-left:111px;margin-bottom:48px;max-width:930px;color:#fff;text-decoration:none}@media screen and (max-width:768px){.banners__buttons[data-v-6f75e9fc]{width:100%;justify-content:space-between;bottom:20px;padding:0 17px;box-sizing:border-box}.banners__slide[data-v-6f75e9fc]{height:400px;padding:0 0 90px}.banners__title[data-v-6f75e9fc]{font-size:36px;line-height:49px;margin:0 0 11px}.banners__subtitle[data-v-6f75e9fc]{font-size:18px;line-height:25px;margin:0 0 20px;max-width:610px}}@media screen and (max-width:460px){.banners__title[data-v-6f75e9fc]{font-size:28px;line-height:35px}.banners__subtitle[data-v-6f75e9fc]{font-size:14px;line-height:18px}}",""]),t.exports=e},227:function(t,e,n){"use strict";var o=n(205);n.n(o).a},228:function(t,e,n){(e=n(21)(!1)).push([t.i,".promo[data-v-6d0d8e14]{padding:42px 0 96px}.promo[data-v-6d0d8e14],.promo__container[data-v-6d0d8e14]{display:flex}.promo__title[data-v-6d0d8e14]{font-size:28px;line-height:36px;max-width:25%;margin-right:4px}.promo__subtitle[data-v-6d0d8e14],.promo__title[data-v-6d0d8e14]{font-style:normal;font-weight:400}.promo__subtitle[data-v-6d0d8e14]{font-size:18px;line-height:24px;max-width:650px;margin-bottom:20px}@media screen and (max-width:1100px){.promo[data-v-6d0d8e14]{padding:40px 0 64px}.promo__container[data-v-6d0d8e14]{flex-direction:column}.promo__title[data-v-6d0d8e14]{font-size:28px;line-height:36px;max-width:500px;margin:0 0 24px}.promo__wrapper[data-v-6d0d8e14]{margin-left:125px}}@media screen and (max-width:500px){.promo__title[data-v-6d0d8e14]{font-size:22px;line-height:30px}.promo__subtitle[data-v-6d0d8e14]{font-size:14px;line-height:18px}.promo__wrapper[data-v-6d0d8e14]{margin-left:60px}}",""]),t.exports=e},229:function(t,e,n){"use strict";var o=n(206);n.n(o).a},230:function(t,e,n){(e=n(21)(!1)).push([t.i,'.advantage[data-v-02c35be4]{border-top:1px solid #d9d9d6;padding:23px 0 32px}.advantage__title[data-v-02c35be4]{font-style:normal;font-weight:400;font-size:24px;line-height:32px;margin-bottom:24px}.advantage__content[data-v-02c35be4] li{list-style:"—";padding-left:5px;font-style:normal;font-weight:400;font-size:16px;line-height:20px}.advantage__content[data-v-02c35be4] a{color:#eb4247;text-decoration:none;transition:all .2s ease}.advantage__content[data-v-02c35be4] a:hover{opacity:.5}.advantage__image[data-v-02c35be4]{width:168px;align-self:flex-start;margin-right:98px}.advantage__wrapper[data-v-02c35be4]{display:flex}@media screen and (max-width:768px){.advantage[data-v-02c35be4]{padding:15px 0 32px}.advantage__title[data-v-02c35be4]{margin-bottom:16px}.advantage__content[data-v-02c35be4]{margin-left:145px}.advantage__image[data-v-02c35be4]{width:160px;margin:0 0 16px}.advantage__wrapper[data-v-02c35be4]{flex-direction:column}}@media screen and (max-width:500px){.advantage__title[data-v-02c35be4]{font-size:19px;line-height:24px}.advantage__content[data-v-02c35be4] li{font-size:14px;line-height:20px}.advantage__content[data-v-02c35be4]{margin-left:50px}.advantage__image[data-v-02c35be4]{width:160px;margin:0 auto 10px}}',""]),t.exports=e},231:function(t,e,n){"use strict";var o=n(207);n.n(o).a},232:function(t,e,n){(e=n(21)(!1)).push([t.i,".advantages[data-v-77d01c2a]{display:flex;padding:0 0 96px;color:#092433}.advantages__title[data-v-77d01c2a]{font-style:normal;font-weight:400;font-size:32px;line-height:36px;margin-bottom:16px}.advantages__subtitle[data-v-77d01c2a]{font-style:normal;font-weight:400;font-size:16px;line-height:20px;margin-bottom:32px}.advantages__flex-container[data-v-77d01c2a]{display:flex;flex-direction:column}@media screen and (max-width:1160px){.advantages__container[data-v-77d01c2a]{padding:0 16px}}@media screen and (max-width:768px){.advantages[data-v-77d01c2a]{padding:0 0 64px}}@media screen and (max-width:500px){.advantages__title[data-v-77d01c2a]{font-size:22px;line-height:28px}.advantages__subtitle[data-v-77d01c2a]{font-size:14px}}",""]),t.exports=e},233:function(t,e,n){"use strict";var o=n(208);n.n(o).a},234:function(t,e,n){(e=n(21)(!1)).push([t.i,".product[data-v-729edded]{background:#fff;box-shadow:0 0 2px rgba(0,0,0,.12),0 4px 16px rgba(0,0,0,.08);border-radius:8px;padding:24px 24px 32px;transition:all .3s ease;box-sizing:border-box;border:1px solid #fff}.product[data-v-729edded]:hover{transform:scale(1.03);cursor:pointer;border:1px solid #eb4247}.product:hover .product__title[data-v-729edded]{color:#eb4247}.product__link[data-v-729edded]{color:inherit;text-decoration:none}.product__title[data-v-729edded]{font-style:normal;font-weight:400;font-size:24px;line-height:32px;margin-bottom:12px}.product__description[data-v-729edded]{font-style:normal;font-weight:400;font-size:16px;line-height:20px}@media screen and (max-width:880px){.product[data-v-729edded]{padding:16px 81px 24px}}@media screen and (max-width:660px){.product[data-v-729edded]{padding:16px 24px 24px}}@media screen and (max-width:500px){.product__title[data-v-729edded]{font-size:18px;line-height:24px}.product__description[data-v-729edded]{font-size:12px;line-height:15px}}",""]),t.exports=e},235:function(t,e,n){"use strict";var o=n(209);n.n(o).a},236:function(t,e,n){(e=n(21)(!1)).push([t.i,".products[data-v-667b7288]{background:rgba(217,217,214,.3);display:flex;padding:48px 0 80px;color:#092433}.products__title[data-v-667b7288]{font-size:32px;line-height:36px;margin-bottom:16px}.products__subtitle[data-v-667b7288],.products__title[data-v-667b7288]{font-style:normal;font-weight:400;text-align:center}.products__subtitle[data-v-667b7288]{font-size:16px;line-height:20px;margin-bottom:32px}.products__grid-container[data-v-667b7288]{display:grid;grid-template-columns:repeat(2,1fr);grid-auto-rows:1fr;grid-gap:16px}@media screen and (max-width:880px){.products__grid-container[data-v-667b7288]{grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px}}@media screen and (max-width:500px){.products__title[data-v-667b7288]{font-size:22px;line-height:28px}.products__subtitle[data-v-667b7288]{font-size:14px;line-height:20px}}",""]),t.exports=e},237:function(t,e,n){"use strict";var o=n(210);n.n(o).a},238:function(t,e,n){(e=n(21)(!1)).push([t.i,".faq-question[data-v-6fa61a98]{border-top:1px solid #d9d9d6;padding:24px 0;position:relative}.faq-question__button[data-v-6fa61a98]{position:absolute;background-color:transparent;right:0;top:24px;width:24px;height:24px;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all .3s ease}.faq-question:hover .faq-question__button[data-v-6fa61a98]{transform:rotate(180deg)}.faq-question[data-v-6fa61a98]:hover{color:#eb4247;cursor:pointer}.faq-question__title[data-v-6fa61a98]{font-style:normal;font-weight:400;font-size:24px;line-height:32px;margin-bottom:24px;margin-right:30px}.faq-question__answer[data-v-6fa61a98]{margin-left:34%;margin-right:11%;color:#092433;cursor:text}.faq-question__answer[data-v-6fa61a98] p{font-style:normal;font-weight:400;font-size:16px;line-height:20px}.faq-question__answer[data-v-6fa61a98] a{color:#eb4247;text-decoration:none;transition:all .2s ease}.faq-question__answer[data-v-6fa61a98] a:hover{opacity:.5}@media screen and (max-width:768px){.faq-question__answer[data-v-6fa61a98]{margin-left:60px;margin-right:0}}@media screen and (max-width:660px){.faq-question__answer[data-v-6fa61a98]{margin-left:20px;margin-right:0}}@media screen and (max-width:500px){.faq-question__title[data-v-6fa61a98]{font-size:18px;line-height:24px;margin-bottom:10px;margin-right:30px}.faq-question__answer[data-v-6fa61a98] p{font-size:14px;line-height:18px}}",""]),t.exports=e},239:function(t,e,n){"use strict";var o=n(211);n.n(o).a},240:function(t,e,n){(e=n(21)(!1)).push([t.i,".faq[data-v-29d69327]{display:flex;padding:96px 0;color:#092433}.faq__title[data-v-29d69327]{font-style:normal;font-weight:400;font-size:32px;line-height:36px;margin-bottom:32px}@media screen and (max-width:768px){.faq[data-v-29d69327]{padding:64px 0 80px}.faq__questions[data-v-29d69327]{margin-left:128px}}@media screen and (max-width:660px){.faq__questions[data-v-29d69327]{margin-left:0}}@media screen and (max-width:500px){.faq__title[data-v-29d69327]{font-size:22px;line-height:28px}}",""]),t.exports=e},241:function(t,e,n){"use strict";var o=n(212);n.n(o).a},242:function(t,e,n){(e=n(21)(!1)).push([t.i,".container{color:#092433}",""]),t.exports=e},243:function(t,e,n){"use strict";n.r(e);var o=n(214),r=n(31),d=n(201),l={components:{container:r.default,mainbutton:d.default},computed:{promoData:function(){return this.$store.getters["blocks/getPromoBlock"]}}},c=(n(227),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"promo"},[n("container",{staticClass:"promo__container"},[n("h2",{staticClass:"promo__title",domProps:{innerHTML:t._s(t.promoData.title)}}),t._v(" "),n("div",{staticClass:"promo__wrapper"},[n("p",{staticClass:"promo__subtitle",domProps:{innerHTML:t._s(t.promoData.subtitle)}}),t._v(" "),n("a",{attrs:{href:t.promoData.button.link}},[n("mainbutton",{staticClass:"promo__button",attrs:{text:t.promoData.button.text}})],1)])])],1)}),[],!1,null,"6d0d8e14",null),f=component.exports;installComponents(component,{Mainbutton:n(201).default,Container:n(31).default});var x=n(215),_=n(216),v={components:{faq:n(217).default,products:_.default,advantages:x.default,promoblock:f,banners:o.default}},h=(n(241),Object(c.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"container"},[e("banners"),this._v(" "),e("promoblock"),this._v(" "),e("advantages"),this._v(" "),e("products"),this._v(" "),e("faq")],1)}),[],!1,null,null,null));e.default=h.exports;installComponents(h,{Banners:n(214).default,Advantages:n(215).default,Products:n(216).default,Faq:n(217).default})}}]);
