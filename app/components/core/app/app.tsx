import logo from '@assets/logo.svg';
import { Button } from '@ui/button';
import { AppStage, useAppStore } from './app.state';
import { ChevronLeft } from 'lucide-react';


function WelcomeStage() {
  const change = useAppStore((state) => state.changeStage);
  const registerClickHandler = () => {
    change(AppStage.register);
  };

  return (
    <Button onClick={registerClickHandler}>Register</Button>
  )
}

function RegisterStage() {
  const change = useAppStore((state) => state.changeStage);
  const goBackClickHandler = () => {
    change(AppStage.welcome);
  };

  return (
    <>
      <Button variant={'ghost'} onClick={goBackClickHandler}  >
        <ChevronLeft />
      </Button>
    </>
  )
}


export function App() {
  const stage: AppStage = useAppStore((state) => state.stage);

  const Content = stage === AppStage.welcome ? WelcomeStage : RegisterStage;

  return (
    <div className='flex justify-center h-full items-center'>
      <div className='bg-white p-3 rounded-md shadow-md'>
        <img src={logo} width={100} className='mb-5' />
        <h1 className='text-center'>SweetHome</h1>
        <div className='mt-5 flex justify-center'>
          <Content />
        </div>
      </div>
    </div>
  );
}
