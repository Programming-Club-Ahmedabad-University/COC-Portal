"use client"

import React from "react";
import styles from "./Stepper.module.css";
import UploadDetails from "@/pages/auction/uploadDetails";

import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";

const steps = [
  { title: "Upload file", description: "info" },
  { title: "Role designation", description: "provide range" },
  { title: "Third", description: "extra" },
];

const stepComponents = [
  <UploadDetails />,
  <UploadDetails />,
  <UploadDetails />,
];

function StepperCard() {
  const [index, setIndex] = useState<number>(0);
  const total = steps.length;

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (index >= total - 1) return;
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (index <= 0) return;
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
      <Stepper index={index}>
        {steps.map((step, stepIndex) => (
          <Step key={stepIndex}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      {index < stepComponents.length && stepComponents[index]}

      <div>
        <Button
          style={{ position: "absolute", bottom: "5px", left: "5px" }}
          onClick={(e) => handleBack(e)}
          disabled={index === 0}
        >
          Back
        </Button>

        <Button
          style={{ position: "absolute", bottom: "5px", right: "5px" }}
          onClick={(e) => handleNext(e)}
          disabled={index >= total - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default StepperCard;