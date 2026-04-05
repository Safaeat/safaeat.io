import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Left side: text and image */}
          <div className="greeting-text-div">
            {/* Title + Nickname + Image */}
            <div className="greeting-header-right">
              <div className="greeting-text-block">
                <h1 className="greeting-text" style={{ color: theme.text }}>
                  {greeting.title}
                </h1>
                {greeting.nickname && (
                  <h2
                    className="greeting-nickname"
                    style={{ color: theme.text }}
                  >
                    {greeting.nickname}
                  </h2>
                )}
              </div>

              {greeting.profile_image && (
                <img
                  src={greeting.profile_image}
                  alt={greeting.title}
                  className="profile-img-right"
                />
              )}
            </div>

            {/* Subtitle */}
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>

            {/* Social Media Links */}
            <SocialMedia theme={theme} />

            {/* Github Button */}
            <div className="portfolio-repo-btn-div">
              <Button
                text="My Github"
                newTab={true}
                href={"https://github.com/Safaeat"}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
          </div>

          {/* Right side: FeelingProud SVG/Image */}
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
