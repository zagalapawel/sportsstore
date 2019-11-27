import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    categoriesData: [],
    productsTotal: 0,
    currentPage: 1,
    pageSize: 4,
    currentCategory: "Wszystkie"
  },
  getters: {
    productsFilteredByCategody: state =>
      state.products.filter(
        p =>
          state.currentCategory == "Wszystkie" ||
          p.category == state.currentCategory
      ),
    processedProducts: (state, getters) => {
      let index = (state.currentPage - 1) * state.pageSize;
      return getters.productsFilteredByCategody.slice(
        index,
        index + state.pageSize
      );
    },
    pageCount: (state, getters) =>
      Math.ceil(getters.productsFilteredByCategody.length / state.pageSize),
    categories: state => ["Wszystkie", ...state.categoriesData]
  },
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setPageSize(state, size) {
      state.pageSize = size;
      state.currentPage = 1;
    },
    setCurrentCategory(state, category) {
      state.currentCategory = category;
      state.currentPage = 1;
    },
    setData(state, data) {
      state.products = data.pdata;
      state.productsTotal = data.pdata.length;
      state.categoriesData = data.cdata.sort();
    }
  },
  actions: {
    async getData(context) {
      let pdata = (await Axios.get(productsUrl)).data;
      let cdata = (await Axios.get(categoriesUrl)).data;
      context.commit("setData", { pdata, cdata });
    }
  }
});
