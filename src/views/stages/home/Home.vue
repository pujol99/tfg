<template>
    <Message/>
    <Visuals/>
</template>

<script>
import Message from './HomeMessage.vue'
import Visuals from './HomeVisuals.vue'
export default {
    name: "Home",
    components: {
        Message, 
        Visuals
    }
};
</script>
