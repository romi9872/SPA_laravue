import { Home} from "../components";

export default [
    {
        path: "/home",
        component: Home,
        name: "home",
        meta: {
            guest: true,
            authenticated:false
        }
    },
]