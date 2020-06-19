import React, { useState, useEffect } from "react";
import { ContainerRestaurantes } from "./style";
import RestaurantCard from "../RestaurantCard";

const CardContainer = (props) => {
  const [receivedList, setReceivedList] = useState(undefined);

  useEffect(() => {
    setReceivedList(props.restaurantList);
  }, [ props.restaurantList ]);

  return (
    <ContainerRestaurantes>
      {receivedList ? (
        receivedList.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })
      ) : (
        <p>Carregando...</p>
      )}
    </ContainerRestaurantes>
  );
};

export default CardContainer;
