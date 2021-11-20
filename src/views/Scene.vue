<template>
    <div v-if="this.$store.getters.isCurrentScene(name)">
        <slot></slot>
        <Options :information="optionsProps" />
    </div>
</template>

<script>
import Options from "../components/ui/Options.vue";
export default {
    components: {
        Options,
    },
    props: {
        name: String,
    },
    data() {
        return {
            optionsProps: null,
        };
    },
    async created() {
        this.optionsProps = await this.$store.getters.getSceneOptions(
            this.name
        );
    },
};
</script>
