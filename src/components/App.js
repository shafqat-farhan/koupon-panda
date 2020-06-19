import React from "react";
import Header from "./common/Header";
import DesktopBannerCarousel from "./home/DesktopBannerCarousel";
import MobileBannerCarousel from "./home/MobileBannerCarousel";
import DesktopCategoriesCarousel from "./home/DesktopCategoriesCarousel";
import MobileCategoriesCarousel from "./home/MobileCategoriesCarousel";
import DesktopVerticalCardsCarousel from "./home/DesktopVerticalCardsCarousel";
import DesktopDealsSlider from "./home/DesktopDealsSlider";
import DesktopOffersSlider from "./home/DesktopOffersSlider";
import DesktopBannerAd from "./home/DesktopBannerAd";
import DesktopPandaGuide from "./home/DesktopPandaGuide";
import DesktopFooter from "./common/DesktopFooter";
import MobileFooter from "./common/MobileFooter";
import MobilePandaGuide from "./home/MobilePandaGuide";
import MobileBannerAd from "./home/MobileBannerAd";
import MobileVerticalCardsCarousel from "./home/MobileVerticalCardsCarousel";
import MobileDealsSlider from "./home/MobileDealsSlider";
import MobileOffersSlider from "./home/MobileOffersSlider";

const App = () => {
  return (
    <>
      <Header />
      <DesktopBannerCarousel />
      <MobileBannerCarousel />
      <DesktopCategoriesCarousel />
      <MobileCategoriesCarousel />
      <DesktopVerticalCardsCarousel />
      <MobileVerticalCardsCarousel />
      <DesktopDealsSlider />
      <MobileDealsSlider />
      <DesktopOffersSlider />
      <MobileOffersSlider />
      <DesktopBannerAd />
      <MobileBannerAd />
      <DesktopPandaGuide />
      <MobilePandaGuide />
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default App;
