<template>
  <div class="layout">
    <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
      <h4>
        {{ p.name }}
        <span
          class="badge badge-pill badge-primary float-right"
        >{{ p.price | currency }}</span>
      </h4>
      <div class="card-text bg-white p-1">
        {{ p.description }}
        <button
          class="btn btn-success btn-sm float-right"
          v-on:click="handleProductAdd(p)"
        >Dodaj do koszyka</button>
      </div>
    </div>
    <div class="pageCon">
      <page-controls />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import PageControls from "./PageControls";
export default {
  components: { PageControls },
  computed: {
    ...mapGetters({ products: "processedProducts" })
  },
  // filters: {
  //   currency(value) {
  //     return new Intl.NumberFormat("pl-PL", {
  //       style: "currency",
  //       currency: "PLN"
  //     }).format(value);
  //   }
  // },
  methods: {
    ...mapMutations({ addProduct: "cart/addProduct" }),
    handleProductAdd(product) {
      this.addProduct(product);
      this.$router.push("/cart");
    }
  }
};
</script>

<style>
.layout {
  position: relative;
  flex-direction: column;
  flex-grow: 1;
}
.pageCon {
  position: absolute;
  min-width: 100%;
  bottom: 0px;
}
</style>