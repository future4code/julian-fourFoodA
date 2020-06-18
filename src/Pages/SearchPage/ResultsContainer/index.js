import React, { useState, useEffect } from "react";
import { ContainerResults } from "./style";
import RestaurantCard from "../RestaurantCard";

const ResultsContainer = (props) => {
  const [receivedList, setReceivedList] = useState(undefined);

  useEffect(() => {
    setReceivedList(props.restaurantList);
  }, [ props.restaurantList ]);

  return (
    <ContainerResults>
      {receivedList ? (
        receivedList.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })
      ) : (
        <p>Carregando...</p>
      )}
    </ContainerResults>
  );
};

export default ResultsContainer;
