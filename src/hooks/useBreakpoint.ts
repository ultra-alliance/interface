import { useMediaQuery, type Theme } from "@mui/material";

const useBreakPoint = () => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return { isXs, isSm, isMd, isLg };
};

export default useBreakPoint;
