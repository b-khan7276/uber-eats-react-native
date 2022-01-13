import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "India's Grill",
      image_url:
        "https://www.qantas.com/content/dam/travelinsider/images/trending/the-best-new-restaurants-in-june-2017/7319e52a-432f-4a5e-9bb1-6ce6bfe8f9e9.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "Montreal",
      image_url:
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/2354034/junior7.0.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "Best Kansas City",
      image_url:
        "http://img1.10bestmedia.com/Images/Photos/323662/The-American-Restaurant---photo-by-Bonjwing-Lee_54_990x660.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

export default function RestautantItems(props) {
    return (
      <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>

{props.restaurantData.map((restaurant, index) => (

           
            <View  key={index} style={{marginTop:10, padding:15, backgroundColor:"white"}}>

                <RestaurantImage image ={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
           
            </View>
           
           ))}
      </TouchableOpacity>
    );
}

const RestaurantImage =(props) =>(
   
    <>
        <Image
        source={{ uri:props.image}}
        
        style={{width:"100%", height:180}}
    />
    <TouchableOpacity style={{position:"absolute", right:20, top:20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>

    </TouchableOpacity>
    </>
    );
    const RestaurantInfo =(props) =>(
        <View 
        style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:10,
        }}>
            <View>
                <Text style={{fontSize:15, fontWeight:"bold"}}>
                    {props.name}
                </Text>
                {/* time of delivery */}
                <Text style={{fontSize:13,color:"gray"}} >30-25</Text>
            </View>
            
            {/* Ratting */}
            <View style={{
                backgroundColor:'#eee',
                height:30,
                width:30,
                alignItems:"center", 
                justifyContent:"center",
                borderRadius:15,}}>
                <Text >{props.rating}</Text>
            </View>
        </View>
    )
    
