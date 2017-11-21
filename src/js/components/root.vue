<template>
    <div>
        <Fps />

        <h2>Map</h2>
        <ul>
            <template v-for="vehicle in vehicles()">
                <li :key="vehicle.id">
                    <Vehicle :id="vehicle.id" />
                </li>
            </template>
        </ul>

        <template v-for="vehicle in vehicles()">
            <Changer :id="vehicle.id" />
        </template>
    </div>
</template>

<script>
    import vehicle from '../models/vehicle.js';
    import Vehicle from './vehicle.vue';
    import Fps from './fps.vue';
    import Changer from './changer.vue';

    export default {
        created() {
            vehicle.createOrUpdate({id: 1, latLng: Math.random()+','+Math.random()});
            vehicle.createOrUpdate({id: 2, latLng: Math.random()+','+Math.random()});
        },
        methods: {
            vehicles() {
                return vehicle.all();
            }
        },
        components: {
            Vehicle: Vehicle,
            Fps: Fps,
            Changer: Changer
        }
    }
</script>
