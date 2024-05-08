import React from "react";

const ControlledStep = ({ children, currentStep, handleChangeSteps }) => {
  // Extract the current step component based on the currentStep index
  const currentStepComponent = React.Children.toArray(children)[currentStep];

  // Prepare props to pass down to the child component
  const propsToPass = {
    currentStep,
    handleChangeSteps,
  };

  // Check if the currentStepComponent is a valid React element
  if (React.isValidElement(currentStepComponent)) {
    // Clone the currentStepComponent and pass propsToPass to it
    return React.cloneElement(currentStepComponent, propsToPass);
  }

  // If currentStepComponent is not a valid element, return it as is
  return currentStepComponent;
};

// Usage:
// <ControlledStep currentStep={0} handleChangeSteps={(newStep) => console.log(newStep)}>
//   <StepComponent1 />
//   <StepComponent2 />
//   <StepComponent3 />
// </ControlledStep>

export default ControlledStep;
