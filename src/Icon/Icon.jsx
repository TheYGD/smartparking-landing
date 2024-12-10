import "./Icon.css";

export const Icon = ({ className, ...props }) => {
  return <img className={"icon-instance " + className} src="Icon.svg" />;
};
