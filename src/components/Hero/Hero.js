import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const handleClick = (e, i) => {
  e.preventDefault();
  window.location.href= '#about';
} 

const Hero = (props) => (
  
  < >
    <Section row nopadding >
      <LeftSection >
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
            Building quality websites and applications with Laravel, Vue Js, React Js, Codeigniter and Wordpress.
        </SectionText>
        <Button onClick={(e) => handleClick(e)} >Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;