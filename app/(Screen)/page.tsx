import { View, Text, StyleSheet, Image, ScrollView, FlatList, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'


const array = [
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER ',
    name: 'Nike Jordan',
    crossPrice: '₹25000.00',
    price:'₹23,193.00'
  },
  {
    image: 'https://faujimart.com/cdn/shop/files/4_2086cbdf-84a5-45a1-9b3b-1b2ab5c83f51.png?v=1703860079&width=1445',
    title: 'Pro SELLER ',
    name: 'Bata Jordan',
    crossPrice: '₹27000.00',
    price:'₹24999.00'
  },
  {
    image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
    title: 'Commendable Shoes ',
    name: 'Joy Bidan',
    crossPrice: '₹45845.00',
    price:'₹40000.00'
  },
  {
    image: 'https://cdn.moglix.com/p/r3U7p078caENn.jpg',
    title: 'First come first server! ',
    name: 'Donald Trump',
    crossPrice: '₹57000.00',
    price:'₹55000.00'
  },
  {
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/XQ/NV/KD/163132072/spark-shoes-for-men-500x500.jpg',
    title: 'Renowend Pro',
    name: 'Spark',
    crossPrice: '₹110000.00',
    price:'₹100000.00'
  },
  {
    image: 'https://rukminim1.flixcart.com/image/1408/1408/shoe/u/k/f/black-aye03-sparx-9-original-imaefza96wgghytg.jpeg?q=90',
    title: 'Mezzo',
    name: 'Ones at a time ',
    crossPrice: '₹97000.00',
    price:'₹95000.00'
  },
  {
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/XQ/NV/KD/163132072/spark-shoes-for-men-500x500.jpg',
    title: 'Leather Spark ',
    name: 'Nike Jordan',
    crossPrice: '₹30000.00',
    price:'₹27000.00'
  },
  {
    image: 'https://www.tennisnuts.com/images/product/full/F32293_F_beauty_B2C.jpg',
    title: 'Adidas',
    name: 'Sckott wu ',
    crossPrice: '₹99999.00',
    price:'₹95000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹27000.00',
    price:'₹25000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹51000.00',
    price:'₹45000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹110000.00',
    price:'₹105000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹57000.00',
    price:'₹55000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹89999.00',
    price:'₹87999.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹95000.00',
    price:'₹93000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹87000.00',
    price:'₹85000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹99999.00',
    price:'₹97999.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹27999.00',
    price:'₹25999.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹29999.00',
    price:'₹25999.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹32999.00',
    price:'₹30999.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹35999.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹40000.00',
    price:'₹37000.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹27000.00',
    price:'₹25000.00'
  }
]
const page = () => {
  return (
    <View style={styles.container}>
         
         <ImageBackground
        source={require('../../assets/images/place.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
        
          <FlatList
          data={array}
          numColumns={4}
          keyExtractor={({id})=>id}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>(
            <View style={styles.box}>
              
            <View style={styles.img}>
            <Image style={{width:'100%', aspectRatio:1.5, borderRadius:20}}
            source={{uri:item.image}} resizeMode='contain'/>
            </View>
            <View style={styles.set}>
           <View>
           <Text style={[styles.txt,{fontSize:25, fontWeight:'bold'}]}>{item.title}</Text>
             <Text style={[styles.txt,{fontSize:35,letterSpacing:3, color:'gray'}]}>{item.name}</Text>
             <Text style={[styles.txt,{fontSize:23, color:'red', fontWeight:'bold', textDecorationLine:'line-through'}]}>{item.crossPrice}</Text>
             <Text style={[styles.txt,{fontSize:28, color:'green', fontWeight:'bold'}]}>{item.price}</Text>
           </View>
             <View style={{marginTop:100, marginLeft:50}}>
              <Image style={{width:50, height:50}} source={require('../../assets/images/plus.png')}/>
             </View>
            </View>
            </View>
          )}/>
        
          </ImageBackground>
    
     </View>      
  )
}

export default page

const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      margin:10,
        flex:1
      }, 
      imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      },
      
      box:{
        width:400,
        padding:5,
        marginLeft:12,
        marginTop:23,
        backgroundColor:'#fff',
        height:500,
        borderColor:'black',
        borderRadius:25,
        borderWidth:1
      },
      img:{
        marginTop:10,  
        height:280,
        justifyContent:'center',
        alignItems:'center'
      },
      set:{
        padding:25,
        flexDirection:'row'
      },
      txt:{
      marginTop:5
      }

})