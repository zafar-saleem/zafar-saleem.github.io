import Skills from './skills';
import cv from '../assets/cv/CV.pdf';
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

const Link = styled.a`
  position:absolute;
  color: #999999;
  text-decoration: none;
  font-size: 12px;
  margin-right: 5px;
  box-sizing: border-box;
  &.github {
    left: 78px;
  }
  &.linkedin {
    left: 132px;
  }
  &.instagram {
    left: 200px;
  }
  &.cv {
    left: 282px;
  }
  &:hover {
    font-size: 13px;
    text-shadow: 0px 0px 10px #12a0a0;
  }
`;

const Period = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 1000;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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
        <Link className='medium' href='https://zafarsaleem.medium.com'>Medium</Link>
        <Link className='github' href='https://github.com/zafar-saleem'>Github</Link>
        <Link className='linkedin' href='https://www.linkedin.com/in/zeesaleem/'>Linkedin</Link>
        <Link className='instagram' href='https://www.instagram.com/xafarfotos/'>Instagram</Link>
        <Link className='cv' href={`${cv}`}>CV</Link>
      </p>
    </Desc>
  )
};

export default Description;
