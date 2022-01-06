# Categories.js
-  import the images
- set the loop to show all the images and texts
```javascript
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {/* Loop start here */}
       {items.map((item, index)=>(    
          <View key={index
          } style={{alignItems: "center", marginRight:30}}>
            <Image
              source={item.image}
              style={{
               width:50,
               height:40,
               resizeMode:"contain",  }}
             />
             <Text
                style={{
                fontSize:13, fontWeight:"900"
                  }}
                 >{item.text}</Text>
            </View>
            // Loop ends here
        ))}
  </ScrollView>
  </View>

```

## Code of the `loop `:

```javsscript
  {items.map((item, index)=>(    
  ))}
```
## To counter the error of index key
- To counter the error of index key I pass `index={key} ` in a view component.

