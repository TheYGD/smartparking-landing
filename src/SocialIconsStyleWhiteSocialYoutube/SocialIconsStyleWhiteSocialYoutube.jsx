import "./SocialIconsStyleWhiteSocialYoutube.css";

export const SocialIconsStyleWhiteSocialYoutube = ({
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
        "social-icons-style-white-social-youtube-instance " +
        className +
        " " +
        variantsClassName
      }
      src="SocialIconsStyleWhiteSocialYoutube.svg"
    />
  );
};
