<template>
    <div v-if="currentStage(sceneName)" class="scene-ui">
        <SceneVisuals :config="config[sceneName]" />
        <Options :information="options" />
        <Report :sceneName="sceneName" />
    </div>
</template>

<script>
import { config } from "./configuration";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            config: config,
        };
    },
    props: ["sceneName"],
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
