<template>
    <section id="pcs_history">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="pcs_history_time">
            <cnbSet></cnbSet>
            <section class="pcs_history_time_wrap">
                <pcsHistoryCntTop></pcsHistoryCntTop>
                <pcsHistoryCntOperation></pcsHistoryCntOperation>
                <pcsHistoryCntTrouble></pcsHistoryCntTrouble>
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
import pcsHistoryCntTop from "../components/pcs_history_cnt_top.vue";
import pcsHistoryCntOperation from "../components/pcs_history_cnt_operation.vue";
import pcsHistoryCntTrouble from "../components/pcs_history_cnt_trouble.vue";

export default {
    name: "pcsHistory",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        pcsHistoryCntTop,
        pcsHistoryCntOperation,
        pcsHistoryCntTrouble,
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
#pcs_history {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#pcs_history_time #cnbSet .cnb_wrap:nth-child(1) {
    display: flex;
}
/* cnb 번호 지정 */
#pcs_history_time #cnbSet .cnb_wrap .depth_3_wrap:nth-child(3) {
    display: flex;
}
#pcs_history_time .pcs_history_time_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
.pcs_history_time_wrap #pcs_history_cnt_top_wrap .cnt_wrap .search {
    display: block;
}
</style>
