<template>
    <section id="pcs_setup">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="pcs_setup_cnt">
            <cnbSet></cnbSet>
            <section class="pcs_setup_cnt_wrap">
                <pcssetupCntSchedule></pcssetupCntSchedule>
            </section>
        </section>
        <mainFooter></mainFooter>
    </section>
</template>

<script>
import mainHeader from "../components/main_header.vue";
import gnbSet from "../components/gnb.vue";
import mainFooter from "../components/main_footer.vue";
import cnbSet from "../components/cnb.vue";
import lnbSet from "../components/lnb.vue";
import pcssetupCntSchedule from "../components/pcs_setup_cnt_schedule.vue";

export default {
    name: "pcsSetupSchedule",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        pcssetupCntSchedule,
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
/* pcs_setup */
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

#pcs_setup {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#pcs_setup #lnbSet .lnb_wrap .depth_2:nth-child(1) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#pcs_setup #cnbSet .cnb_wrap:nth-child(1) {
    display: flex;
}
/* cnb 번호 지정 */
#pcs_setup #cnbSet .cnb_wrap .depth_3_wrap:nth-child(5) {
    display: flex;
}
#pcs_setup_cnt .pcs_setup_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
#pcs_setup #pcs_cnt_top_wrap .cnt_top .month_wrap {
    display: none;
}
</style>
