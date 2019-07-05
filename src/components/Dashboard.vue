<style>

</style>

<template>
    <div>
        <FilterSection/>
        <Products/>
    </div>
</template>

<script>
import FilterSection from "./Filter";
import Products from "./Products";

export default {
    name: "Dashboard",
    components: {
        FilterSection,
        Products
    }
}
</script>