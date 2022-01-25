<template>
    <section id="navSet">
        <nav id="gnb">
            <h1 class="main_logo">
                <a href="/"
                    ><img src="../assets/img/logo_white.png" alt="퀀텀로고"
                /></a>
            </h1>
            <div class="depth_1">
                <a href=""><h2 class="depth_1_titl selected_1">대시보드</h2></a>
                <a href=""><h2 class="depth_1_titl">PCS</h2></a>
                <a href=""><h2 class="depth_1_titl">Battery</h2></a>
                <a href=""><h2 class="depth_1_titl">Rack,Module</h2></a>
                <a href=""><h2 class="depth_1_titl">시스템 관리</h2></a>
            </div>
            <a href="" class="logout">
                <img src="../assets/img/ico_logout.png" alt="로그아웃" />
                <p>로그아웃</p>
            </a>
        </nav>
        <div class="lnb_wrap wrap">
            <nav class="lnb depth_2 list_pcs">
                <a href=""><h3 class="depth_2_titl selected_2">PCS 현황</h3></a>
                <a href=""><h3 class="depth_2_titl">PCS 사용량</h3></a>
                <a href=""><h3 class="depth_2_titl">PCS 이력</h3></a>
                <a href=""><h3 class="depth_2_titl">PCS 수동제어</h3></a>
                <a href=""><h3 class="depth_2_titl">PCS 설정</h3></a>
            </nav>
            <nav class="lnb depth_2 list_battery">
                <a href=""><h3 class="depth_2_titl">Battery 현황</h3></a>
                <a href=""><h3 class="depth_2_titl">Battery 운전이력</h3></a>
                <a href=""><h3 class="depth_2_titl">Battery 수동제어</h3></a>
                <a href=""><h3 class="depth_2_titl">Battery 설정</h3></a>
            </nav>
            <nav class="lnb depth_2 list_rack_module">
                <a href=""><h3 class="depth_2_titl">Rack 현황</h3></a>
                <a href=""><h3 class="depth_2_titl">Rack, Module 설정</h3></a>
            </nav>
            <nav class="lnb depth_2 list_system">
                <a href=""><h3 class="depth_2_titl">기타 기기 수동 제어</h3></a>
                <a href=""><h3 class="depth_2_titl">데이터 다운로드</h3></a>
                <a href=""><h3 class="depth_2_titl">기타 기기 설정</h3></a>
                <a href=""><h3 class="depth_2_titl">관리자 관리</h3></a>
                <a href=""><h3 class="depth_2_titl">코드 관리</h3></a>
            </nav>
        </div>
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
    name: "navSet",
    components: {},
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

#navSet h1,
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
}
#navSet * {
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

/* 공통 */
html {
    height: 100%;
}
#navSet {
    width: 100%;
    background-color: #f4f7fc;
}
.cursor {
    cursor: pointer;
}
.selected_1 {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
.selected_2 {
    color: #2a58ae;
}
.selected_3::after {
    content: "";
    height: 3px;
    width: 100%;
    background: #2a58ae;
    position: absolute;
    left: 0;
    bottom: -1px;
}
#gnb {
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    width: 100%;
    height: 60px;
    background-color: #2a58ae;
    display: flex;
}
#gnb .main_logo {
    margin-left: 32px;
}
#gnb .depth_1 {
    display: flex;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
}
#gnb .depth_1 .depth_1_titl {
    display: flex;
    align-items: center;
    min-width: 120px;
    height: 40px;
    text-align: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
}
#gnb .logout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 114px;
    background-color: rgba(0, 0, 0, 0.1);
    height: 60px;
    color: #fff;
}
#gnb .logout img {
    width: 14px;
    height: 14px;
    text-align: center;
    margin-bottom: 4px;
}
#gnb .logout p {
    color: #fff;
    font-size: 14px;
}
.lnb_wrap {
    width: 100%;
    height: 48px;
    position: relative;
    background: #fff;
    border-bottom: 1px solid #ddd;
}
.lnb {
    height: 100%;
    margin: 0 auto;
    position: absolute;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    display: none;
}
.lnb:first-child {
    display: flex;
}
.lnb a {
    margin-right: 40px;
}
.lnb a:last-child {
    margin-right: 0px;
}
.lnb .depth_2_titl {
    font-weight: 700;
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
}
.cnb_wrap .depth_3_wrap .depth_3_titl:last-child {
    margin-right: 0px;
}
</style>
