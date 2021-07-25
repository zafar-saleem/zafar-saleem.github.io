import styled from 'styled-components';

const Desc = styled.div`
  flex-basis: 66.6%;
  padding: 1em;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0px 0px 4px #12a0a0;
  letter-spacing: 1px;
`;

const Link = styled.a`
  color: #999999;
  text-decoration: none;
  font-size: 12px;
  margin-right: 5px;
  &:hover {
    text-shadow: 0px 0px 10px #12a0a0;
  }
`;

const Description = () => (
	<Desc>
	  <h1>Zafar Saleem</h1>
	  <p>Developer</p>
	  <p>
	    <Link href='https://zafarsaleem.medium.com'>Medium</Link>
	    <Link href='https://github.com/zafar-salee'>Github</Link>
	    <Link href='https://www.linkedin.com/in/zeesaleem/'>Linkedin</Link>
	    <Link href='https://www.instagram.com/xafarfotos/'>Instagram</Link>
	  </p>
	</Desc>
);

export default Description;
