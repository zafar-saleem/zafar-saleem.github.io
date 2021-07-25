import avatar from './assets/images/dp.jpg';
import styled from 'styled-components';

const IdCardWrapper = styled.div`
  display: flex;
  height: 100vh;
  width:100%;
  background-color: #122023;
`;

const IdCard = styled.div`
  flex-basis: 100%;
  max-width: 30em;
  margin: auto;
  color: #fff;
  padding: 1em;
  border: 2px solid #0AE0DF;
  box-shadow: 0px 0px 3px 1px #12a0a0, inset 0px 0px 3px 1px #12a0a0;
`;

const ProfileRow = styled.div`
  display: flex;
`;

const Dp = styled.div`
  position: relative;
  margin: 0;
  flex-basis: 33.3%;
  align-self: center;
`;

const DpImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 3px #12a0a0;
`;

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


function App() {
  return (
    <IdCardWrapper>
      <IdCard>
        <ProfileRow>
          <Dp>
            <DpImage src={`${avatar}`} />
          </Dp>
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
        </ProfileRow>
      </IdCard>
    </IdCardWrapper>
  );
}

export default App;
