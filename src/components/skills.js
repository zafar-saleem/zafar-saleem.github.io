import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Para = styled.p`
	animation-duration: 5s;
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
  const skillsList = [
    'JavaScript',
    'React',
    'Redux',
    'React Hooks',
    'HTML5',
    'CSS3',
    'Node',
    'Express',
    'MongoDB',
    'CI/CD',
    'AWS',
    'Heroku',
    'Git',
    'Github',
    'Gitlab',
    'Bitbucket',
    'Gitflow',
    'CSS Grid',
    'Mongoose',
    'Jest',
    'Enzyme',
    'Styled-Components',
    'CSS-in-JS',
    'jQuery',
    'SASS',
    'AJAX',
    'Angular',
    'Sublime Text',
    'Vim',
    'Slack',
    'Skype',
    'Confluence',
    'Jira',
    'Agile',
    'Scrum',
    'SDLC',
    'Team Work',
    'Individual Work',
    'Photoshop',
    'English',
    'Urdu',
    'Pashto',
  ];
  let index = 1;

  useEffect(() => {
    setInterval(() => {
      setSkill(skillsList[index]);
      index++;
      if (index === skillsList.length) {
        index = 0;
      }
    }, 5000);
  }, []);

	return (
		<Para props={skill}>{skill}</Para>
	);
}

export default Skills;
