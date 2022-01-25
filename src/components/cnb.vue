<template>
    <section id="cnbSet">
        <div class="cnb_wrap wrap">
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 사용량</h3>
                <nav class="cnb depth_3 list_pcs_used">
                    <a href="" class="selected_3"
                        ><h4 class="depth_3_titl selected_2">시간별</h4></a
                    >
                    <a href=""><h4 class="depth_3_titl">일별</h4></a>
                    <a href=""><h4 class="depth_3_titl">월별</h4></a>
                    <a href=""><h4 class="depth_3_titl">연도별</h4></a>
                </nav>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 이력</h3>
                <nav class="cnb depth_3 list_pcs_history">
                    <a href=""><h4 class="depth_3_titl">운행이력</h4></a>
                    <a href=""><h4 class="depth_3_titl">고장이력</h4></a>
                </nav>
            </div>
            <div class="depth_3_wrap">
                <h3 class="depth_2_titl">PCS 설정</h3>
                <nav class="cnb depth_3 list_pcs_setting">
                    <a href=""><h4 class="depth_3_titl">PCS 설정</h4></a>
                    <a href=""><h4 class="depth_3_titl">자동제어 기준값</h4></a>
                    <a href=""><h4 class="depth_3_titl">스케줄 설정</h4></a>
                </nav>
            </div>
        </div>
        <section id="contents"></section>
    </section>
</template>

<script>
export default {
    name: "cnbSet",
    components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #444;
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

#cnbSet h1,
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
    font-weight: 400;
    color: #444;
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
#cnbSet {
    width: 100%;
    background-color: #f4f7fc;
}
.cursor {
    cursor: pointer;
}
.selected_2 {
    color: #2a58ae !important;
}
.selected_3::after {
    content: "" !important;
    height: 3px !important;
    width: 100% !important;
    background: #2a58ae !important;
    position: absolute !important;
    left: 0 !important;
    bottom: -1px !important;
}
.cnb_wrap {
    width: 100%;
    position: relative;
    height: 58px;
    margin-top: 32px;
    border-bottom: 1px solid #ddd;
}
.cnb_wrap .depth_3_wrap {
    position: absolute;
    margin-left: 32px;
    height: 100%;
    display: flex;
    display: none;
}
.cnb_wrap .depth_3_wrap:first-child {
    display: flex;
}
.cnb_wrap .depth_3_wrap .depth_2_titl {
    display: flex;
    margin-right: 40px;
    line-height: 40px;
    font-size: 28px;
    font-weight: 500;
    color: #313748;
}
.cnb_wrap .depth_3_wrap .depth_2_titl::before {
    content: "";
    background: url(../assets/img/icon_pcs.png) no-repeat center;
    width: 40px;
    height: 40px;
    position: relative;
    top: 0%;
    left: 0%;
    margin-right: 15px;
    display: block;
}
.cnb_wrap .depth_3_wrap .depth_3 {
    display: flex;
}
.cnb_wrap .depth_3_wrap .depth_3 a {
    margin-right: 40px;
    position: relative;
}
.cnb_wrap .depth_3_wrap .depth_3_titl {
    line-height: 40px;
    font-weight: 500;
    color: #777777;
}
.cnb_wrap .depth_3_wrap .depth_3_titl:last-child {
    margin-right: 0px;
}
</style>
