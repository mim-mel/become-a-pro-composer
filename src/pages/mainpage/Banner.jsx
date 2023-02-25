import './../../fonts/fonts.css';
import { ReactComponent as Wave } from './wave.svg';
import styled, { keyframes } from 'styled-components';

const Banner = () => {
  return (
    <BackGround>
      <WaveBackground />
      <WaveContainer>
        <Wave />
      </WaveContainer>
      <MidiNoteWrap>
        <MidiNoteWrap2>
          <Group1>
            <Note1 src='image/note1.png' />
            <Note2 src='image/note2.png' />
            <Note3 src='image/note3.png' />
            <Note4 src='image/note4.png' />
            <Note5 src='image/note5.png' />
          </Group1>
          <Group1>
            <Note1 src='image/note1.png' />
            <Note2 src='image/note2.png' />
            <Note3 src='image/note3.png' />
            <Note4 src='image/note4.png' />
            <Note5 src='image/note5.png' />
          </Group1>
          <Group2>
            <Note6 src='image/note6.png' />
            <Note7 src='image/note7.png' />
            <Note8 src='image/note8.png' />
          </Group2>
          <Group2>
            <Note6 src='image/note6.png' />
            <Note7 src='image/note7.png' />
            <Note8 src='image/note8.png' />
          </Group2>
        </MidiNoteWrap2>
      </MidiNoteWrap>
      <CircleBox>
        <CircleImg1 src='image/blue-rings.png' alt='bluecircle' />
        <CircleImg2 src='image/circle-man.png' alt='bluecircle' />
      </CircleBox>
      <BannerContnents>
        <BannerTitle>
          BECOME A<br /> <TitleSpan>PRO COMPOSER!</TitleSpan>
        </BannerTitle>
        <BannerText>Orchestral music production. Made easy.</BannerText>
        <BannerButton>GET STARTED</BannerButton>
        <BottonBottomText>
          Instant access. No sign-up required.
        </BottonBottomText>
      </BannerContnents>
    </BackGround>
  );
};

const CircleAni = keyframes`
  0% {
    transform: translate(-50%, -48%);
	}
	50% {
    transform: translate(-50%, -52%);
	}
	100% {
    transform: translate(-50%, -48%);
	}
`;

const MidiNoteAni = keyframes`
  0% {
    transform: translate(-50%, 0);
	}
	100% {
    transform: translate(50%, 0);
	}
`;

const BackGround = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 900px;
  vertical-align: middle;
`;

const WaveContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 590px;
  left: 0;

  @media (max-width: 3100px) {
    top: 690px;
  }

  @media (max-width: 760px) {
    top: 750px;
  }
`;

const WaveBackground = styled.div`
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-color: #0d1f2d;

  @media (max-width: 3100px) {
    height: 700px;
  }

  @media (max-width: 760px) {
    height: 760px;
  }
`;

const CircleBox = styled.div`
  position: relative;
  left: 50%;
  top: 40%;
  width: 580px;
  height: 580px;

  @media (max-width: 1024px) {
    left: 45%;
    top: 40%;
    width: 480px;
    height: 480px;
  }

  @media (max-width: 760px) {
    left: 50%;
    top: 25%;
    width: 370px;
    height: 370px;
    transform: translate(-50%, 0);
  }
`;

const CircleImg1 = styled.img`
  position: absolute;
  left: 50%;
  height: 50%;
  width: 95%;
  height: 95%;
  transform: translate(-47.5%, -47.5%);
  z-index: 80;
`;

const CircleImg2 = styled.img`
  position: absolute;
  left: 50%;
  height: 50%;
  width: 70%;
  height: 70%;
  transform: translate(-50%, -48%);
  animation: ${CircleAni} 5.5s ease-in-out infinite;
  z-index: 100;
`;

const BannerContnents = styled.div`
  position: absolute;
  width: 900px;
  height: 60%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%);

  @media (max-width: 1400px) {
    width: 80%;
    top: 60%;
    transform: translate(-50%, -60%);
  }

  @media (max-width: 1024px) {
    padding: 0;
    width: 78vw;
    top: 16%;
    transform: translate(-50%, 16%);
  }

  @media (max-width: 768px) {
    top: 28%;
    width: 100vw;
    left: 0%;
    transform: translate(-0%, 28%);
  }
`;

