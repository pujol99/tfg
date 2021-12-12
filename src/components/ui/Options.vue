<template>
    <div>
        <div class="title">
            <Option :message="information.title" disabled/>
        </div>
        <div class="options">
            <Option :message="information.option1" :index="0"/>
            <Option :message="information.option2" :index="1"/>
            <Option :message="information.option3" :index="2"/>
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