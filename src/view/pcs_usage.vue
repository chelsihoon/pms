<template>
    <section id="pcs_usage">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="pcs_usage_time">
            <cnbSet></cnbSet>
            <section class="pcs_usage_time_wrap">
                <pcsUsageCntTop> </pcsUsageCntTop>
                <!-- <pcsUsageCntTime></pcsUsageCntTime> -->
                <!-- <pcsUsageCntDay></pcsUsageCntDay> -->
                <!-- <pcsUsageCntMonth></pcsUsageCntMonth> -->
                <pcsUsageCntYear></pcsUsageCntYear>
            </section>
        </section>
        <mainFooter></mainFooter>
    </section>
</template>

<script>
import mainHeader from "../components/mainHeader.vue";
import gnbSet from "../components/gnb.vue";
import mainFooter from "../components/mainFooter.vue";
import cnbSet from "../components/cnb.vue";
import lnbSet from "../components/lnb.vue";
import pcsUsageCntTop from "../components/pcs_usage_cnt_top.vue";
// import pcsUsageCntTime from "../components/pcs_usage_cnt_time.vue";
// import pcsUsageCntDay from "../components/pcs_usage_cnt_day.vue";
// import pcsUsageCntMonth from "../components/pcs_usage_cnt_month.vue";
import pcsUsageCntYear from "../components/pcs_usage_cnt_year.vue";

export default {
    name: "pcsUsage",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        pcsUsageCntTop,
        // pcsUsageCntTime,
        // pcsUsageCntDay,
        // pcsUsageCntMonth,
        pcsUsageCntYear,
    },
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
#pcs_usage {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#pcs_usage_time #cnbSet .cnb_wrap:nth-child(1) {
    display: flex;
}
/* cnb 번호 지정 */
#pcs_usage_time #cnbSet .cnb_wrap .depth_3_wrap:nth-child(2) {
    display: flex;
}
#pcs_usage_time .pcs_usage_time_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
.pcs_usage_time_wrap #pcs_usage_cnt_top_wrap .cnt_wrap .search {
    display: block;
}
</style>
