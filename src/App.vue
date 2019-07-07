<template>
  <div id="app">
    <Dashboard v-if="getDataReady"/>
    <h1 v-else>Data isn't ready</h1>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue"
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: "App",
    components: {
        Dashboard
    },
    methods: {
        ...mapMutations([
            "SET_NESTED_DATA",
            "SET_FILTER_OPTIONS",
            "FILTER_DATA"
        ]),
        ...mapActions([
            "LOAD_DATA"
        ])
    },
    mounted () {
        this.LOAD_DATA();
        this.SET_NESTED_DATA("type");
        this.SET_FILTER_OPTIONS();
        this.FILTER_DATA();
    },
    computed: {
        ...mapGetters([
            "getDataReady",
            "getPrintState"
        ])
    }
}
</script>
