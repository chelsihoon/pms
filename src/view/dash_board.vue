<template>
    <section id="dash_board">
        <header id="header">
            <div class="wrap_text">
                <p>설명 및 소제목이 들어갑니다. 설명 및 소제목이 들어갑니다.</p>
                <h2>타이틀이 들어갑니다.</h2>
            </div>
        </header>
        <navSet></navSet>
        <footer id="footer">
            <div class="copy">
                © 2021 Quantum Solution. ALL RIGHTS RESERVED.
            </div>
        </footer>
    </section>
</template>

<script>
import navSet from "../components/navSet.vue";
export default {
    name: "dashboard",
    components: { navSet },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
li {
    list-style: none;
}
img {
    display: block;
}

h1,
h2,
h3,
h4,
div,
p,
ul,
li,
span,
a,
label,
input,
button {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    color: #fff;
    font-weight: 400;
}
/* 
    font weight
    Thin 100
    Light 300
    Regular 400
    Medium 500
    Bold 700
    Black 900
  */

/* 공통 */
/* html {
    height: 100%;
} */
#dash_board {
    width: 100%;
    background-color: #f4f7fc;
    display: block;
}
.cursor {
    cursor: pointer;
}
#header {
    position: relative;
    background: url(../assets/img/sub_topBanner.png) no-repeat center/100% 100%;
    width: 100%;
    height: 100px;
}
#header .wrap_text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
#header .wrap_text p {
    text-shadow: 0 0 4px #000;
}
#header .wrap_text h2 {
    text-shadow: 0 0 4px #000;
    font-weight: 700;
    font-size: 22px;
}
</style>
