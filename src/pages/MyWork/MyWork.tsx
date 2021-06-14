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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MyWork = React.forwardRef((props: any, ref: any): JSX.Element => {
  return (
    <HomePageSection ref={ref} className={props.className}>
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
            <a href="https://www.instarem.com/en-in/" target="_blank" rel="noreferrer">
              Nium/Instarem
            </a>
          </ProductTitle>
          <Description>
            At Nium I am currently developing the Instarem portal for Small and Medium Businesses
            cross border transactions. I am developing a low latency, high throughput application
            that can process several transactions at once. I am also being tasked with adding new
            features to the existing applications.
          </Description>
          <StyledLink href="https://www.instarem.com/en-in/" target="_blank" rel="noreferrer">
            Visit Site
          </StyledLink>
        </ProductDescription>
        <ProductImage>
          <div>
            <div></div>
            <img src={instarem} alt="instarem homepage" />
          </div>
        </ProductImage>
      </ProductDescriptionDiv>
      <ProductDescriptionDiv>
        <ProductDescription>
          <ProductTitle>
            <a href="https://monkeycap.com/" target="_blank" rel="noreferrer">
              Monkeycap.com
            </a>
          </ProductTitle>
          <Description>
            Monkeycap.com is an online Insurance portal where you can buy Car/Health/Travel
            insurances. I built the entire flow for buying an insurance policy, right from entering
            your car number to interfacing with the insurance company to purchase the policy.
          </Description>
          <StyledLink href="https://monkeycap.com/" target="_blank" rel="noreferrer">
            Visit Site
          </StyledLink>
        </ProductDescription>
        <ProductImage>
          <div>
            <div></div>
            <img src={monkeycap} alt="monkeycap.com homepage" />
          </div>
        </ProductImage>
      </ProductDescriptionDiv>
      <ProductDescriptionDiv>
        <ProductDescription>
          <ProductTitle>
            <a href="https://doecards.com/" target="_blank" rel="noreferrer">
              DOE Cards
            </a>
          </ProductTitle>
          <Description>
            Doe Cards is an NFC card based payment system provider. I wrote the frontend apps and
            some of the backend Java based microservices for this product. I developed multiple
            frontend apps for toll, parking payments for consumer and business users.
          </Description>
          <StyledLink href="https://doecards.com/" target="_blank" rel="noreferrer">
            Visit Site
          </StyledLink>
        </ProductDescription>
        <ProductImage>
          <div>
            <div></div>
            <img src={doecards} alt="doecards.com home page" />
          </div>
        </ProductImage>
      </ProductDescriptionDiv>
    </HomePageSection>
  )
})
