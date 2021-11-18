<template>
    <div class="welcome centered">
        <h2>Alex Pujol TFG</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            unde animi sed tenetur repellendus quasi quod odio saepe ducimus
            voluptatem!
        </p>
        <button>Start Game</button>
    </div>
</template>

<style scoped>
.welcome{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 40px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(16px);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    border-radius: 6px;
}


p, button{
    font-size: 20px;
}

button{
    padding: 20px;
    width: 200px;
    margin: 0 auto;
}
</style>
