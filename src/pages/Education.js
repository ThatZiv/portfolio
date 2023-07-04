/* eslint-disable react/jsx-pascal-case */
import { Divider, Grid } from "@material-ui/core";
import { Grow, Typography } from "@mui/material";
import React from "react";
import MediaCard from "../components/MediaCard";
import Section from "../components/Section";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Doxim from "../sections/Doxim";
import GDSC from "../sections/GDSC";
import SCD from "../sections/SCD";
import WayneHacks1 from "../sections/WayneHacks1";
import University from "../sections/University";
import School from "../sections/School";

export const LayoutGrid = ({ children }) => (
  <Grid
    justifyContent="flex-start"
    style={{ marginTop: "10px" }}
    container
    spacing={2}
  >
    {children}
  </Grid>
);

export default function Experience() {
  return (
    <Grow in timeout={500}>
      <div>
        <LayoutGrid>
          {/* University */}
          <MediaCard
            prechildren={
              <Section icon="fa-solid fa-map" title="Coursework">
                <University.components.Coursework />
              </Section>
            }
            {...University.meta}
          >
            <Section icon="fa-solid fa-award" title="Awards">
              <University.components.Awards />
            </Section>
            <Section icon="fa-solid fa-ranking-star" title="GPA">
              <University.components.Grade />
            </Section>
          </MediaCard>
          {/* HS */}
          <MediaCard
            prechildren={
              <Section icon="fa-solid fa-map" title="Coursework">
                <School.components.Coursework />
              </Section>
            }
            {...School.meta}
          >
            <Section icon="fa-solid fa-award" title="Awards">
              <School.components.Awards />
            </Section>
            <Section icon="fa-solid fa-ranking-star" title="GPA">
              <School.components.Grade />
            </Section>
            <Section icon="fa-solid fa-table-columns" title="Organizations">
              <School.components.Organizations />
            </Section>
          </MediaCard>
        </LayoutGrid>
      </div>
    </Grow>
  );
}
