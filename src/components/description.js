import styled from 'styled-components';

const Desc = styled.div`
  flex-basis: 66.6%;
  padding: 1em;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0px 0px 4px #12a0a0;
  letter-spacing: 1px;
  @media screen and (max-width: 500px) {
  	font-size: 14px;
  }
`;

const Link = styled.a`
  color: #999999;
  text-decoration: none;
  font-size: 12px;
  margin-right: 5px;
  box-sizing: border-box;
  &:hover {
    font-size: 13px;
    text-shadow: 0px 0px 10px #12a0a0;
  }
`;

const Description = () => (
	<Desc>
	  <h1>Zafar Saleem</h1>
	  <p>JavaScript</p>
	  <p>
	    <Link href='https://zafarsaleem.medium.com'>Medium</Link>
	    <Link href='https://github.com/zafar-salee'>Github</Link>
	    <Link href='https://www.linkedin.com/in/zeesaleem/'>Linkedin</Link>
	    <Link href='https://www.instagram.com/xafarfotos/'>Instagram</Link>
	  </p>
	</Desc>
);

export default Description;
