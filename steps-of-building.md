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
  ```javascript
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

### using useState to change the color of the buttons:

```javascript
<!-- Header coder  -->
  export default function HeaderTabs() {

const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <View style={{flexDirection:"row", alignSelf:"center"}}>
          <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
          <HeaderButton text="Pickup"  btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />

        </View>
    )
}
<!-- Button code -->
const HeaderButton = (props) => 
(
 <TouchableOpacity style ={{
     backgroundColor: props.activeTab === props.text? "black" : "white",
     paddingVertical:6,
     paddingHorizontal:16,
     borderRadius:30,
     marginTop:30,
 }}
 onPress={()=>props.setActiveTab(props.text)}
 >
 ```
