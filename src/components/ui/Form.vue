<template>
    <Popup ref="popup" :message="getLabel('popup')" />
    <div class="card-container">
        <div class="card-title">
            <h2>{{ title }}</h2>
        </div>
        <div class="card-body">
            <!-- form -->
            <div class="form-element" v-for="question in Object.keys(currentPage)" :key="question">
                <!-- form title -->
                <div class="form-element-title">
                    {{ currentPage[question].title }}
                </div>
                <!-- -->
                <!-- form options -->
                <div class="form-element-options">
                    <div
                        class="form-element-option"
                        v-for="(option, index) in currentPage[question].options"
                        :key="option"
                        @click="onDecisionClick(currentPage[question], option, index)"
                        :class="{
                            selected: option === currentPage[question].optionSelected,
                        }"
                    >
                        {{ option }}
                    </div>
                </div>
                <!-- -->
            </div>
            <Disclaimer
                v-if="disclaimer"
                :content="disclaimer"
            />
            <!-- -->
        </div>
        <div class="card-action">
            <Continue @click="onContinue" disabled/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        propQuestions: Object,
        title: String,
        saveFunction: String,
        disclaimer: String
    },
    data() {
        return {
            questions: this.propQuestions,
            pageIndex: 0,
            PAGE_SIZE: 2,
        };
    },
    computed: {
        ...mapGetters({ getLabel: "data/getLabel" }),
        // Check that the options selected are valid options
        // Data is valid if there is no such situation where the
        // optionSelected is not included inside the options
        dataValidated() {
            return (
                Object.keys(this.currentPage).filter(
                    question => !this.currentPage[question].options.includes(this.currentPage[question].optionSelected)
                ).length == 0
            );
        },
        currentPage() {
            return this.paginateQuestions(this.questions, this.PAGE_SIZE)[this.pageIndex];
        },
    },
    methods: {
        ...mapActions({ nextStage: "stages/nextStage" }),
        onContinue() {
            if (!this.dataValidated) {
                // activate popup warning
                this.$refs.popup.activate();
                return;
            }
            this.saveData();

            // Next stage if last page
            if (this.pageIndex === this.pagesLength - 1) this.nextStage();
            else this.pageIndex++;
        },
        saveData() {
            this.formatDataForSave();

            this.$store.commit(`data/${this.saveFunction}`, this.currentPage);
        },
        onDecisionClick(question, option, index) {
            question.optionSelected = option;
            question.optionSelectedIndex = index;
        },
        formatDataForSave() {
            // From { {question: title, options[]}, ...}
            // To { {question: optionSelected}, ...}
            // Save only decision index

            for (var key of Object.keys(this.currentPage)) {
                this.currentPage[key] = this.currentPage[key].optionSelectedIndex;
            }
        },
        paginateQuestions(questions, PAGE_SIZE) {
            // From { {} {} ...}
            // To  [{ {} }, { {} }, ...]
            var questionPages = [];
            var questionPage = {};
            var index = 0;

            for (const [key, value] of Object.entries(questions)) {
                // Reset page set when we reach PAGE_SIZE
                if (index !== 0 && index % PAGE_SIZE === 0) {
                    questionPages.push(questionPage);
                    questionPage = {};
                }
                questionPage[key] = value;

                index++;
            }
            // Add remaining partial page set
            if (Object.keys(questionPage).length !== 0) questionPages.push(questionPage);

            this.pagesLength = questionPages.length;
            return questionPages;
        },
    },
};
</script>
