import logo from '@assets/logo.svg';
import { AppStage, useAppStore } from '@state/app.state';
import { Button } from '@ui/button';
import { RegisterStage } from '../register-stage';
import { SpinnerOverlay } from '@ui/spinner-overlay';
import { Toaster } from '@ui/toaster';

function WelcomeStage({ changeStage }: { changeStage: (stage: AppStage) => void }) {
  const registerClickHandler = () => {
    changeStage(AppStage.register);
  };

  return <Button onClick={registerClickHandler}>Register</Button>;
}

export function App() {
  const stage: AppStage = useAppStore((state) => state.stage);
  const showSpinner: boolean = useAppStore((state) => state.showSpinner);
  const change = useAppStore((state) => state.changeStage);

  const Content = stage === AppStage.welcome ? WelcomeStage : RegisterStage;

  const changeStage = (stage: AppStage) => {
    document.startViewTransition(() => {
      change(stage);
    });
  };

  return (
    <div className="h-full">
      <div className="flex justify-center h-full items-center">
        <div className="bg-white p-3 rounded-md shadow-md relative overflow-hidden">
          <div className="flex justify-center">
            <img src={logo} width={100} className="mb-5" />
          </div>
          <h1 className="text-center">SweetHome</h1>
          <div className="mt-5 flex justify-center">
            <Content changeStage={changeStage} />
          </div>
          {showSpinner && <SpinnerOverlay />}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
