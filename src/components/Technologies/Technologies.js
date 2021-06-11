import React from 'react';
import { DiFirebase, DiReact, DiLaravel, DiPhp, DiGithub, DiTrello } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Front-End To Back-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
          <DiLaravel size="3rem" />
          <DiPhp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP, Laravel and MySQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Vue.js, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithub size="3rem" />
          <DiTrello size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Project Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git Hub, Trello and Zoho for Agile Methodolgy
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
