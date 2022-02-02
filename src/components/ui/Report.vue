<template>
    <div v-show="sceneReporting">
        <div class="card-container">
            <div class="card-body">
                <p>{{ getLabel(`${sceneName}_report`)[decisionTaken] }}</p>
                <br />
                <p>{{ getLabel(`${sceneName}_report_general`) }}</p>
                <br />
                <p>Mood:</p>
                <span id="reportPrevMood" class="info reportMood"></span>
                <span> -> </span>
                <span id="reportMood" class="info reportMood"></span>
            </div>
            <div class="card-action">
                <Continue />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Color } from "three";
export default {
    props: ["sceneName"],
    mounted() {
        this.red = new Color("red");
        this.green = new Color("green");
        this.red2 = new Color("red");
        this.green2 = new Color("green");
    },
    watch: {
        sceneReporting(newValue, oldValue) {
            if (newValue === true) {
                const barColorPrev = this.red.lerp(this.green, this.prevMood);
                const barColor = this.red2.lerp(this.green2, this.mood);
                document.getElementById("reportPrevMood").style.background = `
                    linear-gradient(
                        90deg, 
                        #${barColorPrev.getHexString()} ${this.prevMood * 100}%, 
                        #FFFFFF ${this.prevMood * 100}%
                )`;
                document.getElementById("reportMood").style.background = `
                    linear-gradient(
                        90deg, 
                        #${barColor.getHexString()} ${this.mood * 100}%, 
                        #FFFFFF ${this.mood * 100}%
                )`;
            }
        },
    },
    computed: {
        ...mapGetters({
            sceneReporting: "stages/isSceneReporting",
            getLabel: "data/getLabel",
            decisionTaken: "data/getDecisionTaken",
            mood: "data/getMood",
            prevMood: "data/getPrevMood",
        }),
    },
};
</script>
