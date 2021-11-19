<template>
    <div>
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

<style scoped>
.title{
    position: absolute;
    top: 10%;
    left: 10%;
    background-color: aliceblue;
    padding: 10px;
}

.options{
    position: absolute;
    top: 90%;
    left: 10%;
    width: 80%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
</style>