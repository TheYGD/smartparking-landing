import "./Logo.css";
import { Icon } from "../Icon/Icon.jsx";

export const Logo = ({ className, ...props }) => {
  return (
    <div className={"logo " + className}>
      <Icon className="icon-instance"></Icon>
      <img className="nexcent" src="nexcent0.svg" />
    </div>
  );
};
