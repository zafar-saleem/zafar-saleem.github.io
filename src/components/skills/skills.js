import { useEffect, useState } from 'react';
import { skills } from '../../data/skills';
import { Link } from '../description/description';
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

const Container = styled.div`
	a {
		position: absolute !important;
	  top: 85px;
	  right: 0;
	  font-size: 10px;
	  &:hover {
	  	text-decoration: underline;
	  }
	  @media screen and (max-width: 500px) {
	  	top: 68px;
	  }
	}
`;

// https://icons8.com/icons/set/co-founder
const Skills = () => {
	const [skill, setSkill] = useState({
    name: 'Co-Founder',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAFd0lEQVRIie2WXWxT5xnHf+/xsR0bx/k4iZPYcUjCR6ClH6k2SIIgfDW0q2Br06ioiK7dVq3S2LRdVNrFOm1Xu9m0VkOi2zRNg3Wl9JsirRIdiNI5oUBbGKmmEbckTROH2JDYTvx5zrMLGtcBB6ZKu9n6vzrn/z7v83+e//ueowe+xP861BfdOBAbbQTbY4J0AtXAGEodSedt+zf6fMn/inAoOv49peSXQBlAhd2JrhS60lCKaYeyPRVwl//mCwvv3rHdX1vjf2hsfPTwb18+fAEgFBv7oYJfF8fpSkNXCk3TcGo2LJG8obt+7HO5nlZKmaVy6wuJ/gy0VT1bX7//kYe/8uYrh5+oNoynG1paF1s580c2u21ebF4s8gJ2hKxpkhdLn85ldp9xfboHKClcsuNnfv6Tp5qag/e2tC1rX7qyrcym25idmckv8nj0Q397h2BX542MKoLs6DQCL9y04yf6+gKberoPdmxed2c+Z7rtdjuuRW4AHE6nPhm5hN/rZvzsWepWreLs839GxOKOHbuw2UuYJ6obKCmsFb/462v6eh/b2WXmxR1YHMTf1AjAhfODvLFvP26Pm861HZTlMgyfPs36gIMtLW4+7g8VcsxOx3n/wPNEw0MAHe9eulRfSnie1bt3bPev29xz0PDV3IJurwIQET4aOEbv1rt47q9nuWXdBpJlbrxNTZz747NoSrFy13coNwwATv/hWR7uauaFt/5B+/efBEiIprZ1VTUcX9DqPQcOjfX+4pktZV7HXlCPzvGJ/hOcOj/MomVteFZ34AESkzGSriYQITebgau6OMorOTM4TJrCBSzXLHktNP3Jkq6K4OWSVvdPjt1V5i0LF4sCBDZs5Vy2krZ7vlbgjv/pVabHBJttFW/vf6PAt2zu4UzSw5L7egucQCWm/u3inAXhQRl0oDgI4i8OmBj6mI/OXMTlaSV04PUCb+U0NN2OpmmY2c/rP7H/Jarr2zn12hHMbK7AK0tuL85bsHoqVn2HpmQJgFOzkbFMIhfCjA+Fqfa3YOZyWHmL6MgIFz84x8hgP7rDy8TFk6STlzl9qAH/iuU4nIvIpWfxVNXx4fG3ue3uzVeFlcpeJywivkh6ZmU0m8KjO0iZeXSlgViIJSggHh1HaeD2VuBfsZwHfvok16LcMBARpiZGUZIhHYmTmJigvK4OUXK0VMepantZ6nIuE02Z+RpNgUvXsdlsaEpDTIuKugDD50L0v/gmVi5L+7aN1ASvfm7/fGeA0fNhBEhNz9CwrBk9cZHv7n6cY0dPkBgeZjI5sxN4bt4ZK6USTl1/MZnNPYQwfSWbIZpJUdkYwOGyEx35gKnIEF5fLbnZFE23rSd88r1C9ZfCI/ia7wRTqPJqrF5RwSOP7wRg46Z1rO/uxJHP3rP393s3zROew5qa+qPxdL5NRH1TYNDudFIdbCJ4+3Ka25ey5sEe6pf5yaZnEZHPNwrEo2O0rl7Btq9v4atrVxf+eJ81xgN931D2bPoH112uOXTU1U0A+wZi492C3Fq/tJX6pa2F9YoGH5PhK9edbyZ5hcZb1/L+u6f45HIcgECwEU3B1FSCyci4JGbTexYUnoOFFVKob13Le2tr+fDYEYxgVYHL57Ikr0zhdLtp2dBd4ONzD5UGNc2Lf7X9vt63Ci4sJDwQi3lFMkMoaucVZJpEwmEqfXW4KysAmI5MkJmdwdfaWhw6I/B3JSoDvNxh1O9TShXO54aDQCg6dr9SvMQ1d+EapFAMIGws4rKgdnUaDQcX2nTT0ScUG+/TkN8JVJZY/lRZaldHbcOxz4rcIKiYzTIPrKlt/NeN8v5HM9fJ+KghOdujInSjxAAiKI4ocf6lwzDiN03wJf4v8W/OTw0rAbxvMQAAAABJRU5ErkJggg==',
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
		<Container>
			<Para duration={duration}>
	      <img src={skill.icon} alt={skill.name} />
	      <span>{skill.name}</span>
	    </Para>
	    <Link href='https://gist.github.com/zafar-saleem/c194969fc6c6994b3bbf6df8c46aab61'>
	    	View All Skills
	   	</Link>
    </Container>
	);
}

export default Skills;
