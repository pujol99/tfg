<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <h3>This is the final</h3>
        <button @click="reloadPage">restart game</button>
    </div>
</template>

<script>
export default {
    name: "Final",
    methods: {
        reloadPage(){
            window.location.reload()
        }
    }
};
</script>
