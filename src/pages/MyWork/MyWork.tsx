import React from 'react'

import {
  HomePageSection,
  Greeting,
  JobDescription,
  StyledP,
  StyledH1,
  StyledHr,
  ProductDescriptionDiv,
  ProductDescription,
  ProductImage,
  ProductTitle,
  Description,
  StyledLink,
  // StyledDiv,
} from './styles'

import instarem from 'assets/img/instarem.webp'
import monkeycap from 'assets/img/monkeycap.webp'
import doecards from 'assets/img/doecards.webp'

export const MyWork = (): JSX.Element => {
  return (
    <HomePageSection>
      <StyledH1>
        <Greeting>My Work</Greeting>
        <JobDescription>Products that I have built</JobDescription>
      </StyledH1>
      <StyledP>
        I have worked on a variety of products and services over the past 6 years of my career. I
        have written several products from the first line of code and I have a ton of experience in
        making responsive web applications.
      </StyledP>
      <StyledHr />
      <ProductDescriptionDiv>
        <ProductDescription>
          <ProductTitle>
            <a>Nium</a>
          </ProductTitle>
          <Description>
            At Nium I am currently developing the Instarem portal for Small and Medium Businesses
            cross border transactions. I am developing a low latency, high throughput application
            that can process several transactions at once. I am also being tasked with adding new
            features to the existing applications.
          </Description>
          <StyledLink>Learn More</StyledLink>
        </ProductDescription>
        <ProductImage>
          <div>
            <div></div>
            <img src={instarem} />
          </div>
        </ProductImage>
      </ProductDescriptionDiv>
      <ProductDescriptionDiv>
        <ProductDescription>
          <ProductTitle>
            <a>Monkeycap.com</a>
          </ProductTitle>
          <Description>
            Monkeycap.com is an online Insurance portal where you can buy Car/Health/Travel
            insurances. I built the entire flow for buying an insurance policy, right from entering
            your car number to interfacing with the insurance company to purchase the policy.
          </Description>
          <StyledLink>Learn More</StyledLink>
        </ProductDescription>
        <ProductImage>
          <div>
            <div></div>
            <img src={monkeycap} />
          </div>
        </ProductImage>
      </ProductDescriptionDiv>
      <ProductDescriptionDiv>
        <ProductDescription>
          <ProductTitle>
            <a>DOE Cards</a>
          </ProductTitle>
          <Description>
            Doe Cards is an NFC card based payment system provider. I wrote the frontend apps and
            some of the backend Java based microservices for this product. I developed multiple
            frontend apps for toll, parking payments for consumer and business users.
          </Description>
          <StyledLink>Learn More</StyledLink>
        </ProductDescription>
        <ProductImage>
          <div>
            <div></div>
            <img src={doecards} />
          </div>
        </ProductImage>
      </ProductDescriptionDiv>
    </HomePageSection>
  )
}
