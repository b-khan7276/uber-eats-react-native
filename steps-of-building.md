## HeaderTabs.js
```
- New folder "screens"
- => screens/home.js
- Make another new folder "components"
- => componetents/HeaderTabs.js 
- use "rnf" for shortcut inside the files
```
- What is  `<SafeAreaView>`:

   `<SafeAreaView>` is used to bring the text to the center of the screen 
- What is `<TouchableOpacity>`:

  `<TouchableOpacity>` is use to perform action of text, you can call it on press
  
  ## In react native thing are default shown in a column 
  
###  Code for the reference 
  ```
  export default function HeaderTabs() {
    return (
        <View style={{flexDirection:"row", alignSelf:"center"}}>
          <HeaderButton text="Delivery"/>
          <HeaderButton text="Pickup" />

        </View>
    )
}

const HeaderButton = (buttons) => 
(
 <TouchableOpacity style ={{
     backgroundColor: "black",
     paddingVertical:6,
     paddingHorizontal:16,
     borderRadius:30,
 }}>
    <Text style={{
        color:"white"
    }}
    >{buttons.text}</Text>
 </TouchableOpacity>
);
  ```
  
