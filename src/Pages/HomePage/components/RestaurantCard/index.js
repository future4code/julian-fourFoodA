import React, { useState } from 'react';
import { Card, CardMedia } from '@material-ui/core'
import { RestCard, NomeRest, RestInfo } from './style';

const RestaurantCard = (props) => {

    return(
        <RestCard>
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