const BannerTitle = styled.h1`
  font-size: 70px;
  color: white;
  font-family: 'Bloomer-Regular';
  letter-spacing: 0.1vw;
  font-weight: 400;
  margin: 10px 0 15px 0;

  @media (max-width: 1024px) {
    font-size: 6vw;
  }

  @media (max-width: 768px) {
    font-size: 13vw;
    text-align: center;
  }
`;

const TitleSpan = styled.span`
  color: #fe5d26;
`;

const BannerText = styled.div`
  color: white;
  font-family: 'Exo2-Light';
  font-size: 19px;
  letter-spacing: 0.1px;

  @media (max-width: 1024px) {
    font-size: 1.8vw;
  }

  @media (max-width: 768px) {
    font-size: 4.5vw;
    text-align: center;
  }
`;

const BannerButton = styled.button`
  font-size: 16px;
  font-family: 'Roboto-Bold';
  letter-spacing: 0.5px;
  margin: 35px 0 0 8px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
  color: #000;
  border: none;
  cursor: pointer;
  padding: 20px 45px;
  box-shadow: rgba(254, 93, 38) -6px 6px 0 0, -6px 6px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  //백그라운드 하나 더 만들고 쉐도우 없애기

  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: -5px;
  }

  @media (max-width: 1024px) {
    margin: 45px 0 0 10px;
    padding: 2vw 5vw;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 30px auto 0 auto;
    padding: 5vw 10vw;
    z-index: 100;
  }
`;

const BottonBottomText = styled.div`
  color: white;
  font-family: 'Exo2-Light';
  font-size: 12px;
  margin: 15px 0 0 10px;
  opacity: 0.5;

  @media (max-width: 1024px) {
    margin: 20px 0 0 10px;
  }

  @media (max-width: 768px) {
    font-size: 11.5px;
    margin: 18px 0 0 0;
    text-align: center;
  }
`;

const MidiNoteWrap = styled.div`
  width: 1600px;
  height: 750px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: hidden;

  @media (max-width: 1920px) {
    width: 250%;
  }
`;

const MidiNoteWrap2 = styled.div`
  position: relative;
  width: 3200px;
  height: 750px;
  overflow: hidden;
  display: grid;
  left: 50%;
  transform: translate(-50%, 0);
  grid-template-columns: 48% 48%;

  @media (max-width: 1920px) {
    width: 100%;
  }
`;

const Group1 = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  top: 15%;
  opacity: 0.2;
  margin-right: 30px;
  animation: ${MidiNoteAni} 200s linear infinite;

  @media (max-width: 760px) {
    animation: ${MidiNoteAni} 100s linear infinite;
  }
`;

const Note1 = styled.img`
  position: absolute;
  left: 550px;
  top: 90px;

  @media (max-width: 760px) {
    left: 5%;
  }
`;

const Note2 = styled.img`
  position: absolute;
  left: 820px;
  top: 65px;

  @media (max-width: 760px) {
    left: 25%;
    top: 35px;
  }
`;

const Note3 = styled.img`
  position: absolute;
  left: 980px;
  top: 40px;

  @media (max-width: 760px) {
    left: 45%;
  }
`;

const Note4 = styled.img`
  position: absolute;
  left: 1070px;
  top: 85px;

  @media (max-width: 760px) {
    left: 75%;
  }
`;

const Note5 = styled.img`
  position: absolute;
  left: 1650px;
  top: 40px;

  @media (max-width: 760px) {
    left: 85%;
    top: 10px;
  }
`;

const Group2 = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  top: 60%;
  opacity: 0.2;
  margin-right: 30px;
  animation: ${MidiNoteAni} 70s linear infinite;

  @media (max-width: 1920px) {
    top: 50%;
  }

  @media (max-width: 760px) {
    animation: ${MidiNoteAni} 80s linear infinite;
    opacity: 0.2;
  }
`;

const Note6 = styled.img`
  position: absolute;
  left: 610px;
  top: 40px;

  @media (max-width: 760px) {
    left: 5%;
    top: 120px;
  }
`

const Note7 = styled.img`
  position: absolute;
  left: 1010px;
  top: -10px;

  @media (max-width: 760px) {
    left: 35%;
    top: -30px;
  }
`

const Note8 = styled.img`
  position: absolute;
  left: 1400px;
  top: 10px;

  @media (max-width: 760px) {
    left: 65%;
  }
`

export default Banner;
