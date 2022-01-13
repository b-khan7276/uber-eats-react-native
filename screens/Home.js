import React, { useEffect,useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestautantItems, { localRestaurants } from '../components/RestautantItems'
import SearchBar from '../components/SearchBar'


const YELP_API_KEY =
  "UqiKEqVOwwipRCQbhkw_8aWcYbjWQP0XiZTQ8GqTVRwIJI8EKht7yfyPFXbJ4zOq2lYPLrWhlcymJODLfPvTFqY4dbERVqOC0B1uz3Pw0xgyjw1tKVzbxEFdcoDYYXYx";
/* 
  Client ID
  Eyf6BWR0Gyrj_F2N5UI1uQ
  
  API Key
  UqiKEqVOwwipRCQbhkw_8aWcYbjWQP0XiZTQ8GqTVRwIJI8EKht7yfyPFXbJ4zOq2lYPLrWhlcymJODLfPvTFqY4dbERVqOC0B1uz3Pw0xgyjw1tKVzbxEFdcoDYYXYx */


const [activeTab, setActiveTab] = useState('Delivery');


    export default function Home() {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
        .then((res) =>res.json)
        .then((json) =>setRestaurantData(json.businesses.filter((business)=> 
        business.transactions.includes(activeTab.toLowerCase())
        )));
    };
    // useEffect(() => {
    //   getRestaurantsFromYelp();
    // }, [city, activeTab] );
  
//  
    return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1}} >
        <View style={{backgroundColor: "white", padding:15 }}  >
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <SearchBar cityhandler={setCity}/>
        </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestautantItems restaurantData={restaurantData} />

            </ScrollView>    
            <Divider width={1}/>
    </SafeAreaView>
    )
}
