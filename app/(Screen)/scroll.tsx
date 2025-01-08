import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const scroll = () => {

    interface data {
        name: String,
        title: String,
        image: String,
        crossPrice: String,
        price: String
    }

    const data: data[] = [
        {
            name: 'Addidas',
            image: 'https://www.tennisnuts.com/images/product/full/F32293_F_beauty_B2C.jpg',
            title: 'Nike Barden',
            crossPrice: '50,000',
            price: '40,000'
        },
        {
            name: 'Addidas',
            image: 'https://i.pinimg.com/originals/d1/f1/89/d1f1897285ecd752ce0b1b3f94e97a44.jpg',
            title: 'Sport Shoe',
            crossPrice: '30,000',
            price: '20,000'
        },
        {
            name: 'Amzon',
            image: 'https://cdna.lystit.com/photos/amazon/ac21a633/new-balance--411v1-Running-Shoe.jpeg',
            title: 'FUTURE 7',
            crossPrice: '7,499',
            price: '6,399'
        },
        {
            name: 'Addidas',
            image: 'https://www.tennisnuts.com/images/product/full/F32293_F_beauty_B2C.jpg',
            title: 'Nike Barden',
            crossPrice: '50,000',
            price: '40,000'
        },
        {
            name: 'Addidas',
            image: 'https://i.pinimg.com/originals/d1/f1/89/d1f1897285ecd752ce0b1b3f94e97a44.jpg',
            title: 'Sport Shoe',
            crossPrice: '30,000',
            price: '20,000'
        },
        {
            name: 'Amzon',
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107931/01/sv01/fnd/IND/fmt/png/FUTURE-7-MATCH-FG/AG-Unisex-Football-Boots',
            title: 'FUTURE 7',
            crossPrice: '7,499',
            price: '6,399'
        },
    ]
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize:35, fontWeight:'bold', textDecorationLine:'underline', letterSpacing:2}}>Shoe's Mart</Text>

            <View style={{width:'90%', alignSelf:'center', marginTop:20}}>
                <ScrollView
                contentContainerStyle={{gap:20}}
                showsHorizontalScrollIndicator={false}
                horizontal style={{marginTop:10}} >
                    {
                        data.map((item, index) => {
                            return (
                                <View style={styles.itemView}>
                                    <Image source={{ uri: item.image }} style={styles.imageView} resizeMode='contain' />
                                    <View style={styles.textView}>
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 25, fontWeight: '500', color: '#1e90ff' }}>{item.name}</Text>
                                        <Text style={{ fontSize: 20, fontWeight: '500', color: 'crimson', textDecorationLine: 'line-through' }}>{item.crossPrice}</Text>
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'darkgreen' }}>{`₹ ${item.price}`}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default scroll

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        paddingTop:20
    },
    itemView: {
        width: 350,
        height: 370,
        backgroundColor:'#fff',
        padding: 20,
        borderColor: 'black',
        borderWidth: 1,
        elevation:5,
        borderRadius:20,
    },
    imageView: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        aspectRatio: 1.5
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: 150,
    }
})