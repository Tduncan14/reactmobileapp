import React from 'react';
import {Pressable, Text,TouchableOpacity,View,Image} from 'react-native'
import auth_back from '../../../assets/auth_back.png'
import styles from '../Styles';


const Authheader = ({title,OnBackPress}) => {

    <View style={styles.container}>
        <Pressable  hitSlop = {20} onPresss = {OnBackPress}>
            <Image style={styles.image} source={auth_back}/>
        </Pressable>

        <Text style={styles.title}>
            {title}
        </Text>


    </View>



}


export default Authheader