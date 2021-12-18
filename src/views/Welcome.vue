<template>
    <div v-if="currentScene('Welcome')">
        <div class="card-container">
            <div class="card-title">
                <h1>Hello world</h1>
            </div>
            <div class="card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, odit.
                </p>
            </div>
            <div class="card-action">
                <button @click="nextStage()">Continue</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters({ currentScene: "stages/isCurrentStage" }),
    },
    methods: {
        ...mapActions({ nextStage: "stages/nextStage" }),
    },
};
</script>
