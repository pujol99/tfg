<template>
    <div class="disclaimer">
        <div class="disclaimer-icon">
            <span class="material-icons"> error_outline </span>
        </div>
        <div class="disclaimer-content">
            {{ content }}
        </div>
    </div>
</template>

<script>
export default {
    props: ["content"],
};
</script>
