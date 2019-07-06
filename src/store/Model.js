/* Data logic / manipulation / cals */
import d3 from "d3";
export const Model = {
    // initial forms data gets stored here
    data: {},

    // get some data..
    getRawData: function () {
        return this.data;
    },

    getNestedByTypeData () {
        return d3.nest().key(d => d.type).map(this.getRawData());
    },

    getTypeOptions() {
        return Object.keys(this.getNestedByTypeData())
    },

    filterByTypes(selectedTypes) {
        let that = this;
        let typePassed = this.getTypeOptions();
        let filteredData = [];

        if (selectedTypes && selectedTypes.length > 0) {
            typePassed = selectedTypes;
        }

        typePassed.forEach(eachType => {
            filteredData = filteredData.concat(that.getNestedByTypeData()[eachType]);
        });

        return filteredData;
    }
};
