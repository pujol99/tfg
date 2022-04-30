<template>
    <div class="scene-ui">
        <!-- Scene introduction -->
        <div v-if="sceneLoading" class="description">
            <h1>{{ information.description }}</h1>
        </div>
        <!-- Scene title -->
        <div class="title" id="header-title">
            <Option :message="information.title" disabled />
        </div>
        <!-- Scene footer -->
        <div class="footer" id="footer">
            <!-- Icons -->
            <div class="icons" :class="{ active: !sceneLoading }">
                <div class="hided emotions">
                    <div class="moods info" id="focus">
                        <p>{{ moodFormatted('focus') }}</p>
                        <span id="emotion">{{currentEmotion('focus')}}</span>
                    </div>
                    <div class="moods info" id="socialization">
                        <p>{{ moodFormatted('socialization') }}</p>
                        <span id="emotion">{{currentEmotion('socialization')}}</span>
                    </div>
                    <div class="moods info" id="happiness">
                        <p>{{ moodFormatted('happiness') }}</p>
                        <span id="emotion">{{currentEmotion('happiness')}}</span>
                    </div>
                </div>
                <button @click="isExpanded = !isExpanded" class="material-icons icon hided">
                    {{ icon }}
                </button>
                <button class="material-icons icon hided" @click="this.$store.commit('stages/nextCamera')">360</button>
            </div>
            <!-- Scene Options -->
            <div class="options" :class="{ expanded: isExpanded }">
                <Option v-for="(option, index) in information.options" :key="option" :message="option" :index="index" />
            </div>
        </div>
    </div>
</template>

<script>
import { Color } from "three";
import { mapGetters } from "vuex";
export default {
    props: ["information"],
    data() {
        return {
            isExpanded: true,
            emotions: ["😪", "😟", "😐", "😀", "😎"],
            red: new Color("red"),
            green: new Color("green"),
        };
    },
    watch: {
        sceneReporting(newValue, oldValue) {
            if (newValue === true) {
                document.getElementById("footer").remove();
                document.getElementById("header-title").remove();
            }
        },
    },
    methods: {
        moodFormatted: function (type) {
            return `${this.getLabel(type)}`;
        },
        currentEmotion: function(type){
            // Map mood[0~1] to emotions[0~4]
            return this.emotions[Math.floor( this.mood[type] * this.emotions.length-1 )]
        },
    },
    mounted() {
        // Mood bar
        for (const mood of ["happiness", "focus", "socialization"]) {
            var color = new Color();
            var barColor = color.lerpColors(this.red, this.green, this.mood[mood]);
            document.getElementById(mood).style.background = `
                linear-gradient(
                    90deg, 
                    #${barColor.getHexString()} ${this.mood[mood] * 100}%, 
                    #FFFFFF ${this.mood[mood] * 100}%
            )`;
        }
    },
    computed: {
        ...mapGetters({
            sceneLoading: "stages/isSceneLoading",
            sceneReporting: "stages/isSceneReporting",
            currentCamera: "stages/getSceneCamera",
            mood: "data/getMood",
            getLabel: "data/getLabel",
        }),
        icon: function () {
            return this.isExpanded ? "expand_more" : "expand_less";
        },
    },
};
</script>
