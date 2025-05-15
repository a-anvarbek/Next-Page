import styled from "styled-components";
import Image from "../assets/imageLogo.png";
import Image2 from "../assets/imageLogo.png";
import Cash from "../assets/logo2.png";
import Coin from "../assets/logo1.png";
import Usd from "../assets/logo3.png";
import Man from "../assets/man.png";
import GrowthIcon from "../assets/improve.png";

// ---------- Styled Components ----------

const BigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  width: 1255px;
`;

const Header = styled.header`
  width: 100%;
  background-color: #11ccf5;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  margin-left: 655px;
  display: flex;
  gap: 25px;
`;

const Text = styled.h1`
  font-size: 30px;
  color: black;
  cursor: pointer;
`;

const Text1 = styled.h1`
  margin-top: 80px;
  margin-right: 110px;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 280px;
  height: 70px;
  background-color: white;
  border-radius: 50px;
  color: black;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    transform: scale(1.05);
  }
`;

const Text2 = styled.h1`
  margin-top: 110px;
  margin-right: 110px;
  color: #11ccf5;
  font-size: 100px;
`;

const Text3 = styled.h1`
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

const Text4 = styled.h1`
  margin-top: 300px;
  color: #11ccf5;
  font-size: 100px;
`;

const Text5 = styled.h1`
  margin-top: 20px;
  color: #11ccf5;
  font-size: 100px;
`;

const Text6 = styled.h1`
  color: white;
  font-size: 30px;
`;

const Img = styled.img`
  margin-left: 20px;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const Imaje = styled.img`
  margin-top: 200px;
  width: 600px;
  height: 600px;
`;

const IContainer = styled.div`
  display: flex;
`;

// ---------- NEW: Services Section ----------

const ServicesSection = styled.div`
  margin-top: 100px;
  background-color: #000;
  padding: 80px 20px;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  color: #11ccf5;
  font-size: 48px;
  margin-bottom: 60px;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
`;

const IconBox = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid ${(props) => props.borderColor || "#fff"};
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  color: #11ccf5;
  font-size: 45px;
  margin-bottom: 10px;
`;


const GrowthSection = styled.div`
  background-color: #000;
  color: white;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  flex-wrap: wrap;
`;

const GrowthImage = styled.img`
  width:200px;
  height:280px;
  
`;

const GrowthText = styled.p`
  
  font-size: 50px;
  color: #11ccf5;
  font-weight: 600;
  line-height: 1.5;
`;


const ServiceDescription = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`;

const CashContainer = styled.img`
width:180px;
height:180px;

`;


const LeadersSection = styled.div`
  background-color: #000;
  padding: 100px 20px;
  text-align: center;
`;

const LeadersTitle = styled.h2`
  color: #11ccf5;
  font-size: 48px;
  margin-bottom: 60px;
`;

const LeadersGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`;

const LeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  color: white;
`;

const LeaderImage = styled.img`
  width: 170px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid #11ccf5;
  margin-bottom: 20px;
`;

const LeaderName = styled.h3`
  font-family: 'Gilroy', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const LeaderTitle = styled.p`
font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  margin-bottom: 10px;
`;

const LeaderDesc = styled.p`
font-family: 'Gilroy', sans-serif;
  font-size: 20px;
  line-height: 1.4;
`; 

// ---------- Home Component ----------

const Home = () => {
  return (
    <>
      <BigContainer>
        <Container>
          <Header>
            <Img src={Image} alt="" />
            <Text>Next Page</Text>

            <TextContainer>
              <Text>Our Socials</Text>
              <Text>Our Services</Text>
            </TextContainer>
          </Header>

          <Text1>
            <Text2>
              Programing <br /> Developers
            </Text2>
            <Button>
              <Text3>Go to Our All Socials</Text3>
            </Button>
          </Text1>

          <IContainer>
            <Text4>
              About Our
              <Text5>Company</Text5>
              <Text6>
                <span>A team comprised of board certified</span>
                <br />
                <span>accountants, Manreka Accounting helps</span>
                <br />
                <span>you handle accounting problems in the</span>
                <br />
                <span>most accessible and convenient way.</span>
              </Text6>
            </Text4>

            <Imaje src={Image2} alt="" />
          </IContainer>

          {/* 💡 Our Services Section */}
          <ServicesSection>
            <ServicesTitle>Our Services</ServicesTitle>
            <ServicesGrid>
              <ServiceCard>
                <CashContainer src={Coin} alt=""  />
               
                <ServiceTitle>For Freelancers</ServiceTitle>
                <ServiceDescription>
                  Have a tax paying freelance <br />
                  career with our help
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                 <CashContainer src={Cash} alt=""  />
                <ServiceTitle>For Professionals</ServiceTitle>
                <ServiceDescription>
                  Be a law-abiding individual by <br />
                  filing your taxes properly with us
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
              <CashContainer src={Usd} alt=""  />
                <ServiceTitle>For Businesses</ServiceTitle>
                <ServiceDescription>
                  Get rid of your business’ <br />
                  accounting headaches with us
                </ServiceDescription>
              </ServiceCard>
            </ServicesGrid>
          </ServicesSection>

          <LeadersSection>
  <LeadersTitle>About Leaders</LeadersTitle>
  <LeadersGrid>
    <LeaderCard>
      <LeaderImage src={Man} alt="Asadbek Gulomov" />
      <LeaderName>Asadbek Gulomov</LeaderName>
      <LeaderTitle>Disigner and coder</LeaderTitle>
      <LeaderDesc>
        Testimonials are short quotes from people who love your brand.
        <br />
        It’s a great way to convince customers to try your services.
      </LeaderDesc>
    </LeaderCard>

    <LeaderCard>
      <LeaderImage src={Man} alt="Anvarbek Ahadov" />
      <LeaderName>Anvarbek Ahadov</LeaderName>
      <LeaderTitle>FrontEnd developer</LeaderTitle>
      <LeaderDesc>
        Testimonials are short quotes from people who love your brand.
        <br />
        It’s a great way to convince customers to try your services.
      </LeaderDesc>
    </LeaderCard>

    <LeaderCard>
      <LeaderImage src={Man} alt="Fazliddin Alimardonovich" />
      <LeaderName>Fazliddin Alimardonovich</LeaderName>
      <LeaderTitle>Business Owner</LeaderTitle>
      <LeaderDesc>
        Testimonials are short quotes from people who love your brand.
        <br />
        It’s a great way to convince customers to try your services.
      </LeaderDesc>
    </LeaderCard>
  </LeadersGrid>
</LeadersSection>


<GrowthSection>
  <GrowthImage src={GrowthIcon} alt="Growth Icon" />
  <GrowthText>
   <span>Leave your account</span> <br /> <span> worries to us, so you</span> <br />
   <span>can focus on growing</span>  <br /> your business.
  </GrowthText>
</GrowthSection>


        </Container>
      </BigContainer>
    </>
  );
};

export default Home;
