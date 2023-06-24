import { useUltra } from '@ultra-alliance/react-ultra';
import { ultraColors } from '@ultra-alliance/uikit';

const useNetworkColor = () => {
  const { chain } = useUltra();

  function getColor() {
    switch (chain?.type) {
      case 'MAINNET':
        return ultraColors.royalAmethyst;
      case 'TESTNET':
        return ultraColors.pinkStaging;
      case 'LOCAL':
        return ultraColors.blueExperimental;
      default:
        return ultraColors.royalAmethyst;
    }
  }
  return {
    color: getColor(),
  };
};

export default useNetworkColor;
