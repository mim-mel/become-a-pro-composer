import styled from 'styled-components';
import './../../fonts/fonts.css';

const Banner = () => {
  return (
    <BackGround>
      <BannerImg src='image/banner-man.jpg' alt='banner-man' />
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
  background-image: url('image/banner-background.png');
  height: 800px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: 1400px) {
  }

  @media (max-width: 1024px) {
    height: 55vh;
  }

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const BannerImg = styled.img`
  width: 1150px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);

  @media (max-width: 1400px) {
    width: 100%;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
  }

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

export default Banner;
