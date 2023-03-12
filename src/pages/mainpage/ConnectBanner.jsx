import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import './../../fonts/fonts.css';

const ConnectBanner = () => {
  return (
    <BannerWrap>
      <BannerBack />
      <ContentsWrap>
        <CircleBlock>
          <CircleImg />
        </CircleBlock>
        <TextBlock>
          <Title>Connect with composers who improve together.</Title>
          <Text>
            Join hundreds of composers at various career stages. No beginner
            question is wrong to ask. Nor is the most unfinished demo not good
            enough for feedback. Learn and grow!
          </Text>
          <ButtonWrap>
            <ButtonBack>
              <BannerButton>JOIN DISCORD</BannerButton>
            </ButtonBack>
          </ButtonWrap>
        </TextBlock>
        <WhiteBoxBlock>
          <Zoom duration={600} triggerOnce={true}>
            <WhiteBox1>
              <IconBlock>
                <DiscordIcon />
                <DiscordName>WalterMelone</DiscordName>
              </IconBlock>
              <DiscordText>
                I’m really happy to join this discord server. Kevin is an
                inspiration for me to keep on working hard on my songs.
              </DiscordText>
            </WhiteBox1>
          </Zoom>
          <Zoom duration={600} delay={300} triggerOnce={true}>
            <WhiteBox2>
              <IconBlock>
                <DiscordIcon />
                <DiscordName>Lukas S.</DiscordName>
              </IconBlock>
              <DiscordText>
                There's no question that's wrong to ask, neither is the most
                unfinished demo of demos not good enough for feedback. All of us
                are here, connected through our love for music and it's a place
                for everyone to learn and grow as a composer and maybe be a
                better person for it ;)
              </DiscordText>
            </WhiteBox2>
          </Zoom>
        </WhiteBoxBlock>
        <WhiteBoxBlock>
          <Zoom duration={600} delay={600} triggerOnce={true}>
            <WhiteBox3>
              <IconBlock>
                <DiscordIcon />
                <DiscordName>ZEMO</DiscordName>
              </IconBlock>
              <DiscordText>
                Really been digging this community. Taking advice, this is a
                gold mine of knowledge and experience. Especially for someone
                like me, who has played music all of my life in bands, but only
                recently, I got brave enough to try my hand at composing. The
                #mental-health channel really made me feel more comfortable,
                just knowing that others deal with a lot of what I have gone
                through.
              </DiscordText>
            </WhiteBox3>
          </Zoom>
        </WhiteBoxBlock>
      </ContentsWrap>
    </BannerWrap>
  );
};

const BannerWrap = styled.div`
  width: 100%;
  height: 570px;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 760px) {
    height: 750px;
  }
`;

const BannerBack = styled.div`
  width: 1920px;
  height: 570px;
  background-image: url(image/connect-banner.png);
  background-size: 1920px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -10;

  @media (max-width: 1024px) {
    width: 105%;
    background-repeat: no-repeat;
  }

  @media (max-width: 760px) {
    height: 740px;
    width: 115%;
    background-repeat: no-repeat;
  }
`;

const ContentsWrap = styled.div`
  width: 1000px;
  height: 570px;
  display: grid;
  grid-template-columns: 11% 48% 19% 19%;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  padding-top: 30px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    grid-template-columns: 9% 48% 20% 20%;
  }

  @media (max-width: 760px) {
    grid-template-columns: 48% 48%;
    height: 610px;
    margin-top: 50px;
  }
`;

const CircleBlock = styled.div`
  width: 100%;
  height: auto;
`;

const CircleImg = styled.div`
  width: 70px;
  height: 140px;
  background-image: url(image/half-circle.png);
  background-size: 70px;

  @media (max-width: 1024px) {
    width: 40px;
    height: 80px;
    background-size: 40px;
  }
`;

const TextBlock = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 87%;
  }

  @media (max-width: 760px) {
    width: 170%;
    position: relative;
    left: -100px;
  }
`;

const Title = styled.div`
  font-family: 'Exo2-Bold';
  color: #f4f4f4;
  font-size: 35px;
  line-height: 45px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 27px;
    line-height: 37px;
    margin-bottom: 25px;
  }

  @media (max-width: 760px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 15px;
  }
`;

const Text = styled.div`
  font-family: 'Exo2-Light';
  font-size: 14px;
  line-height: 19px;
  color: #f4f4f4;
  margin-bottom: 45px;

  @media (max-width: 1024px) {
    margin-bottom: 35px;
  }

  @media (max-width: 760px) {
    font-size: 12px;
    margin-bottom: 20px;
    line-height: 17px;
  }
`;

const ButtonWrap = styled.div`
  position: relative;
  width: 170px;
  height: 57px;

  @media (max-width: 768px) {
    width: 150px;
    height: 50px;
    margin-top: 10px;
  }
`;

const ButtonBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fe5d26;
  border-radius: 10px;
`;

const BannerButton = styled.button`
  position: absolute;
  top: -8px;
  left: 8px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  font-family: 'Roboto-Bold';
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
  color: #0d1f2d;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  //백그라운드 하나 더 만들고 쉐도우 없애기

  &:hover {
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const WhiteBoxBlock = styled.div`
  width: 100%;
  display: block;
`;

const WhiteBox1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 760px) {
    height: 130px;
  }
`;

const WhiteBox2 = styled.div`
  width: 100%;
  height: 255px;
  background-color: #f4f4f4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 760px) {
    height: 215px;
  }
`;

const WhiteBox3 = styled.div`
  width: 100%;
  height: 330px;
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 760px) {
    height: 280px;
    margin-bottom: 38px;
  }
`;
const IconBlock = styled.div`
  display: flex;
  margin-bottom: 6px;
  justify-content: left;
  align-items: center;
`;

const DiscordIcon = styled.div`
  width: 37px;
  height: 37px;
  background-image: url(image/discord.png);
  background-size: 37px;
  margin-right: 5px;

  @media (max-width: 1024px) {
    width: 25px;
    height: 25px;
    background-size: 25px;
  }
`;

const DiscordName = styled.div`
  color: #0d1f2d;
  font-family: 'Roboto-Bold';
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

const DiscordText = styled.div`
  color: #0d1f2d;
  font-family: 'Roboto-Regular';
  font-size: 13px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 760px) {
    font-size: 11px;
  }
`;

export default ConnectBanner;
