<template>
    <div>
        <v-list-tile-action>
            <v-checkbox v-model="checked"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>{{title}}</v-list-tile-title>
        </v-list-tile-content>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from "vue-property-decorator";
    import {FILTER_IS_SELECTED} from "../store/module/filter/type/getter";
    import {FILTERS_ADD_SELECTED, FILTERS_REMOVE_SELECTED} from "../store/module/filter/type/mutation";

    @Component({
        props: {
            filter: Object
        }
    })
    export default class FilterItem extends Vue {

        @Prop()
        filter: any

        get checked() {
            return this.$store.getters[FILTER_IS_SELECTED]({
                filter: this.filter.name,
                id: this.filter.id
            });
        }

        set checked (isChecked: boolean) {
            let action = FILTERS_ADD_SELECTED;

            if (!isChecked) {
                action = FILTERS_REMOVE_SELECTED;
            }

            this.$store.commit(action, {
                filter: this.filter.name,
                id: this.filter.id
            });
        }

        get title () {
            return this.filter.title;
        }

    }
</script>

<style scoped>

</style>