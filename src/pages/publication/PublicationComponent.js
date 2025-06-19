import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

import PublicationCard from "../../components/publicationsCard/PublicationCard";
import EducationImg from "../education/EducationImg";
import { publicationsHeader, publications } from "../../portfolio";
import "./PublicationComponent.css";
import { Fade } from "react-reveal";

class Publications extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="education-main">
        <Header theme={theme} />
        <div className="basic-education">

          {/* Heading Image & Text */}
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Publications
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Explore my research fields and academic contributions.
                </h3>
              </div>
            </div>
          </Fade>

          {/* Conditional Title + Description */}
          {publications.data.length > 0 && (
            <div className="basic-projects">
              <Fade bottom duration={2000} distance="40px">
                <div className="publications-heading-div">
                  <div className="publications-heading-text-div">
                    <h1
                      className="publications-heading-text"
                      style={{ color: theme.text }}
                    >
                      {publicationsHeader.title}
                    </h1>
                    <p
                      className="projects-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {publicationsHeader.description}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          )}

          {/* Publication Cards */}
          <div className="repo-cards-div-main">
            {publications.data.map((pub, index) => (
              <PublicationCard key={index} pub={pub} theme={theme} />
            ))}
          </div>
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Publications;