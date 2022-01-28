<template>
    <section id="pcs_cnt_top_wrap">
        <div class="cnt_top cnt_wrap">
            <select name="" id="">
                <option value="">새 PCS #0</option>
                <option value="">새 PCS #1</option>
                <option value="">새 PCS #2</option>
                <option value="">새 PCS #3</option>
                <option value="">새 PCS #4</option>
            </select>
            <input type="date" name="" value="2020-08-15" class="cnt_date" />
            <div class="month_wrap">
                <input type="month" name="" value="2015-08" class="cnt_month" />
                <div class="month_wave">~</div>
                <input type="month" name="" value="2020-08" class="cnt_month" />
            </div>
            <button class="search btn">조회</button>
            <button class="add btn">PCS 추가</button>
            <button class="regist btn">등록</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "pcsCntTop",
    components: {},
};
</script>

<style>
/*
    font weight
    Thin 100
    Light 300
    Regular 400
    Medium 500
    Bold 700
    Black 900
  */
input[type="date"]::-webkit-clear-button,
input[type="date"]::-webkit-inner-spin-button {
    display: none;
}
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="month"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: -12px;
    width: 20px;
    height: 20px;
    z-index: 1;
}
#pcs_cnt_top_wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
#pcs_cnt_top_wrap .cnt_wrap {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}
#pcs_cnt_top_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#pcs_cnt_top_wrap .cnt_top {
    width: 100%;
    height: 88px;
    display: flex;
    /* margin-bottom: 16px; */
    align-items: center;
    padding: 20px 24px;
}
#pcs_cnt_top_wrap .cnt_top select {
    border: 1px solid #ddd;
    width: 240px;
    height: 48px;
    padding: 14px 16px;
    border-radius: 2px;
    appearance: none;
    background: url(../assets/img/select_arr.png) no-repeat 90% 50%;
    color: #444444;
    font-size: 14px;
    margin-right: 8px;
}
#pcs_cnt_top_wrap .cnt_top select option {
    color: #444444;
    font-size: 14px;
}
#pcs_cnt_top_wrap .cnt_top input {
    border: 1px solid #ddd;
    width: 240px;
    height: 48px;
    padding: 14px 40px;
    border-radius: 2px;
    color: #444;
    background: transparent;
    position: relative;
    margin-right: 8px;
    font-size: 14px;
}
#pcs_cnt_top_wrap .cnt_top .month_wrap {
    display: flex;
    display: none;
}
#pcs_cnt_top_wrap .cnt_top .month_wrap .cnt_month:first-child {
    margin: 0px;
}
#pcs_cnt_top_wrap .cnt_top .month_wrap .month_wave {
    margin: 0 7px;
    color: #777;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
}
#pcs_cnt_top_wrap .cnt_top input::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../assets/img/ico_calendar.png) no-repeat;
}
#pcs_cnt_top_wrap .cnt_wrap .btn {
    width: 136px;
    height: 48px;
    background-color: #1d3e7a;
    border: 1px solid #173161;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    margin-left: auto;
    cursor: pointer;
    display: none;
}
</style>
