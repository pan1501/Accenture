<style lang="scss">
.products-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-top: 12px;
  grid-gap: 30px;
  .product{
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 10px -4px rgba(0,0,0,0.15);
    padding: 20px;
  }
  .product:hover {
    box-shadow: 0px 12px 19px -7px rgba(0,0,0,0.3);
    transform: translateY(-10px);
    transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1),box-shadow 200ms ease;
  }
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
  flex-direction: column;
  .product-name,
  .product-price {
    margin-top: 12px;
    font-size: 20px;
    text-align: center;
    span {
      font-size: 15px;
    }
  }
}
</style>

<template>
  <div class="products-layout">
    <div class="product" v-for="record in filteredData" :key="record.index">
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
          <strong>{{ record.price }}</strong>
          <span>
            ea
          </span>
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
