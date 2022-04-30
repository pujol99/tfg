<template>
    <div v-if="currentScene('About')">
        <Form
            :propQuestions="aboutQuestions"
            :title="getLabel('about_title')"
            saveFunction="saveAboutDecisions"
            :disclaimer="getLabel('likert_disclaimer')"
        />
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        aboutQuestions() {
            let options = this.getLabel("likert_options")
            return {
                age: {
                    title: this.getLabel("about_age"),
                    options: ["10-", "11-15", "15-19", "20+"],
                },
                gender: {
                    title: this.getLabel("about_gender"),
                    options: this.getLabel("about_gender_options"),
                },
                bergen1: {
                    title: this.getLabel("bergen1"),
                    options: options,
                },
                bergen2: {
                    title: this.getLabel("bergen2"),
                    options: options,
                },
                bergen3: {
                    title: this.getLabel("bergen3"),
                    options: options,
                },
                bergen4: {
                    title: this.getLabel("bergen4"),
                    options: options,
                },
                bergen5: {
                    title: this.getLabel("bergen5"),
                    options: options,
                },
                bergen6: {
                    title: this.getLabel("bergen6"),
                    options: options,
                },

            };
        },
        ...mapGetters({
            currentScene: "stages/isCurrentStage",
            getLabel: "data/getLabel",
        }),
    },
};
</script>
