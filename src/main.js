import { createApp, h } from "vue";
import login from "./view/login.vue";
import dashBoard from "./view/dash_board.vue";
import pcsSituation from "./view/pcs_situation.vue";
import pcsUsage from "./view/pcs_usage.vue";
import pcsHistory from "./view/pcs_history.vue";
import pcsMenual from "./view/pcs_menual.vue";
import pcsSetup from "./view/pcs_setup.vue";

const routes = {
    "/login": login,
    "/dash-board": dashBoard,
    "/pcs-situation": pcsSituation,
    "/pcs-usage": pcsUsage,
    "/pcs-history": pcsHistory,
    "/pcs-menual": pcsMenual,
    "/pcs-setup": pcsSetup,
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
