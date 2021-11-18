<template>
    <Message/>
    <Visuals/>
</template>

<script>
import Message from '../components/home/HomeMessage.vue'
import Visuals from '../components/home/HomeVisuals.vue'
export default {
    name: "Home",
    components: {
        Message, 
        Visuals
    }
};
</script>
