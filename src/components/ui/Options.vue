<template>
    <div>
        <div class="title">
            <Option :message="information.title" disabled />
        </div>
        <div class="options">
            <Option
                v-for="(option, index) in information.options"
                :key="option"
                :message="option"
                :index="index"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: ["information"],
};
</script>
