# ResaturantItems.js
## steps I have done
- I made two functions
- ` RestaurantItems` and `RestaurantImage`
### RestaurantItems
 - I write the image code 
 - I set the small icon with material communtiy icon
 
 ### RestaurantImage
 - I set the name
 - I set the time  
 - I set the rating 

### calling functions in components:
  - I call these two funtions in components
  - then for I pass the hard coded data in these two functions for testing purpose
  
  ### Code for reference 
  ```javascript
  export default function RestautantItems() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
           {localRestaurants.map((restaurant, index) =>( 
            <View  key={index} style={{marginTop:10, padding:15, backgroundColor:"white"}}>
                <RestaurantImage image ={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
           ))}
        </TouchableOpacity>
    )
}

  ```
  
