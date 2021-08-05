import { useEffect, useState } from 'react';
import { skills } from '../../data/skills';
import styled from 'styled-components';

const Para = styled.p`
  position: relative;
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

  span {
    position: absolute;
    top: 6px;
    left: 33px;
  }
`;

const Skills = () => {
	const [skill, setSkill] = useState({
    name: 'JavaScript',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB00lEQVRIie2WTUhUURTHf8dGG2njRkgUHBclbmR0IQhSDuhCVHA1GCGI4ieCC8FaCbZzYRspFNyOX9BGKYnCTPIzyNHN2EbQhRKEjhb1MvO6uA7TM54+aJ5u3n91zz33nh/n3sO9B1xdkeRvQ62Shhe/IySDsBQQjZkek9OLH8U7R8BeAsBszExyBGJDLtgFu+DrBe8fwttFWAyb57d2YGkN9g4cAq9tQHmj0NSjX9yfBlS2Cr4yofiBkHFPGAg5AD6vgRC8moO7PmirhZRkmJgWjn5b7/FYu+wrsqkz76pXNAehsw7uZEPSBWklJOOCPAXAo36hbxgy0i+GJgzcEoTqAES/weOn+q4Hx68AfDMFJp8ppp4riv266tt6hdGXCQD/MGB7V49jRRM7zpMTWP8MVaWwMKLorNPzL97Iv4HOZKu4IptQ0SyIQHejYnJGB/RlwvEfKGsQltdhrF9RUggH3/W+W6nWMW2BczIh6zbMf4L2J/Es6msUnhsQKFK8/yjUdMR9yR5oCSrLmOaeK0KpVetj/IKhCZhdEVK98LBKUXk/7n/9AcamhS9fISdLQ/NzTaSA5MVbH9vg/9Y58LV9EuY7NgifdYOJl0H48kWuHNApdr19R+y8Q8QAAAAASUVORK5CYII=',
  });
  let index = 1;
  const duration = 5000;

  useEffect(() => {
    setInterval(() => {
      setSkill({
        name: skills[index].name,
        icon: skills[index].icon,
      });
      index++;
      if (index === skills.length) {
        index = 0;
      }
    }, duration);
  }, []);

	return (
		<Para duration={duration}>
      <img src={skill.icon} alt={skill.name} />
      <span>{skill.name}</span>
    </Para>
	);
}

export default Skills;
