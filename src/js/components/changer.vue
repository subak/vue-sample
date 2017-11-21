<template>
    <div>
        <input type="button" value="update vehicle" v-on:click="update(id)" />
        {{id}}: {{latLng()}}
    </div>
</template>

<script>
    import vehicle from '../models/vehicle.js';
    import Rx from 'rxjs';
    export default {
        props: ['id'],
        created() {
            Rx.Observable.fromEvent(vehicle._emitter, 'updated')
                .filter(item => item.id === this.id)
                .subscribe(() => this.$forceUpdate());
            // vehicle._emitter.on('updated', () => this.$forceUpdate())
        },
        methods: {
            latLng() {
                return vehicle.find(this.id).latLng;
            },
            update() {
                vehicle.createOrUpdate({
                    id: this.id,
                    latLng: Math.random()+','+Math.random()
                });
            }
        }
    }
</script>