<template>
    <div v-if="currentStage(sceneName)">
        <!-- Visuals -->
        <slot></slot>
        <Options :information="options" />
        <Report />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["sceneName"],
    mounted() {
        this.scene = this.$refs.scene;
    },
    computed: {
        ...mapGetters({
            currentStage: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
        options() {
            // Labels for this specific scene
            return {
                description: this.getLabel(`${this.sceneName}_desc`),
                title: this.getLabel(`${this.sceneName}_title`),
                options: this.getLabel(`${this.sceneName}_options`),
            };
        },
    },
};
</script>
