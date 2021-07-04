import React from 'react';

import './_style.scss'

interface StepProps {
  index?: number;
  currentStep?: number;
}

const Step: React.FC<StepProps> = (props) => {
  const { index = 0, currentStep = 0 } = props;
  return <div className={`indicator${currentStep >= index + 1 ? ' active' : ''}`} />;
}

Step.defaultProps = {
  index: 0,
  currentStep: 0
}

export default Step;