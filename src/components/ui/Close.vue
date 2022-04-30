<template>
    <button class="continueButton" @click="onClick">
        {{ getLabel("close") }}
    </button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ['id'],
    computed: {
        ...mapGetters({ getLabel: "data/getLabel" }),
    },
    methods: {
        onClick(){
            document.getElementById(this.id).style.display = 'none'
        },
    },
};
</script>
