import "./SocialIconsStyleWhiteSocialTwitter.css";

export const SocialIconsStyleWhiteSocialTwitter = ({
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
        "social-icons-style-white-social-twitter-instance " +
        className +
        " " +
        variantsClassName
      }
      src="SocialIconsStyleWhiteSocialTwitter.svg"
    />
  );
};
