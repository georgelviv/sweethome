import { SERVER_URL } from '@constants';
import { LoginForm, ServerResponseRegisterStart } from '@models';
import { toast } from 'sonner';
import axios from 'axios';

export async function registerUserWithPasskey(loginForm: LoginForm): Promise<boolean> {
  const url: string = `${SERVER_URL}/register/start`;
  try {
    const response = await axios.post<ServerResponseRegisterStart>(url, loginForm);
    const data: ServerResponseRegisterStart = response.data;
    if (!data.success) {
      toast.error(data.errorMsg);
      return false;
    }
    toast.success('Success!');

    const encodedChallenge: string = data.data?.challenge!;
    console.log(atob(encodedChallenge));
    return true;
  } catch (e) {
    toast.error('Something went wrong');
    console.error('error', e);
    return false;
  }
  // https://webauthn.guide/
  // const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
  //   challenge: {},
  //   rp: {
  //     name: 'SweetHome',
  //     id: 'localhost'
  //   },
  //   user: {
  //       id: Uint8Array.from(
  //           "UZSL85T9AFC", c => c.charCodeAt(0)),
  //       name: "lee@webauthn.guide",
  //       displayName: "Lee",
  //   },
  //   pubKeyCredParams: [{
  //     alg: -7, type: 'public-key'
  //   }],
  //   authenticatorSelection: {
  //       authenticatorAttachment: 'platform',
  //   },
  //   timeout: 60000
  // };
  // const credential = await navigator.credentials.create({
  //   publicKey: publicKeyCredentialCreationOptions
  // });

  console.log(loginForm);
}
