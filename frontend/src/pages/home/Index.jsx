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
      const response = await fetch(HOME_API);
      if (response.ok) {
        const data = await response.json();
        setHeroSlider(data.homeapi.heroSlider);
        setRedemptionMenu(data.homeapi.redemptionMenu);
        setRewards(data.homeapi.rewards);
        setVouchers(data.homeapi.vouchers);
        setShopDeals(data.homeapi.shopdeals);
      } else {
        console.log("api error");
      }
    } catch (error) {
      console.log(`this is network ${error}`);
    }
  };

  return (
    <>
      <HeroSlider heroSlider={heroSlider} />
      <RedemptionMenu redemptionMenu={redemptionMenu} />
      <Welcome />
      <ShopDeals shopDeals={shopDeals} />
      <Rewards rewards={rewards} />
      <Vouchers vouchers={vouchers} />
      <UnlockRewards />
    </>
  );
};

export default Index;
