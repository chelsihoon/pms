import { createApp, h } from "vue";
import login from "./view/login.vue";
import dashboard from "./view/dash_board.vue";
import cell from "./view/cell.vue";

const routes = {
    "/": login,
    "/dashboard": dashboard,
    "/cell": cell,
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
