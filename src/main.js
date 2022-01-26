import { createApp, h } from "vue";
import login from "./view/login.vue";
import dashBoard from "./view/dash_board.vue";
import pcsSituation from "./view/pcs_situation.vue";

const routes = {
    "/": login,
    "/dashboard": dashBoard,
    "/pcssituation": pcsSituation,
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
