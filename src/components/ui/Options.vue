<template>
    <div v-show="!this.$store.getters.isSceneLoading">
        <div class="title">
            <Option :message="information.title"/>
        </div>
        <div class="options">
            <Option :message="information.option1"/>
            <Option :message="information.option2"/>
            <Option :message="information.option3"/>
        </div>
    </div>
</template>

<script>
import Option from './Option'
export default {
    name: 'Options',
    props: ['information'],
    components: {
        Option
    },
}
</script>