import React from "react";
import Publications from "../pages/publication/PublicationComponent";
import { publications } from "../../portfolio"; // make sure path is correct
import { Fade } from "react-reveal";

function Publications({ theme }) {
  return (
    <div style={{ padding: "2rem", backgroundColor: theme.background }}>
      <Fade bottom duration={2000} distance="40px">
        <h1 style={{ color: theme.text }}>Publications</h1>
        <p style={{ color: theme.secondaryText }}>
          I have worked on two research papers and one research has been accepted for publication in the Journal of Current Research in Engineering and Science.
        </p>

        {publications.data.length === 0 ? (
          <p style={{ color: theme.secondaryText }}>No publications available yet.</p>
        ) : (
          publications.data.map((pub) => (
            <div
              key={pub.id}
              style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                border: `1px solid ${theme.accentColor}`,
                borderRadius: "8px",
                backgroundColor: theme.body, // optional
              }}
            >
              <h2 style={{ color: theme.accentColor }}>{pub.name}</h2>
              <p style={{ color: theme.text }}>{pub.description}</p>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.accentColor, textDecoration: "underline" }}
              >
                View Publication {pub.createdAt}
              </a>
            </div>
          ))
        )}
      </Fade>
    </div>
  );
}

export default Publications;
