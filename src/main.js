import { createApp, h } from "vue";
import login from "./view/login.vue";
import dashBoard from "./view/dash_board.vue";
import pcsSituation from "./view/pcs_situation.vue";
import pcsUsageYear from "./view/pcs_usage_year.vue";
import pcsUsageTime from "./view/pcs_usage_time.vue";
import pcsUsageMonth from "./view/pcs_usage_month.vue";
import pcsUsageDay from "./view/pcs_usage_day.vue";
import pcsHistoryOperation from "./view/pcs_history_operation.vue";
import pcsHistoryTrouble from "./view/pcs_history_trouble.vue";
import pcsMenual from "./view/pcs_menual.vue";
import pcsSetupSetting from "./view/pcs_setup_setting.vue";
import pcsSetupDefault from "./view/pcs_setup_default.vue";
import pcsSetupSchedule from "./view/pcs_setup_schedule.vue";
import batterySituation from "./view/battery_situation.vue";
import batteryHistory from "./view/battery_history.vue";
import batteryMenual from "./view/battery_menual.vue";
import batterySetup from "./view/battery_setup.vue";
import rackSituation from "./view/rack_situation.vue";
import rackSetup from "./view/rack_setup.vue";
import systemSetup from "./view/system_setup.vue";
import systemCode from "./view/system_code.vue";
import systemMenual from "./view/system_manual.vue";
import systemDownload from "./view/system_download.vue";
import systemAdministrator from "./view/system_administrator.vue";

const routes = {
    "/login": login,
    "/dash-board": dashBoard,
    "/pcs-situation": pcsSituation,
    "/pcs-usage/year": pcsUsageYear,
    "/pcs-usage/time": pcsUsageTime,
    "/pcs-usage/month": pcsUsageMonth,
    "/pcs-usage/day": pcsUsageDay,
    "/pcs-history/operation": pcsHistoryOperation,
    "/pcs-history/trouble": pcsHistoryTrouble,
    "/pcs-menual": pcsMenual,
    "/pcs-setup/setting": pcsSetupSetting,
    "/pcs-setup/default": pcsSetupDefault,
    "/pcs-setup/schedule": pcsSetupSchedule,
    "/battery-situation": batterySituation,
    "/battery-history": batteryHistory,
    "/battery-menual": batteryMenual,
    "/battery-setup": batterySetup,
    "/rack-situation": rackSituation,
    "/rack-setup": rackSetup,
    "/system-setup": systemSetup,
    "/system-code": systemCode,
    "/system-menual": systemMenual,
    "/system-download": systemDownload,
    "/system-administrator": systemAdministrator,
};

const SimpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname,
    }),

    computed: {
        CurrentComponent() {
            return routes[this.currentRoute];
        },
    },

    render() {
        return h(this.CurrentComponent);
    },
};

createApp(SimpleRouter).mount("body");
