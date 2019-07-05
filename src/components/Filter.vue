<style>

</style>

<template>
    <div>
        <span>Filter by:</span> 
        <multiselect 
            v-model="typesSelection"
            :options="typeOptions"
            :multiple="true"
            :preserve-search="true"
            placeholder="Pick some"
            class="multi-select"
        />
    </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapState, mapMutations } from "vuex";

export default {
    name: "Filters",
    components: {
        "multiselect": Multiselect
    },
    methods: {
        ...mapMutations([
            "SET_SELECTED_TYPES",
            "FILTER_DATA"
        ])
    },
    mounted () {
    },
    computed: {
        ...mapState([
            "selectedTypes",
            "typeOptions"
        ]),
        typesSelection: {
            get: function () {
                return this.selectedTypes;
            },
            set: function (newSelectedTypes) {
                this.SET_SELECTED_TYPES(newSelectedTypes);
                this.FILTER_DATA();
            }
        }
    }
}
</script>