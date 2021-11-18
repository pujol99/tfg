<template>
    <Visuals v-if="playing"/>
    <Option :message="message" @click="onButtonClick"/>
</template>

<script>
import Option from "../../Option"
import Visuals from "./Visuals"
export default {
    components: {
      Option,
      Visuals
    },
    data() {
      return {
        playing: false,
        message: "Start playing"
      }
    },
    methods: {
      onButtonClick: function() {
        this.playing = !this.playing
        this.message = this.playing ? "Stop playing" : "Start playing"
      }
    },
};
</script>
