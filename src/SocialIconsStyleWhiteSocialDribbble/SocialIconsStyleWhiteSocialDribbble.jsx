import "./SocialIconsStyleWhiteSocialDribbble.css";

export const SocialIconsStyleWhiteSocialDribbble = ({
  styleVariant = "primary",
  social = "twitter",
  className,
  ...props
}) => {
  const variantsClassName =
    "style-variant-" + styleVariant + " social-" + social;

  return (
    <img
      className={
        "social-icons-style-white-social-dribbble-instance " +
        className +
        " " +
        variantsClassName
      }
      src="SocialIconsStyleWhiteSocialDribbble.svg"
    />
  );
};
