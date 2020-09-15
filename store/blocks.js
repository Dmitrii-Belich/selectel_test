export const state = () => ({
  blocks: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  async fetchBlocks(state) {
    return this.$axios.$get(`${process.env.API_URL}/data/page.json`).then(response => {
      state.commit('setState', {
        name: 'blocks',
        value: response,
      });
    });
  },
};

export const getters = {
  getBanners(state) {
    return state.blocks.banners;
  },
  getPromoBlock(state) {
    return state.blocks.promoblock;
  },
  getAdvantages(state) {
    return state.blocks.advantages;
  },
  getProducts(state) {
    return state.blocks.products;
  },
  getFaq(state) {
    return state.blocks.faq;
  },
};
