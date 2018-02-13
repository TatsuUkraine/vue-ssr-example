<template>
    <div>
        <v-list-tile-action>
            <v-checkbox v-model="checked"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>{{title}} ({{count}})</v-list-tile-title>
        </v-list-tile-content>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {FILTER_IS_SELECTED} from "../store/module/filter/type/getter";
    import {FILTERS_ADD_SELECTED, FILTERS_REMOVE_SELECTED} from "../store/module/filter/type/action";

    export default Vue.extend({
        props: {
            filter: Object
        },
        computed: {
            checked: {
                get () {
                    return this.$store.getters[FILTER_IS_SELECTED]({
                        filter: this.filter.type,
                        id: this.filter.id
                    });
                },
                set (isChecked) {
                    let action = FILTERS_ADD_SELECTED;

                    if (!isChecked) {
                        action = FILTERS_REMOVE_SELECTED;
                    }

                    this.$store.dispatch(action, {
                        filter: this.filter.type,
                        id: this.filter.id
                    });
                }
            },
            title () {
                return this.filter.title;
            },

            count () {
                return this.filter.count;
            }
        }
    })
</script>

<style scoped>

</style>