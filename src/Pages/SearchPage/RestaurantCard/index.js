import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Card, CardMedia } from '@material-ui/core';
import { RestCard, NomeRest, RestInfo } from './style';

const RestaurantCard = (props) => {

    const history = useHistory();

    const goToRestaurantPage = (e) =>{
        const restaurantId = e.currentTarget.getAttribute('data-key');

        history.push(`/restaurant/${restaurantId}`);
    }
    return(
        <RestCard data-key={props.restaurant.id} onClick={goToRestaurantPage}>
        <CardMedia component='img' src={props.restaurant.logoUrl} height='120'/>
        <NomeRest>{props.restaurant.name}</NomeRest>
        <RestInfo>
        <span>{props.restaurant.deliveryTime} min</span>
        <span>Frete R${props.restaurant.shipping},00</span>
        </RestInfo>
        </RestCard>
    )
}

export default RestaurantCard;