import { useEffect } from 'react';
import styled from 'styled-components';
import Dp from './components/dp';
import Description from './components/description';

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
  useEffect(() => {
    document.title = 'Zafar Saleem | JavaScript | React | React Hooks | Redux | Node | Express | MongoDB';
  }, []);

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
