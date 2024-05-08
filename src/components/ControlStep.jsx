import React from "react";
import { motion } from "framer-motion";

const ControlledStep = ({ children, currentStep, handleChangeSteps }) => {
  // Extract the current step component based on the currentStep index
  const currentStepComponent = React.Children.toArray(children)[currentStep];

  // Define animation variants for entering and exiting steps
  const stepVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      key={currentStep}
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Render the current step component with passed props */}
      {React.isValidElement(currentStepComponent) &&
        React.cloneElement(currentStepComponent, {
          currentStep,
          handleChangeSteps,
        })}
    </motion.div>
  );
};

export default ControlledStep;
