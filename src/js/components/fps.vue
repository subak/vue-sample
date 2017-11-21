<template>
    <dl>
        <dt>FPS</dt>
        <dd>{{1000/interval}}</dd>
    </dl>
</template>

<script>
    import fps from '../mock/fps.js';
    export default {
        created() {
            fps.subscribe(({interval}) => this.interval = interval);
        },
        data() {
            return {
                interval: 1000
            }
        }
    }
</script>