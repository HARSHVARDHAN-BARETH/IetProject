import { Image, StyleSheet,ScrollView, Platform,TouchableOpacity, View,Text,TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {
   const navigation = useNavigation();

  const moveTo = ()=>{
    navigation.navigate('(Screen)',
      {
        screen: 'profile'
      }
    )
  }

  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
     <View style={styles.titleContainer}>
     <TouchableOpacity onPress={moveTo} style={styles.submit}>

<Text style={{fontSize:26}}>Calculator</Text>
</TouchableOpacity>
      <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
      <Image  source={{uri:'https://static.vecteezy.com/system/resources/previews/005/677/481/non_2x/air-balloon-logo-vintage-illustration-template-icon-design-retro-badge-circle-with-creative-typography-free-vector.jpg'}} style={styles.logo} />
      </View>
     <View style={styles.subView}> 
      <Text style={styles.title}>Sign-Up</Text>

      <Text style={styles.text}>Username</Text>

      <TextInput style={styles.fields}></TextInput>w

      
      <Text style={styles.text}>Name</Text>

      <TextInput style={styles.fields}></TextInput> 

      <Text style={styles.text}>Email</Text>

      <TextInput style={styles.fields}></TextInput> 

      
      <Text style={styles.text}>Password</Text>

      <TextInput style={styles.fields}></TextInput>

      <Text style={styles.text}>Mobile.no</Text>

      <TextInput style={styles.fields}></TextInput>


      <View>

        

    </View>
    </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
   backgroundColor:'white',
   height:700,
   width:500,
   
  },
  logo: {
    width:150,
    height:150
  },
    
 subView:{
  backgroundColor:'gray',
  borderColor:'black',
  borderWidth:2,

  borderRadius:20,
  shadowColor:'black',
  shadowOpacity:5,
  shadowRadius:50,
  shadowOffset:{width:5,height:5}


 },
 title:{
  fontSize:30,
  fontWeight:'bold',
  color:'white',
  textAlign:'center',
  marginTop:25
 },

 text:{
  margin:10,
  fontSize:20,
  fontWeight:'bold',
 },
 fields:{
  backgroundColor:'white',
  marginLeft:10,
  marginRight:10,
  padding:10,
  color:'black',
  fontSize:15,
  borderRadius:10,
 },
 submit:{
  marginTop:35,
  backgroundColor:'orange',
  margin:40,
  fontSize:40,
  borderRadius:10,
  padding:10,
  marginLeft:40,

 },
 loginText:{
  fontWeight:'bold',
  fontSize:18,
  marginLeft:125,
  

 }


});