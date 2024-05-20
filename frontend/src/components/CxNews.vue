<template>
    <div class="news">
        <img src="../assets/logo.jpeg" alt="">
        <div class="location">
            <h3>ubicación</h3>
        </div>
        
        <h1>titulo</h1>
        <p>descripción</p>
        <h2>autor</h2>
    </div>
</template>

<script>
export default {
    name: "CxNews"
}
</script>

<style>
.news img {
    width: 100vw;
    margin-top: 30px;
}

.location {
    position: relative;
    top: -30px;
    left: 5px;
    background-color: aliceblue;
    width:fit-content;
    padding: 5px;
    border-bottom: 2px solid black;
}
h1 {
    margin-left: 10px;
    margin-top: -20px;
}
p {
    margin-left: 10px;
}
h2{
    margin-left: 10px;
}
</style>