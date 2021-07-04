import React, { useState } from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import Steps from './components/Steper/Steps';
import Step from './components/Steper/Step';


function App() {
  let [step, setStep] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} mode='vertical' onSelect={(index) => {alert(index)}}>
          <MenuItem index={0}>
            cool link 1
          </MenuItem>
          <MenuItem index={1}>
            cool link 2
          </MenuItem>
          <MenuItem index={2}>
            cool link 3
          </MenuItem>
        </Menu>

        <Button autoFocus>Hello</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Disabled Link</Button>
        
        <Steps currentStep={step}>
          <Step />
          <Step />
          <Step />
        </Steps>
        <Button onClick={() => setStep(++step)}>Next</Button>
       
      </header>
    </div>
  );
}

export default App;
