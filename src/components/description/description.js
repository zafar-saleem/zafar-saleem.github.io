import Skills from '../skills/skills';
import cv from '../../assets/cv/CV.pdf';
import styled from 'styled-components';

const Desc = styled.div`
  position: relative;
  flex-basis: 66.6%;
  padding: 1em;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0px 0px 4px #12a0a0;
  letter-spacing: 1px;
  @media screen and (max-width: 500px) {
  	font-size: 14px;
    flex-basis: 80%;
  }
  @media screen and (max-width: 376px) {
    flex-basis: 85%;
  }
`;

const Name = styled.h1`
  display: inline-block;
  margin: 0;
  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

export const Link = styled.a`
  color: #999999;
  text-decoration: none;
  font-size: .75rem;
  margin-right: 5px;
  box-sizing: border-box;
  &:hover {
    text-shadow: 0px 0px 10px #12a0a0;
    text-decoration: overline;
  }
`;

const Period = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 1000;
  animation-duration: .2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-name: opacity;
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Description = () => {
  return (
    <Desc>
      <Name>Zafar Saleem</Name><Period>_</Period>
      <Skills />
      <p>
        <Link
          href='https://medium.com/@zafarsaleem'
          rel='Zafar Saleem zafarsaleem.medium.com Blogs'>
          Blogs
        </Link>
        <Link
          href='https://www.linkedin.com/in/zeesaleem'
          rel='Zafar Saleem Linkedin.com/in/zeesaleem Profile'>
          Linkedin
        </Link>
        <Link
          href='https://github.com/zafar-saleem'
          rel='Zafar Saleem Github.com/zafar-saleem Profile'>
          Github
        </Link>
        <Link
          href='https://gitlab.com/zsaleem'
          rel='Zafar Saleem Gitlab.com/zsaleem Profile'>
          Gitlab
        </Link>
        <Link
          href='https://www.dropbox.com/s/o9x3umf0t3yz4o8/CV.pdf?dl=0'
          rel='Zafar Saleem CV'>
          CV
        </Link>
      </p>
    </Desc>
  )
};

export default Description;
