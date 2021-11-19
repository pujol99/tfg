<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <h3>This is the final</h3>
    </div>
</template>

<script>
export default {
    name: "Final"
};
</script>
