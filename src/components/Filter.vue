<style lang="scss">
.filter-label {
    font-size: 20px;
}
@media only screen and (min-width: 500px) {
    .filter-section {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .filter-label {
            margin-right: 12px;
        }
        .multi-select{
            width:auto;
        }
    }
}
</style>

<template>
    <div class="filter-section">
        <span class="filter-label">Filter by:</span> 
        <multiselect
            v-model="typesSelection"
            :options="typeOptions"
            :multiple="true"
            :preserve-search="true"
            placeholder="Type.."
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