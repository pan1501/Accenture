<template>
  <div id="app">
    <Products v-if="getDataReady"/>
  </div>
</template>

<script>
import Products from "./components/Products.vue"
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: "App",
    components: {
        Products
    },
    methods: {
        ...mapActions([
            "LOAD_DATA"
        ])
    },
    mounted () {
        this.LOAD_DATA();
    },
    computed: {
        ...mapGetters([
            "getDataReady",
            "getPrintState"
        ])
    }
}
</script>
