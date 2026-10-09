import { ICONS } from "../../constants/icons";

function Icon({ name, ...props }) {
    const Component = ICONS[name];
    return Component ? <Component {...props} /> : null;
}

export default Icon;
