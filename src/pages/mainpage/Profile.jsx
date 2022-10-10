import styled from 'styled-components';
import './../../fonts/fonts.css';

const Profile = () => {
  return (
    <>
      <Wrap1>
        <ProfileText>
          Creating Orchestral Music has <br />
          <OrangeSpanText>never been easier</OrangeSpanText>
        </ProfileText>
        <SmallText>
          If we can do it, <SmallSpanText>so can you</SmallSpanText>. Seriously.
        </SmallText>
        <FotoTextWrap>
          <ProfilFoto src='image/profile.jpg' />
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
              That's why I made Become A Pro Composer. A learning hub where you
              grow as a composer and write better music.
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
    </>
  );
};

const Wrap1 = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 20px 0;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const ProfileText = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Exo2-Bold';
  font-weight: 900;
  font-size: 60px;
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
  font-size: 23px;
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
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
    align-items: flex-start;
    margin: 60px auto;
    height: 500px;
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
  height: 350px;

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 230px;
  }
`;

const BubbleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  margin-left: 30px;

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 345px;
    margin: 30px 25px 30px 25px;
  }
`;

const BubbleText = styled.div`
  background-color: #fe5d26;
  color: white;
  font-family: 'Exo2-Regular';
  font-size: 20px;
  line-height: 27px;
  padding: 18px 35px;
  border-radius: 30px;
  border-top-left-radius: 0;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 25px;
    padding: 15px 20px;
    border-radius: 25px;
    border-top-left-radius: 0;
  }
`;

const Wrap2 = styled.div`
  width: 1100px;
  margin: 0 auto;
  justify-content: center;
  display: block;

  @media (max-width: 1024px) {
    width: 92%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Wrap2Title = styled.div`
  font-family: 'Exo2-Bold';
  font-size: 50px;
  text-align: center;
  margin-bottom: 47px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Wrap2Text = styled.div`
  font-family: 'Exo2-Light';
  color: #414141;
  text-align: center;
  font-size: 25px;
  line-height: 35px;
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 50px;
  }
`;

const WhiteBoxBlock = styled.div`
  width: 100%;
  height: 370px;
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
  width: 32%;
  height: 370px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
    width: 90%;
    height: 300px;
  }
`;

const WhiteBoxCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ffded2;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 110px;
    height: 110px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
  }
`;

const CircleIcon = styled.img`
  width: auto;
  height: 80px;

  @media (max-width: 1024px) {
    width: auto;
    height: 70px;
  }

  @media (max-width: 768px) {
  }
`;

const CircleIcon1 = styled.img`
  margin-top: 10px;
  width: auto;
  height: 80px;

  @media (max-width: 1024px) {
    width: auto;
    height: 70px;
  }

  @media (max-width: 768px) {
  }
`;

const WhiteBoxTitle = styled.div`
  font-family: 'Exo2-SemiBold';
  color: #fe5d26;
  font-size: 28px;
  margin: 0 auto;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 1024px) {
    width: auto;
    margin-bottom: 15px;
    font-size: 22px;
    letter-spacing: -1px;
  }

  @media (max-width: 768px) {
  }
`;

const WhiteBoxText = styled.div`
  font-family: 'Exo2-Light';
  color: #5a5a5a;
  font-size: 20px;
  text-align: center;
  line-height: 32px;

  @media (max-width: 1024px) {
    line-height: 25px;
    font-size: 15px;
    letter-spacing: -0.5px;
  }

  @media (max-width: 768px) {
  }
`;

export default Profile;
