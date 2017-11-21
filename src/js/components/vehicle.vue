<template>
    <dl>
        <template v-for="(value, key) in item()">
            <dt>{{key}}</dt>
            <dd>{{value}}</dd>
        </template>
    </dl>
</template>

<script>
    import vehicle from '../models/vehicle.js';
    import fps from '../mock/fps.js';

    export default {
        created() {
            fps.subscribe(() => this.$forceUpdate());
        },
        props: ['id'],
        methods: {
            item() {
                return vehicle.find(this.id);
            }
        }
    }
</script>
