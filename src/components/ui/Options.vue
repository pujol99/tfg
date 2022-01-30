<template>
    <div class="scene-ui">
        <div v-if="sceneLoading" class="description">
            <h1>{{ information.description }}</h1>
        </div>
        <div class="title">
            <Option :message="information.title" disabled />
        </div>
        <div class="options" id="options">
            <div class="icons">
                <div>
                    <span class="info hided" id="mood" :class="{ active: !sceneLoading }">
                        <b>{{ moodFormatted }}</b>
                    </span>
                </div>
                <div>
                    <button
                        @click="isExpanded = !isExpanded"
                        class="material-icons icon hided"
                        :class="{ active: !sceneLoading }"
                    >
                        {{ icon }}
                    </button>
                </div>
                <div>
                    <button
                        class="material-icons icon hided"
                        :class="{ active: !sceneLoading }"
                        @click="this.$store.commit('stages/nextCamera')"
                    >
                        360
                    </button>
                </div>
            </div>
            <div class="options_content" :class="{ expanded: isExpanded }">
                <Option
                    v-for="(option, index) in information.options"
                    :key="option"
                    :message="option"
                    :index="index"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["information"],
    data() {
        return {
            isExpanded: true,
        };
    },
    watch: {
        sceneReporting(newValue, oldValue) {
            if(newValue === true){
                document.getElementById("options").remove();
            }
        },
    },
    computed: {
        ...mapGetters({
            sceneLoading: "stages/isSceneLoading",
            sceneReporting: "stages/isSceneReporting",
            currentCamera: "stages/getSceneCamera",
            mood: "data/getMood",
            getLabel: "data/getLabel"
        }),
        moodFormatted: function () {
            return `${this.getLabel("mood")}: ${this.mood * 100}%`;
        },
        icon: function () {
            return this.isExpanded ? "expand_more" : "expand_less";
        },
    },
};
</script>
