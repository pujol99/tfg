<template>
    <div v-if="currentScene('About')">
        <Form
            :propQuestions="questions"
            :title="getLabel('about_title')"
            formType="aboutDecisions"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        questions() {
            return {
                age: {
                    title: this.getLabel("about_age"),
                    options: ["10-", "11-15", "15-19", "20+"],
                },
                gender: {
                    title: this.getLabel("about_gender"),
                    options: this.getLabel("about_gender_options"),
                },
                socials: {
                    title: this.getLabel("about_socials"),
                    options: this.getLabel("about_socials_options"),
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
