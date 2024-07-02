import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #000;  // Texto negro para modo claro
  padding: 100px 60px;  // Increased padding
  min-height: 100vh;
  background-color: #f5f5f5;  // Fondo claro
`;

const Title = styled.h1`
  text-align: left;
  font-size: 5rem;  // Aumentar el tamaño de la fuente
  margin-bottom: 70px;
  margin-top: 5%; 
  color: #333;  // Color del título en modo claro
`;

const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;  // Increased gap between columns
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;  // Increased gap between FAQ items
  width: 100%;
`;

const FaqItem = styled.div`
  background-color: #fff;  // Fondo blanco para las FAQ
  border: 1px solid #ccc;  // Borde gris claro
  padding: 30px;  // Aumentar padding
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Añadir sombra para destacar

  &:hover {
    background-color: #f0f0f0;  // Fondo gris claro al hacer hover
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;  // Aumentar tamaño de la fuente de las preguntas
`;

const Answer = styled.div`
  margin-top: 10px;
  font-size: 1.4rem;  // Aumentar tamaño de la fuente de las respuestas
  line-height: 1.5;
  display: ${props => (props.show ? 'block' : 'none')};
  font-weight: lighter;
  color: #555;  // Color de las respuestas en modo claro
`;

const Icon = styled.span`
  font-size: 1.8rem;  // Aumentar tamaño del icono
  transition: transform 0.3s ease;
  transform: ${props => (props.show ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const faqs = [
  {
    question: 'What type of photography do you specialize in?',
    answer: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.',
  },
  {
    question: 'How can I book a photography session with you?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'What equipment do you use for your photography?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'Can I request a specific location for a photoshoot?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'What is your editing process like?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'Are digital files included in the package?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  {
    question: 'Do you offer prints of your photographs?',
    answer: 'Yes, prints are available for purchase. Explore the \'Prints\' section for more details on sizes and pricing.',
  },
  {
    question: 'How long does it take to receive the edited photos?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftColumnFaqs = faqs.slice(0, 4);
  const rightColumnFaqs = faqs.slice(4);

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <FaqContainer>
        <Column>
          {leftColumnFaqs.map((faq, index) => (
            <FaqItem key={index} onClick={() => handleToggle(index)}>
              <Question>
                {faq.question}
                <Icon show={activeIndex === index}>&#9660;</Icon>
              </Question>
              <Answer show={activeIndex === index}>{faq.answer}</Answer>
            </FaqItem>
          ))}
        </Column>
        <Column>
          {rightColumnFaqs.map((faq, index) => (
            <FaqItem key={index + 4} onClick={() => handleToggle(index + 4)}>
              <Question>
                {faq.question}
                <Icon show={activeIndex === index + 4}>&#9660;</Icon>
              </Question>
              <Answer show={activeIndex === index + 4}>{faq.answer}</Answer>
            </FaqItem>
          ))}
        </Column>
      </FaqContainer>
    </Container>
  );
};

export default FAQ;
