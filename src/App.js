import styled from 'styled-components';
import Dp from './components/dp/dp';
import Description from './components/description/description';

const IdCardWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #122023;
  animation: expand .5s ease-in-out;
  @keyframes expand {
    from {
      transform: scale(0);
    }
  }
`;

const IdCard = styled.div`
  flex-basis: 100%;
  max-width: 30em;
  margin: auto;
  color: #fff;
  padding: 1em;
  border: 2px solid #0AE0DF;
  box-shadow: 0px 0px 3px 1px #12a0a0, inset 0px 0px 3px 1px #12a0a0;
  @media screen and (max-width: 500px) {
    width: 20em;
  }
`;

const ProfileRow = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

function App() {
  return (
    <IdCardWrapper>
      <IdCard>
        <ProfileRow>
          <Dp />
          <Description />
        </ProfileRow>
      </IdCard>
    </IdCardWrapper>
  );
}

export default App;
