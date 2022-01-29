<template>
    <section id="pcs_setup">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="pcs_setup_cnt">
            <cnbSet></cnbSet>
            <section class="pcs_setup_cnt_wrap">
                <pcsCntTop></pcsCntTop>
                <!-- <pcsSetupCntSetting></pcsSetupCntSetting> -->
                <!-- <pcsSetupCntDefault></pcsSetupCntDefault> -->
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
import pcsCntTop from "../components/pcs_cnt_top.vue";
// import pcsSetupCntSetting from "../components/pcs_setup_cnt_setting.vue";
// import pcsSetupCntDefault from "../components/pcs_setup_cnt_default.vue";
import pcssetupCntSchedule from "../components/pcs_setup_cnt_schedule.vue";

export default {
    name: "pcsSetup",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        pcsCntTop,
        // pcsSetupCntSetting,
        // pcsSetupCntDefault,
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
#pcs_setup_cnt #cnbSet .cnb_wrap:nth-child(1) {
    display: flex;
}
/* cnb 번호 지정 */
#pcs_setup_cnt #cnbSet .cnb_wrap .depth_3_wrap:nth-child(5) {
    display: flex;
}
#pcs_setup_cnt .pcs_setup_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
.pcs_setup_cnt_wrap #pcs_cnt_top_wrap .cnt_wrap .search {
    display: none;
}
.pcs_setup_cnt_wrap #pcs_cnt_top_wrap .cnt_wrap .add {
    display: none;
}
.pcs_setup_cnt_wrap #pcs_cnt_top_wrap .cnt_top .cnt_date {
    display: none;
}
.pcs_setup_cnt_wrap #pcs_cnt_top_wrap .cnt_top .month_wrap {
    display: none;
}
</style>
