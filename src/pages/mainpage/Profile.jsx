import styled from 'styled-components';
import './../../fonts/fonts.css';

const Profile = () => {
  return (
    <>
      <BackgroundWrap>
        <Background />
        <Wrap1>
          <ProfileText>
            Creating Orchestral Music has <br />
            <OrangeSpanText>never been easier</OrangeSpanText>
          </ProfileText>
          <SmallText>
            If we can do it, <SmallSpanText>so can you</SmallSpanText>.
            Seriously.
          </SmallText>
          <FotoTextWrap>
            <ProfilFoto src='image/profile.jpg' alt='profile' />
            <BubbleTextBox>
              <BubbleText>
                Hey! My name is Kevin 👋 and I'm the creator of Become A Pro
                Composer.
              </BubbleText>
              <BubbleText>
                Orchestral music production can feel overwhelming - I know, I've
                been there. There's so mush to learn, so many skills to master.
              </BubbleText>
              <BubbleText>
                That's why I made Become A Pro Composer. A learning hub where
                you grow as a composer and write better music.
              </BubbleText>
            </BubbleTextBox>
          </FotoTextWrap>
        </Wrap1>

        <Wrap2>
          <Wrap2Title>
            Time to turn Your Music Dreams into{' '}
            <OrangeSpanText>Reality</OrangeSpanText>
          </Wrap2Title>
          <Wrap2Text>
            Become A Pro Composers has been built for composers ( and those who
            want to become one! )<br />
            around the world who seek to write music for :
          </Wrap2Text>
          <WhiteBoxBlock>
            <WhiteBox>
              <WhiteBoxCircle>
                <CircleIcon1 src='image/soundtrack.png' />
              </WhiteBoxCircle>
              <WhiteBoxTitle>Film & TV</WhiteBoxTitle>
              <WhiteBoxText>
                Create atmosphare and
                <br />
                tell a story with sound.
              </WhiteBoxText>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxCircle>
                <CircleIcon src='image/console.png' />
              </WhiteBoxCircle>
              <WhiteBoxTitle>Video Game</WhiteBoxTitle>
              <WhiteBoxText>
                Build and explore
                <br />
                entire worlds of music.
              </WhiteBoxText>
            </WhiteBox>
            <WhiteBox>
              <WhiteBoxCircle>
                <CircleIcon src='image/role-model.png' />
              </WhiteBoxCircle>
              <WhiteBoxTitle>Epic Music (Content ID)</WhiteBoxTitle>
              <WhiteBoxText>
                Give people shivers
                <br />
                with larger-than-life productions.
              </WhiteBoxText>
            </WhiteBox>
          </WhiteBoxBlock>
        </Wrap2>
      </BackgroundWrap>

      <Wrap3>
        <ReadyBanner src='image/ready-banner.png' />
        <ReadyTextBlock>
          <ReadyText1>YOUR COMPOSER JOURNEY</ReadyText1>
          <ReadyText2>Ready to take off 🚀</ReadyText2>
          <ReadyText3>
            It's not rocket science! Become A Pro Composer helps you discover
            your musical
            <br />
            strength and bring your your music ti life with ease
          </ReadyText3>
          <ReadyText4>
            On any DAW. <span>No experience required.</span>
          </ReadyText4>
        </ReadyTextBlock>
      </Wrap3>
    </>
  );
};

const BackgroundWrap = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

const Background = styled.div`
  width: 1000px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -10;
  background-image: url('image/profile-background.png');

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Wrap1 = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 0px;
    padding: 20px 0 0 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const ProfileText = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  font-family: 'Exo2-Bold';
  font-weight: 900;
  font-size: 50px;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 37px;
    margin-bottom: 20px;
  }
`;

const OrangeSpanText = styled.span`
  color: #fe5d26;
`;

const SmallText = styled.div`
  text-align: center;
  margin: 0;
  font-family: 'Exo2-Light';
  font-size: 20px;
  color: #414141;

  @media (max-width: 1024px) {
    font-size: 23px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SmallSpanText = styled.span`
  font-family: 'Exo2-SemiBold';
