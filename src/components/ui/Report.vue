<template>
    <div v-show="sceneReporting">
        <div class="card-container">
            <div class="card-body">
                <p>{{ getLabel(`${sceneName}_report`)[decisionTaken] }}</p>
                <br />
                <p>{{ getLabel(`${sceneName}_report_general`) }}</p>
                <br />
                <div v-show="mood.focus !== mood.prev_focus">
                    <p>focus</p>
                    <span id="prev_focus" class="info reportMood"></span>
                    <span> -> </span>
                    <span id="focus" class="info reportMood"></span>
                </div>
                <div v-show="mood.socialization !== mood.prev_socialization">
                    <p>socialization</p>
                    <span id="prev_socialization" class="info reportMood"></span>
                    <span> -> </span>
                    <span id="socialization" class="info reportMood"></span>
                </div>
                <div v-show="mood.happiness !== mood.prev_happiness">
                    <p>happiness</p>
                    <span id="prev_happiness" class="info reportMood"></span>
                    <span> -> </span>
                    <span id="happiness" class="info reportMood"></span>
                </div>
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
    },
    watch: {
        sceneReporting(newValue, oldValue) {
            if (newValue === true) {
                this.setUpdates();
            }
        },
    },
    methods: {
        setUpdates() {
            this.moodUpdate('focus')
            this.moodUpdate('happiness')
            this.moodUpdate('socialization')
        },
        moodUpdate(type){
            var prevColor = new Color();
            var color = new Color();
            
            const barColorPrev = prevColor.lerpColors(this.red, this.green, this.mood[`prev_${type}`]);
            const barColor = color.lerpColors(this.red, this.green, this.mood[type])
            document.getElementById(`prev_${type}`).style.background = `
                linear-gradient(
                    90deg, 
                    #${barColorPrev.getHexString()} ${this.mood[`prev_${type}`] * 100}%, 
                    #FFFFFF ${this.mood[`prev_${type}`] * 100}%
            )`;
            document.getElementById(type).style.background = `
                linear-gradient(
                    90deg, 
                    #${barColor.getHexString()} ${this.mood[type] * 100}%, 
                    #FFFFFF ${this.mood[type] * 100}%
            )`;
            
        }
    },
    computed: {
        ...mapGetters({
            sceneReporting: "stages/isSceneReporting",
            getLabel: "data/getLabel",
            decisionTaken: "data/getDecisionTaken",
            mood: "data/getMood",
        }),
    },
};
</script>
