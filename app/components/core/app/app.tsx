import logo from '@assets/logo.svg';
import { AppStage, useAppStore } from '@state/app.state';
import { Button } from '@ui/button';
import { RegisterStage } from '../register-stage';

function WelcomeStage() {
  const change = useAppStore((state) => state.changeStage);
  const registerClickHandler = () => {
    change(AppStage.register);
  };

  return <Button onClick={registerClickHandler}>Register</Button>;
}

export function App() {
  const stage: AppStage = useAppStore((state) => state.stage);

  const Content = stage === AppStage.welcome ? WelcomeStage : RegisterStage;

  return (
    <div className="flex justify-center h-full items-center">
      <div className="bg-white p-3 rounded-md shadow-md">
        <div className="flex justify-center">
          <img src={logo} width={100} className="mb-5" />
        </div>
        <h1 className="text-center">SweetHome</h1>
        <div className="mt-5 flex justify-center">
          <Content />
        </div>
      </div>
    </div>
  );
}
