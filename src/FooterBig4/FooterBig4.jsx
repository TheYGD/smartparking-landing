import "./FooterBig4.css";
import { Logo } from "../Logo/Logo.jsx";
import { SocialIconsStyleWhiteSocialInstagram } from "../SocialIconsStyleWhiteSocialInstagram/SocialIconsStyleWhiteSocialInstagram.jsx";
import { SocialIconsStyleWhiteSocialDribbble } from "../SocialIconsStyleWhiteSocialDribbble/SocialIconsStyleWhiteSocialDribbble.jsx";
import { SocialIconsStyleWhiteSocialTwitter } from "../SocialIconsStyleWhiteSocialTwitter/SocialIconsStyleWhiteSocialTwitter.jsx";
import { SocialIconsStyleWhiteSocialYoutube } from "../SocialIconsStyleWhiteSocialYoutube/SocialIconsStyleWhiteSocialYoutube.jsx";
import { EssentialIconsSend } from "../EssentialIconsSend/EssentialIconsSend.jsx";

export const FooterBig4 = ({ className, ...props }) => {
  return (
    <div className={"footer-big-4 " + className}>
      <div className="company-info">
        <Logo className="logo-instance"></Logo>
        <div className="copyright">
          <div className="copyright-2020-landify-ui-kit">
            Copyright © 2020 Landify UI Kit.{" "}
          </div>
          <div className="all-rights-reserved">All rights reserved </div>
        </div>
        <div className="social-links">
          <SocialIconsStyleWhiteSocialInstagram
            styleVariant="white"
            social="instagram"
            className="social-icons-instance"
          ></SocialIconsStyleWhiteSocialInstagram>
          <SocialIconsStyleWhiteSocialDribbble
            styleVariant="white"
            social="dribbble"
            className="social-icons-instance2"
          ></SocialIconsStyleWhiteSocialDribbble>
          <SocialIconsStyleWhiteSocialTwitter
            styleVariant="white"
            className="social-icons-instance3"
          ></SocialIconsStyleWhiteSocialTwitter>
          <SocialIconsStyleWhiteSocialYoutube
            styleVariant="white"
            social="youtube"
            className="social-icons-instance4"
          ></SocialIconsStyleWhiteSocialYoutube>
        </div>
      </div>
      <div className="links">
        <div className="col-1">
          <div className="company">Company </div>
          <div className="list-items">
            <div className="about-us">About us </div>
            <div className="blog">Blog </div>
            <div className="contact-us">Contact us </div>
            <div className="pricing">Pricing </div>
            <div className="testimonials">Testimonials </div>
          </div>
        </div>
        <div className="col-2">
          <div className="support">Support </div>
          <div className="list-items">
            <div className="help-center">Help center </div>
            <div className="terms-of-service">Terms of service </div>
            <div className="legal">Legal </div>
            <div className="privacy-policy">Privacy policy </div>
            <div className="status">Status </div>
          </div>
        </div>
        <div className="col-3">
          <div className="stay-up-to-date">Stay up to date </div>
          <div className="email-input-field">
            <div className="input-field-bg"></div>
            <EssentialIconsSend className="essential-icons-send-instance"></EssentialIconsSend>
            <div className="your-email-address">Your email address </div>
          </div>
        </div>
      </div>
    </div>
  );
};
