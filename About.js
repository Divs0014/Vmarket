import React from 'react';
import styled from 'styled-components';
import Veg from './img/elaine-casap-qgHGDbbSNm8-unsplash.jpg';

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #8F9779 30%, #f7f7f7 30%);
 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  margin-top: 18rem;
  padding: 0px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 800px;
  padding-bottom:10rem;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #000000;
  margin: 0;
  padding: 5px 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #f000000;
  padding: 10px;
  font-family: 'Special Elite', cursive;
`;

const Image = styled.img`
  max-width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #000000;
  line-height: 1.6;
  padding: 10px;
  text-align: left;
`;

const HeadingContainer = styled.div`
  position: absolute;
 ;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;


function AboutUs() {
  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>About Us</Heading>
        <Subtitle>Your Source for Fresh Vegetables And Fruits</Subtitle>
      </HeadingContainer>
      <ContentWrapper>
        <Image src={Veg} alt="Fruit Website Image" />
        <Paragraph>
          At HorizonHarvest, we are passionate about revolutionizing the way you buy and sell vegetables.
          Our vision is to create a seamless and efficient marketplace where farmers, suppliers, and consumers can connect, empowering everyone involved in the agricultural ecosystem.
        </Paragraph>
        <Paragraph>
          Our mission is to provide you with the finest selection of vegetables, sourced directly from local farms and orchards. We value sustainability and work closely with growers who share our commitment to ethical and eco-friendly practices.
        </Paragraph>
        <Paragraph>
          Whether you're looking for ripe and juicy berries, exotic tropical delights, or classic favorites, we have something for everyone. Our dedicated team ensures that every fruit we offer meets the highest quality standards, so you can enjoy the flavors of nature at their best.
        </Paragraph>
        <Paragraph>
          Join us in our journey to celebrate the beauty and taste of fruits. Explore our diverse range, make healthier choices, and savor the joy that comes with every bite. Experience freshness, experience FruitHarvest.

          hello

        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
}

export default AboutUs;
