<style>

</style>

<template>
    <div>
        <FilterSection/>
        <ProductSection/>
    </div>
</template>

<script>
import FilterSection from "./Filter";
import ProductSection from "./ProductSection";

export default {
    name: "Dashboard",
    components: {
        FilterSection,
        ProductSection
    }
}
</script>