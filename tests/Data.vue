<template>
    <p>{{ quizQuestions.age.title }}</p>
    <p>{{ quizQuestions.gender.title }}</p>
    <p>{{ surveyQuestions.s1.title }}</p>
    <p>{{ surveyQuestions.s2.options[0] }}</p>
    <p>{{ sceneOptions('Scene1').options[1] }}</p>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: mapGetters({
        quizQuestions: "data/getQuizQuestions",
        surveyQuestions: "data/getSurveyQuestions",
        sceneOptions: "data/getSceneOptions",
    }),
};
</script>
