import { useRef } from 'react';
import styled from 'styled-components';
import Dp from './components/dp/dp';
import Description from './components/description/description';
import {Link} from "./components/description/description";
// import useWindowSize from 'react-use/lib/useWindowSize';
// import Confetti from 'react-confetti';
// import { Fireworks } from 'fireworks-js/dist/react';

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

const Greeting = styled.h1`
	position: absolute;
	top: 25%;
	left: 43%;
	color: #ffffff;
	font-family: 'Orbitron', sans-serif;
	@media screen and (max-width: 500px) {
		top: 20%;
		left: 25%;
	}
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-align: center;
  font-size: 0.8rem;
`;

// const FireworksShow = styled(Fireworks)`
// 	width: 100%;
// 	height: 100%;
// 	position: absolute;
// 	top: 0;
//   left: 0;
//   width: '100%';
//   height: '100%';
//   position: 'fixed';
//   background: '#000';
// `;

function App() {
	// const { width, height } = useWindowSize();
	// const options = {
 //    speed: 3
 //  };

  return (
  	<>
  		{/*<Confetti width={width} height={height} numberOfPieces={30} />*/}
  		{/*<FireworksShow options={options} />*/}
	    <IdCardWrapper>
	      <IdCard>
	        <ProfileRow>
	        	{/*<Greeting>Eid Mubarak</Greeting>*/}
	          <Dp />
	          <Description />
	        </ProfileRow>
	      </IdCard>
	    </IdCardWrapper>
      <Footer>
        <Link href="mailto:zafarsaleem3@gmail.com">zafarsaleem3@gmail.com</Link>
      </Footer>
    </>
  );
}

export default App;
