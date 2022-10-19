import React from 'react';
import {Text,View,Image} from 'react-native';
import splashImage from '../../../assets/splash.png';
import { styles } from './styles/styles';
import Button from '../../../components/Button/Index';


const Splash = () => {




    return(
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={splashImage} />
        <Text style={styles.title}>
            You'll Find   </Text>
            <Text style={styles.innerTitle}>All you need </Text>
            <Text style={styles.title}>Here !</Text>
            <Button  title="sign up"/>
      
        </View>
    )


}



export default Splash