import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link  rel="noreferrer" href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link  rel="noreferrer" href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link  rel="noreferrer" href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li id="aboutLink">
        <Link  rel="noreferrer" href="#about" >
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons  rel="noreferrer" href="https://github.com/stands30" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons  rel="noreferrer" href="https://www.linkedin.com/in/stanley-dsouza-255650125" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons  rel="noreferrer" href="https://www.instagram.com/dsouzastanley/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
