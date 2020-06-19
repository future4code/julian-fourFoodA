import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {} from "../../styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResultsContainer from "./ResultsContainer";
import usePrivatePage from "../../hooks/usePrivatePage";
import {} from "../../requests";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import {
  SearchField,
  SearchContainer,
  SearchPageContainer,
  EmptySearch,
} from "./style";
import axios from "axios";

const SearchPage = () => {
  const [restaurantList, setRestaurantList] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const baseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA";

  const token = window.localStorage.getItem("token");

  const getRestaurants = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurantList(res.data.restaurants);
        console.log(res.data.restaurants);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  let filteredList = undefined;

  if(searchValue !== ''){
    filteredList = restaurantList.filter(restaurant =>{
      return restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  return (
    <SearchPageContainer>
      <Header />
      <SearchContainer>
        <SearchField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Restaurante"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon data-testid="Search"/>
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>
      {(Array.isArray(filteredList) && !filteredList.length) ? <EmptySearch>Não encontramos :(</EmptySearch> : <></>}
      {searchValue === "" ? (
        <EmptySearch>Busque por nome de restaurante</EmptySearch>
      ) : (
        <ResultsContainer restaurantList={filteredList} />
      )}
      <Footer />
    </SearchPageContainer>
  );
};

export default SearchPage;
