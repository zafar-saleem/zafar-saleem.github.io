import avatar from '../assets/images/dp.jpg';
import styled from 'styled-components';

const DpContainer = styled.div`
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

const ArcInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 6px solid transparent;
  border-top-color: #0AE0DF;
  border-radius: 50%;
  top: -6px;
  left: -6px;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: rotate-clock;
  @keyframes rotate-clock {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ArcOuter = styled.div`
  position: absolute;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  border: 6px solid transparent;
  border-bottom-color: #0AE0DF;
  border-radius: 50%;
  top: -12px;
  left: -12px;
  animation-duration: 2s;
  animation-name: rotate-anticlock;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes rotate-anticlock {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

const Dp = () => (
	<DpContainer>
	  <ArcOuter />
	  <ArcInner />
	  <DpImage src={`${avatar}`} alt='JavaScript | HTML | CSS | React | Redux' />
	</DpContainer>
);

export default Dp;
