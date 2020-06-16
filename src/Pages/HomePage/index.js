import React, { useState, useEffect } from "react";
import { TabUncap, HomePageContainer, AppBarClean, SearchField, SearchContainer } from "./style";
import {} from "../../styles";
import CardContainer from "./components/CardContainer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import usePrivatePage from "../../hooks/usePrivatePage";
// import { getRestaurants } from '../../requests';
import axios from "axios";
import { Tabs, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/SearchOutlined'

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const HomePage = () => {
  const [restaurantList, setRestaurantList] = useState(undefined);
  const [category, setCategory] = useState(undefined);

  // usePrivatePage();

  const baseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA";

  const token = window.localStorage.getItem("token");

  const getRestaurants = () => {
    axios
      .get(`${baseUrl}/restaurants`, {
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

  const handleChange = (event, newCategory) => {
    if (newCategory !== category) {
      setCategory(newCategory);
    } else {
      setCategory(undefined);
    }
  };

  let categorizedList = restaurantList;

  switch(category){
    case undefined:
      categorizedList = restaurantList;
      break;
    case "Hamburguer":
    case 'Asiática':
    case 'Sorvetes':
    case 'Baiana':
    case 'Petiscos':
    case 'Mexicana':
    case 'Carnes':
    case 'Italiana':
    case 'Árabe':
      categorizedList = restaurantList.filter (restaurant => { return (restaurant.category === category)})
  }
  return (
    <HomePageContainer>
      <Header />
      <SearchContainer>
      <SearchField variant='outlined' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}/>
      </SearchContainer>

      <AppBarClean position="relative" color="default">
        <Tabs
          value={category}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <TabUncap value="Hamburguer" label="Hamburguer" {...a11yProps(0)} />
          <TabUncap value='Asiática' label="Asiática" {...a11yProps(1)} />
          <TabUncap value='Italiana' label="Italiana" {...a11yProps(2)} />
          <TabUncap value='Sorvetes' label="Sorvetes" {...a11yProps(3)} />
          <TabUncap value='Carnes' label="Carnes" {...a11yProps(4)} />
          <TabUncap value='Baiana' label="Baiana" {...a11yProps(5)} />
          <TabUncap value='Petiscos' label="Petiscos" {...a11yProps(6)} />
          <TabUncap value='Mexicana' label="Mexicana" {...a11yProps(7)} />
        </Tabs>
      </AppBarClean>
      {restaurantList ? (
        <CardContainer restaurantList={categorizedList} />
      ) : (
        <p></p>
      )}
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
