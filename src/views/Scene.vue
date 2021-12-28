<template>
    <div v-if="currentStage(sceneName)">
        <!-- Visuals -->
        <slot></slot>
        <Options :information="options" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["sceneName"],
    computed: {
        ...mapGetters({
            currentStage: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
        options() {
            // Labels for this specific scene
            return {
                title: this.getLabel(`${this.sceneName}_title`),
                options: this.getLabel(`${this.sceneName}_options`),
            };
        },
    },
};
</script>
