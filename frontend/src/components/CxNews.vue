<template>
    <div class="news">
        <img src="../assets/logo.jpeg" alt="">
        <div class="location">
            <h3>Jericoacoara-ce</h3>
        </div>
        
        <h1>Como nació Jeri Info?</h1>
        <p>Esta página nació de mi amor por Jericoacoara y mi deseo de compartir su belleza y encanto con el mundo. Aquí te cuento un poco sobre por qué decidí crear esta página y qué puedes esperar de ella.</p>
        <h2>POR JERI</h2>
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
h3 {
    font-size:small;
}
h1 {
    margin-left: 10px;
    margin-top: -20px;
    font-weight:bold;
}
p {
    margin-left: 10px;
    padding: 10px 0;
}
h2{
    margin-left: 10px;
    font-size: small;
}
</style>