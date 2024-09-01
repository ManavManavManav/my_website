import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 0 20px;
  background-color: black;
  color: white;
  font-family: 'Courier New', Courier, monospace;
`;

const Greeting = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const Name = styled.h2`
  font-size: 3rem;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const SayHiButton = styled.a`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  border: 2px solid white;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const languages = ["bonjour.", "hola.", "hallo.", "ciao.", "こんにちは.", "안녕하세요.", "مرحبا.", "γειά.", "привет.", "hello."];

const HomePage = () => {
  const [greeting, setGreeting] = useState(languages[0]);

  useEffect(() => {
    const changeLanguage = () => {
      const currentIndex = languages.indexOf(greeting);
      const nextIndex = (currentIndex + 1) % languages.length;
      setGreeting(languages[nextIndex]);
    };

    const intervalId = setInterval(changeLanguage, 2000); // Change language every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [greeting]);

  return (
    <HomePageContainer>
      <Greeting>{greeting}</Greeting>
      <Name>i'm manav gohil.</Name>
      <Description>
       I'm an engineer working at Lockheed Martin. My passion is to create emotional experiences at the intersection of technology, design, and AI.
      </Description>
      <SayHiButton href="mailto:manavschhoolmac@gmail.com?subject=Hello%20Manav">➔ say hi</SayHiButton>
    </HomePageContainer>
  );
};

export default HomePage;