`;

const FotoTextWrap = styled.div`
  width: 95%;
  height: 330px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
    align-items: flex-start;
    margin: 60px auto;
    height: 360px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 640px;
  }
`;

const ProfilFoto = styled.img`
  display: inline-flex;
  height: 250px;

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 220px;
    border-radius: 30px;
  }
`;

const BubbleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  margin-left: 30px;

  @media (max-width: 1024px) {
    height: 330px;
  }

  @media (max-width: 768px) {
    height: 400px;
    margin: 20px 25px 30px 25px;
  }
`;

const BubbleText = styled.div`
  background-color: #fe5d26;
  color: white;
  font-family: 'Exo2-Semibold';
  font-size: 15px;
  line-height: 23px;
  padding: 11px 35px;
  border-radius: 25px;
  border-top-left-radius: 0;

  @media (max-width: 1024px) {
    font-size: 17px;
    padding: 20px 35px;
  }

  @media (max-width: 768px) {
    margin: 10px auto;
    width: 80%;
    font-size: 15px;
    line-height: 25px;
    padding: 15px 20px;
    border-radius: 25px;
    border-top-left-radius: 0;
  }
`;

const Wrap2 = styled.div`
  width: 1000px;
  margin: 0 auto;
  justify-content: center;
  display: block;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Wrap2Title = styled.div`
  font-family: 'Exo2-Bold';
  font-size: 40px;
  text-align: center;
  margin-bottom: 47px;
  margin-top: 30px;

  @media (max-width: 1024px) {
    font-size: 34px;
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Wrap2Text = styled.div`
  font-family: 'Exo2-Light';
  color: #4f4f4f;
  text-align: center;
  font-size: 22px;
  line-height: 35px;
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 50px;
  }
`;

const WhiteBoxBlock = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    height: 300px;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 1000px;
    display: block;
  }
`;

const WhiteBox = styled.div`
  width: 31%;
  height: 320px;
  background-color: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 260px;
    width: 32%;
  }

  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
    width: 280px;
    height: 280px;
    padding-bottom: 10px;
  }
`;

const WhiteBoxCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffded2;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
  }
`;

const CircleIcon = styled.img`
  width: auto;
  height: 60px;

  @media (max-width: 1024px) {
    width: auto;
    height: 60px;
  }

  @media (max-width: 768px) {
  }
`;

const CircleIcon1 = styled.img`
  margin-top: 10px;
  width: auto;
  height: 55px;

  @media (max-width: 1024px) {
    width: auto;
    height: 55px;
  }

  @media (max-width: 768px) {
  }
`;

const WhiteBoxTitle = styled.div`
  font-family: 'Exo2-SemiBold';
  color: #fe5d26;
  font-size: 22px;
  margin: 0 auto;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 1024px) {
    width: auto;
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: -1px;
  }

  @media (max-width: 768px) {
  }
`;

const WhiteBoxText = styled.div`
  font-family: 'Exo2-Light';
  color: #5a5a5a;
  font-size: 15px;
  text-align: center;
  line-height: 25px;

  @media (max-width: 1024px) {
    line-height: 25px;
    font-size: 15px;
    letter-spacing: -0.5px;
  }

  @media (max-width: 768px) {
  }
`;

const Wrap3 = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
  margin: 60px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 500px;
    margin: 30px 0 10px 0;
  }

  @media (max-width: 768px) {
    height: 450px;
    margin: 0;
  }
`;

const ReadyBanner = styled.img`
  width: 2300px;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: -10;

  @media (max-width: 1024px) {
    width: 1900px;
  }
`;

const ReadyTextBlock = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ReadyText1 = styled.div`
  font-family: 'Exo2-SemiBold';
  color: #fe5d26;
  font-size: 17px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ReadyText2 = styled.div`
  font-family: 'Exo2-SemiBold';
  color: white;
  font-size: 45px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ReadyText3 = styled.div`
  font-family: 'Exo2-Light';
  color: #f4f4f4;
  text-align: center;
  font-size: 17px;
  line-height: 28px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

const ReadyText4 = styled.div`
  font-family: 'Exo2-Light';
  color: #f4f4f4;
  font-size: 19px;

  span {
    color: #fe5d26;
  }

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default Profile;
