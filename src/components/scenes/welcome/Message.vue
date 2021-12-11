<template>
    <div class="welcome">
        <div class="welcome-title">
            <h1>Hello world</h1>
        </div>
        <div class="welcome-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odit.</p>
        </div>
        <div class="welcome-action">
            <button @click="this.$store.commit('nextScene')">Continue</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>