import { useEffect, useState } from 'react';
import { skills } from '../../data/skills';
import styled from 'styled-components';

const Para = styled.p`
	animation-duration: ${({duration}) => `${duration}ms`};
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

const Skills = () => {
	const [skill, setSkill] = useState('JavaScript');
  let index = 1;
  const duration = 5000;

  useEffect(() => {
    setInterval(() => {
      setSkill(skills[index]);
      index++;
      if (index === skills.length) {
        index = 0;
      }
    }, duration);
  }, []);

	return (
		<Para duration={duration}>{skill}</Para>
	);
}

export default Skills;
