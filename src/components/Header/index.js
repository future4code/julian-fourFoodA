import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { HeaderContainer, BarTitle, BarTitleContainer, BackIcon } from "./style";

const Header = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("");
  const [hasBackButton, setHasBackButton] = useState(false);

  useEffect(() => {
    switch (history.location.pathname) {
      case "/home":
        setCurrentPage("Ifuture");
        break;
      case "/cart":
        setCurrentPage("Meu carrinho");
        break;
      case "/profile/:profileId":
        setCurrentPage("Meu perfil");
        break;
      case "/restaurant/:restaurantId":
        setCurrentPage("Restaurante");
        setHasBackButton(true);
        break;
      case "/profile/:profileId/updateProfile":
        setCurrentPage("Editar");
        setHasBackButton(true);
        break;
      case "/profile/:profileId/updateAddress":
        setCurrentPage("Endereço");
        setHasBackButton(true);

        break;
      case "/search":
        setCurrentPage("Buscar");
        setHasBackButton(true);
        break;
      case "/":
      case "/signup":
      case "/addaddress":
        setCurrentPage(" ");
        setHasBackButton(true);
        break;
      case "/":
        setCurrentPage(" ");
        break;
      default:
        setCurrentPage('Página sem registro')
    }
  });

  return (
    <HeaderContainer>
      {hasBackButton ? <BackIcon onClick={() => history.goBack()}/> : <></>}
      <BarTitleContainer>
        <BarTitle>{currentPage}</BarTitle>
      </BarTitleContainer>
    </HeaderContainer>
  );
};

export default Header;
