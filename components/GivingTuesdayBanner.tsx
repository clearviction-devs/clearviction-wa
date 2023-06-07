import { Box, Button, Link, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import theme from "../styles/themes/theme";

interface GivingTuesdayBannerProps {
  onClose: () => void;
}
const GivingTuesdayBanner: React.FC<GivingTuesdayBannerProps> = ({
  onClose,
}) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const closeBanner = () => {
    setIsBannerVisible(false);
  };
  if (!isBannerVisible){
    return null
  }
const isTuesday = new Date().getDay()===2

if(!isTuesday){
    return null
}

  return (
    <ThemeProvider theme={theme}>
      <>
        <Box>
          <Box>
            <Link href="/donate" onClick={closeBanner}>
              <IoIosArrowForward />
            </Link>
          </Box>
        </Box>
        <Button>X</Button>
      </>
    </ThemeProvider>
  );
};

export default GivingTuesdayBanner;
