import React from 'react';

interface StepsProps {
  currentStep: number,
  children: any
}

const Steps: React.FC<StepsProps> = ({currentStep, children}) => {
  return (
    <div>
    {React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        index: index,
        currentStep: currentStep
      });
    })}
　　</div>
  )
}

export default Steps;
