import React from 'react';
import { BeatLoader } from 'react-spinners';
import { LoadingContainer } from './style'


const FullPageLoading = () => {

    return(
        <LoadingContainer>
            <BeatLoader color='#e8222e'/>
        </LoadingContainer>
    )
}

export default FullPageLoading;