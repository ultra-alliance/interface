import { tValidInput } from '@ultra-alliance/ultra-sdk';
import { useRouter } from 'next/router';

enum PagePaths {
  HOME = '/',
  ACCOUNT = '/accounts',
  FACTORIES = '/factories',
  LISTED = '/listed',
  RAFFLES = '/raffles',
}

interface RedirectFunctions {
  goToHome: () => void;
  goToAccount: (accountID: string) => void;
  goToFactory: (factoryID: tValidInput) => void;
  goToFactories: () => void;
  gotToListed: () => void;
  goToRaffles: () => void;
  goToRaffle: (raffleID: tValidInput) => void;
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

  const goToFactory = (factoryID: tValidInput) => {
    router.push(`${PagePaths.FACTORIES}/${factoryID}`);
  };

  const goToFactories = () => {
    router.push(PagePaths.FACTORIES);
  };

  const gotToListed = () => {
    router.push(PagePaths.LISTED);
  };

  const goToRaffles = () => {
    router.push(PagePaths.RAFFLES);
  };

  const goToRaffle = (raffleID: tValidInput) => {
    router.push(`${PagePaths.RAFFLES}/${raffleID}`);
  };

  // Add more functions as needed

  return {
    goToHome,
    goToAccount,
    goToFactory,
    goToFactories,
    gotToListed,
    goToRaffles,
    goToRaffle,
    // Return other functions here as needed
  };
};

export default usePageRedirect;
