
import image from "./assets/students_learning.jpg";

import React, { useState } from 'react';
import styled from 'styled-components';

// Main container for styling
const Container = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: #fff; /* White background */
  color: #000; /* Black text color */
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #ff5722; /* Orange header */
  padding: 20px;
  color: white; /* White text */
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const Section = styled.div`
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #000; /* Black title */
`;

const Description = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  color: #000; /* Black text */
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #ff5722; /* Orange button */
  color: white; /* White text */
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const CourseItem = styled.div`
  background-color: #fff;
  border: 2px solid #ff5722; /* Orange border */
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const CourseTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #000; /* Black title */
`;

const CourseDescription = styled.p`
  font-size: 18px;
  color: #000; /* Black text */
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 60%;  /* Default size for larger screens */
  border-radius: 20px;
  margin: 20px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 80%;  /* Slightly smaller size for tablets */
  }

  @media (max-width: 480px) {
    width: 90%;  /* Best size for mobile devices */
  }
`;

const Popup = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 10;
  width: 80%;
  max-width: 800px;
`;

const IframeContainer = styled.iframe`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Container>
      <Header>Codingal</Header>

      {/* Section 1 - Introduction */}
      <Section>
        <Title>Online Coding & AI Classes for Kids and Teens</Title>
        <Description>
          Become the innovators of tomorrow with engaging live video lessons taught by world-class instructors.
        </Description>
        <Button onClick={() => setShowPopup(true)}>Talk to AI Assistant</Button>
      </Section>

      {/* Section 2 - Courses */}
      <Section>
        <Title>Our Bestselling Courses</Title>
        <CourseList>
          <CourseItem>
            <CourseTitle>Coding Grandmaster</CourseTitle>
            <CourseDescription>
              144 Lessons to master coding, build apps, games, and websites. Accredited by STEM.org
            </CourseDescription>
          </CourseItem>
          <CourseItem>
            <CourseTitle>Coding Prodigy</CourseTitle>
            <CourseDescription>
              96 Lessons designed for mastering coding skills, accredited by STEM.org
            </CourseDescription>
          </CourseItem>
          <CourseItem>
            <CourseTitle>Python Champion</CourseTitle>
            <CourseDescription>
              44 Lessons to master Python through interactive games, GUIs, and more.
            </CourseDescription>
          </CourseItem>
          <CourseItem>
            <CourseTitle>Game Development</CourseTitle>
            <CourseDescription>
              Learn to code games using Scratch and JavaScript in 36 lessons!
            </CourseDescription>
          </CourseItem>
          <CourseItem>
            <CourseTitle>Data Science for Kids</CourseTitle>
            <CourseDescription>
              Learn data science concepts and hands-on projects with Python and analytics skills.
            </CourseDescription>
          </CourseItem>
          <CourseItem>
            <CourseTitle>App Development</CourseTitle>
            <CourseDescription>
              50+ Activities to create AI-powered apps. Learn to build and share amazing apps.
            </CourseDescription>
          </CourseItem>
        </CourseList>
      </Section>

      {/* Image Section */}
      <Section>
        <Title>Children Learning to Code</Title>
        <ImageContainer>
          <StyledImage src={image} alt="Children learning to code" />
        </ImageContainer>
      </Section>

      {/* AI Assistant Popup */}
      <Popup show={showPopup}>
        <IframeContainer
          src="https://your-ai-assistant-url.com" // Replace with the URL for your AI iframe
          title="AI Assistant"
        ></IframeContainer>
        <Button onClick={() => setShowPopup(false)}>Close</Button>
      </Popup>
    </Container>
  );
}

export default App;
