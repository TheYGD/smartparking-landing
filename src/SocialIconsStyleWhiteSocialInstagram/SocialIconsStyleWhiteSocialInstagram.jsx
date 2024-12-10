import "./SocialIconsStyleWhiteSocialInstagram.css";

export const SocialIconsStyleWhiteSocialInstagram = ({
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
        "social-icons-style-white-social-instagram-instance " +
        className +
        " " +
        variantsClassName
      }
      src="SocialIconsStyleWhiteSocialInstagram.svg"
    />
  );
};
