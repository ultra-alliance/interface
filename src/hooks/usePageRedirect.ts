import { tValidInput } from '@ultra-alliance/ultra-sdk';
import { useRouter } from 'next/router';

enum PagePaths {
  HOME = '/',
  ACCOUNT = '/accounts',
  UNIQS = '/uniqs',
}

interface RedirectFunctions {
  goToHome: () => void;
  goToAccount: (accountID: string) => void;
  goToUniq: (uniqId: tValidInput) => void;
  // Add more functions as needed
}

const usePageRedirect = (): RedirectFunctions => {
  const router = useRouter();

  const goToHome = () => {
    router.push(PagePaths.HOME);
  };

  const goToAccount = (accountID: string) => {
    router.push(`${PagePaths.ACCOUNT}/${accountID}`);
  };

  const goToUniq = (uniqId: tValidInput) => {
    router.push(`${PagePaths.UNIQS}/${uniqId}`);
  };

  // Add more functions as needed

  return {
    goToHome,
    goToAccount,
    goToUniq,
    // Return other functions here as needed
  };
};

export default usePageRedirect;
