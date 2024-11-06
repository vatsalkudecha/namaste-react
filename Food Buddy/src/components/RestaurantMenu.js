import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  //   console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
  };

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
  //   console.log(itemCards);

  return (
    <div className="">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h4>{avgRating} stars</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {" "}
            {items.card.info.name} - Rs. {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
