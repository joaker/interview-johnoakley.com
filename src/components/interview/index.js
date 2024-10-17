import React, { useState } from 'react';
import styles from './index.module.css';

const Interview = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const interviewData = [
    {
      question: "What is a microservice?",
      answer: "An independent, specialized service that performs a single task well",
    },
    {
      question: "How do microservices differ from monoliths?",
      answer: "In a microservice architecture, each microservice focuses on a single task, while a monolithic service will handle multiple tasks",
    },
    {
      question: "How would you design a microservice in NodeJS?",
      answer: "I would use express with the json and winston middleware, with DataDog APM for distributed tracing. I would dockerize the service and use kubernetes for management and service discovery. For inter-service communication, I would use orchestration to manage interactions and dependencies, API gateway to serve as access point and provide load balancing and routing, and implement OAuth for secure sessions management.",
    },
    {
      question: "Why use an API gateway?",
      answer: "An API Gateway provides a single interface to the microservice architecture, and allows for load balancing and routing.",
    },
    {
      question: "How would you secure inter-service communication?",
      answer: "Implement SSL; use hash tokens for credentials; and implement OAuth.",
    },
    {
      question: "What role does logging play in a microservice architecture?",
      answer: "Logging allows for monitoring of application health and performance.",
    },
    {
      question: "How do you ensure microservice scalability?",
      answer: "Containerize with docker and manage with kubernetes.",
    },
    {
      question: "What is a service registry and why is it needed?",
      answer: "Service registries are just phone books for services - they track who’s available and where to find them.",
    }
  ];

  return (
    <div className={styles.interview}>
      {interviewData.map((interview, index) => (
        <div key={index} className={styles.item}>
          <div
            className={styles.question}
            onClick={() => toggleAnswer(index)}
            >
            <span className={styles.arrow}>{openIndex === index ? 'v' : '>'}</span>
            <span className={styles.questionLabel}>Q{index}:</span> {interview.question}
          </div>
          {openIndex === index && (
            <div className={styles.answer} >
                <div><span className={styles.answerLabel}>A{index}:</span></div>
                <div>{interview.answer}</div>
            </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Interview;
