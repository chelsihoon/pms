<template>
    <section id="pcs_usage_cnt_year_wrap">
        <div class="cnt_center cnt_wrap">
            <h3 class="cnt_titl">시간별 충·방전량</h3>
            <div class="graph_wrap">
                <ul class="y_axis">
                    <li class="y_itm">
                        <p>6</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>5</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>4</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>3</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>2</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>1</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>0</p>
                        <p class="y_bar"></p>
                    </li>
                </ul>
                <ul class="x_axis">
                    <li>
                        <p>2015</p>
                    </li>
                    <li>
                        <p>2016</p>
                    </li>
                    <li>
                        <p>2017</p>
                    </li>
                    <li>
                        <p>2018</p>
                    </li>
                    <li>
                        <p>2019</p>
                    </li>
                    <li>
                        <div class="graph_bar_wrap">
                            <div class="graph_bar discharger"></div>
                            <div class="graph_bar charger"></div>
                        </div>
                        <p>2020</p>
                    </li>
                </ul>
                <div class="legend">
                    <div class="charger_amount">
                        <div class="bar"></div>
                        <p>충전량</p>
                    </div>
                    <div class="discharger_amount">
                        <div class="bar"></div>
                        <p>방전량</p>
                    </div>
                </div>
            </div>
            <div class="cnt_table">
                <p class="unit">[단위 : 년]</p>
                <ul class="list">
                    <li class="sub_titl"><p>구분</p></li>
                    <li class="itm"><p>2015</p></li>
                    <li class="itm"><p>2016</p></li>
                    <li class="itm"><p>2017</p></li>
                    <li class="itm"><p>2018</p></li>
                    <li class="itm"><p>2019</p></li>
                    <li class="itm"><p>2020</p></li>
                </ul>
                <ul class="list">
                    <li class="sub_titl"><p>충전량 [kW]</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>5.7</p></li>
                </ul>
                <ul class="list">
                    <li class="sub_titl"><p>방전량 [kW]</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>5.4</p></li>
                </ul>
                <div class="reference">
                    <p>
                        ※ 참고용 데이터 입니다. 정확한 수치는 해당 장비 ( PCS /
                        BAT / AMI ) 를 확인하시기 바랍니다.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "pcsUsageCntYear",
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
input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: -12px;
    width: 20px;
    height: 20px;
    z-index: 1;
}
#pcs_cnt_top_wrap .cnt_top .month_wrap input {
    display: block;
}
#pcs_cnt_top_wrap .cnt_top .month_wrap .month_wave {
    display: flex;
}
#pcs_usage_cnt_year_wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* padding: 24px 32px; */
}
#pcs_usage_cnt_year_wrap .cnt_wrap {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 24px;
    border-radius: 5px;
}
#pcs_usage_cnt_year_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#pcs_usage_cnt_year_wrap .cnt_center {
    margin-top: 16px;
    flex-direction: column;
    width: 100%;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    min-height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap {
    padding: 48px 23px 0;
    margin-bottom: 52px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap p {
    color: #777777;
    font-size: 14px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .y_axis {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .y_axis .y_itm {
    display: flex;
    align-items: center;
    margin-bottom: 37px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .y_axis .y_itm p {
    text-align: right;
    min-width: 19px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .y_axis .y_itm:last-child {
    margin-bottom: 0px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .y_axis .y_itm .y_bar {
    width: 100%;
    height: 1px;
    background-color: #dddddd;
    margin-left: 24px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .x_axis {
    display: flex;
    position: relative;
    justify-content: flex-end;
    margin-left: 43px;
    top: -10px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .x_axis li {
    width: 143px;
    text-align: center;
    position: relative;
    flex: 1;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .x_axis li p {
    margin-top: 6.5px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .x_axis li::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 50%;
    background-color: #dddddd;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .x_axis li:last-child::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 50%;
    background-color: #dddddd;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .x_axis li .graph_bar_wrap {
    position: absolute;
    bottom: 27px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-end;
}
#pcs_usage_cnt_year_wrap
    .cnt_center
    .graph_wrap
    .x_axis
    li
    .graph_bar_wrap
    > div {
    margin: 0 2px;
    width: 22px;
}
#pcs_usage_cnt_year_wrap
    .cnt_center
    .graph_wrap
    .x_axis
    li:nth-child(6)
    .charger {
    height: 310px;
    background-color: #ffbc3a;
}
#pcs_usage_cnt_year_wrap
    .cnt_center
    .graph_wrap
    .x_axis
    li:nth-child(6)
    .discharger {
    height: 319px;
    background-color: #32a1ff;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .legend {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 24px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .legend > div {
    width: 128px;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .legend .charger_amount .bar {
    width: 24px;
    height: 4px;
    background-color: #32a1ff;
    border-radius: 50px;
    margin-right: 16px;
}
#pcs_usage_cnt_year_wrap
    .cnt_center
    .graph_wrap
    .legend
    .discharger_amount
    .bar {
    width: 24px;
    height: 4px;
    background-color: #ffbc3a;
    border-radius: 50px;
    margin-right: 16px;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .legend > div:last-child {
    margin-right: 0;
}
#pcs_usage_cnt_year_wrap .cnt_center .graph_wrap .x_axis p {
    width: 100%;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table {
    width: 100%;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table p {
    color: #444;
    font-size: 14px;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .unit {
    color: #2a58ae;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    text-align: right;
    margin-bottom: 8px;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .list {
    height: 65px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .list li {
    min-width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .list:not(:nth-child(2)) li {
    border-right: 1px solid #ddd;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .list li.sub_titl {
    width: 165px;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .list li.sub_titl p {
    font-weight: 500;
}
#pcs_usage_cnt_year_wrap
    .cnt_center
    .cnt_table
    .list:not(:nth-child(2))
    li.sub_titl {
    background-color: #f4f7fc;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .list:nth-child(2) {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .list:nth-child(2) p {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .reference {
    margin-top: 16px;
}
#pcs_usage_cnt_year_wrap .cnt_center .cnt_table .reference p {
    color: #777777;
    font-size: 14px;
}
</style>
