<style lang="scss">
.products-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-top: 12px;
  grid-gap: 30px;
  .sale {
    position: absolute;
    display: inline-block;
    background: orange;
    color: white;
    height: 2.5rem;
    width: 2.5rem;
    text-align: center;
    vertical-align: middle;
    line-height: 2.5rem;
    transform: rotate(-20deg);
    animation: beat 1s ease infinite alternate;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: inherit;
      height: inherit;
      width: inherit;
      top: 0;
      left: 0;
      z-index: -1;
      transform: rotate(30deg);
    }
    &:after {
      transform: rotate(60deg);
    }
  }
}
.main-product-image {
  img {
    width: 100%;
  }
}
.product-detail {
  display: flex;
  justify-content: space-between;
  .product-name,
  .product-price {
    margin-top: 12px;
    font-size: 20px;
    text-align: left;
  }
}
</style>

<template>
  <div class="products-layout">
    <div v-for="record in filteredData" :key="record.index">
      <span class="sale" v-if="record.isSale">
        Sale
      </span>
      <div class="main-product-image">
        <img :src="require(`@/assets/${record.productImage}`)" />
      </div>
      <div class="product-detail">
        <div class="product-name">
          {{ record.productName }}
        </div>
        <div class="product-price">
          {{ record.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductSection",
  computed: {
    ...mapState(["filteredData"])
  }
};
</script>
