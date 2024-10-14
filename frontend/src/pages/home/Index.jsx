import React, { useEffect, useState } from "react";
import HeroSlider from "./heroslider/HeroSlider"; //default import
import RedemptionMenu from "./redemptionmenu/RedemptionMenu";
import Welcome from "./welcome/Welcome";
import Rewards from "./rewards/Rewards";
import Vouchers from "./vouchers/Vouchers";
import ShopDeals from "./shopdeals/ShopDeals";
import UnlockRewards from "./unlockrewards/UnlockRewards";

const HOME_API = import.meta.env.VITE_HOME_API;

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [heroSlider, setHeroSlider] = useState([]);
  const [redemptionMenu, setRedemptionMenu] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [vouchers, setVouchers] = useState([]);
  const [shopDeals, setShopDeals] = useState([]);

  useEffect(() => {
    fetchHomepage();
  }, []);

  const fetchHomepage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(HOME_API);
      if (response.ok) {
        setIsLoading(false);
        const data = await response.json();
        setHeroSlider(data.homeapi.heroSlider);
        setRedemptionMenu(data.homeapi.redemptionMenu);
        setRewards(data.homeapi.rewards);
        setVouchers(data.homeapi.vouchers);
        setShopDeals(data.homeapi.shopdeals);
      } else {
        setIsLoading(false);
        setIsError(true);
        console.log("api error");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(`this is network ${error}`);
    }
  };

  return (
    <>
      <HeroSlider heroSlider={heroSlider} isLoading={isLoading} isError={isError} />
      <RedemptionMenu redemptionMenu={redemptionMenu} isLoading={isLoading} isError={isError} />
      <Welcome />
      <ShopDeals shopDeals={shopDeals} isLoading={isLoading} isError={isError} />
      <Rewards rewards={rewards} isLoading={isLoading} isError={isError} />
      <Vouchers vouchers={vouchers} isLoading={isLoading} isError={isError} />
      <UnlockRewards />
    </>
  );
};

export default Index;
