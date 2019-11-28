<template>
  <div class="container-fluid h-100 main-layout">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">SKLEP SPORTOWY</a>
      </div>
    </div>
    <div class="row content">
      <div class="col-3 bg-info">
        <CategoryControls />
      </div>

      <div class="col-9 bg-warning product-list--wrap">
        <ProductList />
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";
export default {
  components: { ProductList, CategoryControls }
};
</script>

<style>
html,
body {
  height: 100%;
}

.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}

.product-list--wrap {
  display: flex;
}
</style>