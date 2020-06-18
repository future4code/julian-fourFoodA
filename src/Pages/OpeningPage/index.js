import React from 'react';
import { useHistory } from 'react-router';
import Logo from '../../img/logo-future-eats.png';
import { OpeningContainer } from './style'

const OpeningPage = () =>{
    
    const history = useHistory();

    let goToLoginPage = setTimeout(function() {
        if(window.localStorage.getItem('token')){
            history.push('/home')
        }else{
            history.push('/login');    
        }
    }, 5000)

    return(
        <OpeningContainer>
            <img src={Logo}/>
        </OpeningContainer>
    )
}

export default OpeningPage;