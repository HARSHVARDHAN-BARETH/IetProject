import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button , ScrollView ,Image,ImageBackground} from 'react-native'; // image tag


export default function Login() {
  
  const navigation = useNavigation();
  const handle = ()=>{
    navigation.navigate('(Screen)',
      {
        screen : 'page'
      }
    )
  }

  return (
  //   <ScrollView style = {{flex: 1,backgroundColor:'green'}}> // inline styling 
  // // <Image source={require('')}/>  reqiure is uaed for the image fom the database , uri is used for the image from the url 
    <View style={styles.container}>
    <ImageBackground source ={{ uri: 'https://images.pexels.com/photos/28082017/pexels-photo-28082017/free-photo-of-many-hot-air-balloons-flying-over-a-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} style={{width:'100%',height:"100%", zIndex:-1 ,justifyContent:'center',alignItems:'center'}}  >
 <Image source={{ uri: 'https://th.bing.com/th/id/OIP.i18S5hbENZf5sBwYOMm7UAHaHa?rs=1&pid=ImgDetMain' }} style={{width:100,height:100 , shadowColor:'black',shadowOpacity: 0.2,shadowRadius:3,borderRadius:100 }}/>
     
 <Text style={styles.textedit} >LOGIN</Text>
 
      <View style={styles.subview}>
        <View style={styles.item1}>
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.item1}>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        </View>
        <View style={styles.item1}>
          <Button title="Login"  onPress={handle}/>
        </View>
      </View>
     </ImageBackground>
    </View>
    // </ScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    backgroundColor:'red',
 width: "100%" ,
 height: 50 ,
 justifyContent:'center',
 alignItems:'center',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  textedit: {
    color: 'white',
    fontSize: 50,
    marginBottom: 60,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    // padding: 20,

    
  },
  subview: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor:'black',
    shadowOpacity:0.4,
    shadowRadius:10,
   shadowOffset:{width:1,height:5}, 
   
  },
  item1: {
    marginBottom: 20,
    width: '100%',
  },
});