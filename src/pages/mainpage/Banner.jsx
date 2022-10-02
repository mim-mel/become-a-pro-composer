import styled from 'styled-components';
import './../../fonts/fonts.css';

const Banner = () => {
  return (
    <BackGround>
      <BannerImg src='/image/banner-man.jpg' />
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

const BackGround = styled.div`
  background-image: url('/image/banner-background.png');
  height: 105vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    height: 55vh;
  }

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const BannerImg = styled.img`
  width: 1300px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);

  @media (max-width: 1024px) {
    width: 100vw;
  }

  @media (max-width: 768px) {
    width: 160vw;
    left: 105%;
    top: 5%;
    transform: translate(-105%, -5%);
  }
`;

const BannerContnents = styled.div`
  position: absolute;
  width: 1100px;
  height: 60%;
  top: 13%;
  left: 50%;
  transform: translate(-50%, 13%);

  @media (max-width: 1024px) {
    padding: 0;
    width: 78vw;
    top: 10%;
    transform: translate(-50%, 10%);
  }

  @media (max-width: 768px) {
    top: 28%;
    width: 100vw;
    left: 0%;
    transform: translate(-0%, 28%);
  }
`;

const BannerTitle = styled.h1`
  font-size: 80px;
  color: white;
  font-family: 'Bloomer-Regular';
  letter-spacing: 0.1vw;
  font-weight: 400;
  margin: 1vh 0 4vh 0;

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
  font-size: 22px;
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
  margin: 55px 0 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
  color: #000;
  border: none;
  cursor: pointer;
  padding: 25px 55px;
  box-shadow: rgba(254, 93, 38) -6px 6px 0 0, -6px 6px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :active {
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
    margin: 4vh auto 0 auto;
    padding: 5vw 10vw;
  }
`;

const BottonBottomText = styled.div`
  color: white;
  font-family: 'Roboto-Thin';
  font-size: 12.5px;
  margin: 25px 0 0 10px;

  @media (max-width: 1024px) {
    margin: 20px 0 0 10px;
  }

  @media (max-width: 768px) {
    margin: 18px 0 0 0;
    text-align: center;
  }
`;

export default Banner;
