<template>
    <section id="navSet">
        <nav id="gnb">
            <h1 class="main_logo">
                <a href="/"
                    ><img src="../assets/img/logo_white.png" alt="퀀텀로고"
                /></a>
            </h1>
            <div class="depth_1">
                <h2 class="depth_1_titl cursor selected_1">대시보드</h2>
                <h2 class="depth_1_titl cursor">PCS</h2>
                <h2 class="depth_1_titl cursor">Battery</h2>
                <h2 class="depth_1_titl cursor">Rack,Module</h2>
                <h2 class="depth_1_titl cursor">시스템 관리</h2>
            </div>
            <div class="logout cursor">
                <img src="../assets/img/ico_logout.png" alt="로그아웃" />
                <p>로그아웃</p>
            </div>
        </nav>
        <div class="lnb_wrap wrap">
            <nav class="lnb depth_2 list_pcs">
                <h3 class="depth_2_titl cursor">PCS 현황</h3>
                <h3 class="depth_2_titl cursor">PCS 사용량</h3>
                <h3 class="depth_2_titl cursor">PCS 이력</h3>
                <h3 class="depth_2_titl cursor">PCS 수동제어</h3>
                <h3 class="depth_2_titl cursor">PCS 설정</h3>
            </nav>
            <nav class="lnb depth_2 list_battery">
                <h3 class="depth_2_titl cursor">Battery 현황</h3>
                <h3 class="depth_2_titl cursor">Battery 운전이력</h3>
                <h3 class="depth_2_titl cursor">Battery 수동제어</h3>
                <h3 class="depth_2_titl cursor">Battery 설정</h3>
            </nav>
            <nav class="lnb depth_2 list_rack_module">
                <h3 class="depth_2_titl cursor">Rack 현황</h3>
                <h3 class="depth_2_titl cursor">Rack, Module 설정</h3>
            </nav>
            <nav class="lnb depth_2 list_system">
                <h3 class="depth_2_titl cursor">기타 기기 수동 제어</h3>
                <h3 class="depth_2_titl cursor">데이터 다운로드</h3>
                <h3 class="depth_2_titl cursor">기타 기기 설정</h3>
                <h3 class="depth_2_titl cursor">관리자 관리</h3>
                <h3 class="depth_2_titl cursor">코드 관리</h3>
            </nav>
        </div>
        <div class="cnb_wrap wrap">
            <nav class="cnb depth_3 list_pcs_used">
                <h4 class="depth_3_titl">시간별</h4>
                <h4 class="depth_3_titl">일별</h4>
                <h4 class="depth_3_titl">월별</h4>
                <h4 class="depth_3_titl">연도별</h4>
            </nav>
            <nav class="cnb depth_3 list_pcs_history">
                <h4 class="depth_3_titl">운행이력</h4>
                <h4 class="depth_3_titl">고장이력</h4>
            </nav>
            <nav class="cnb depth_3 list_pcs_setting">
                <h4 class="depth_3_titl">PCS 설정</h4>
                <h4 class="depth_3_titl">자동제어 기준값</h4>
                <h4 class="depth_3_titl">스케줄 설정</h4>
            </nav>
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
html {
    height: 100%;
}
#navSet {
    width: 100%;
    background-color: #f4f7fc;
}
#navSet nav {
    display: flex;
    position: relative;
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
    display: none;
}
#gnb {
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    width: 100%;
    height: 60px;
    background-color: #2a58ae;
}
#gnb .main_logo {
    margin-left: 32px;
}
#gnb .depth_1 {
    display: flex;
    height: 100%;
    align-items: center;
}
#gnb .depth_1 h2 {
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 120px;
    text-align: center;
    justify-content: center;
}
#gnb .logout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 114px;
    background-color: rgba(0, 0, 0, 0.1);
    height: 60px;
}
#gnb .logout img {
    width: 14px;
    height: 14px;
    text-align: center;
}
.wrap {
    position: relative;
}
.wrap > nav {
    position: absolute;
    left: 0;
    top: 0s;
}
.lnb_wrap {
    height: 48px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
}
.cnb_wrap {
    height: 90px;
    border-bottom: 1px solid #707070;
}
</style>
