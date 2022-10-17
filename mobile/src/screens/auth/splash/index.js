import React from 'react';
import {Text,View,Image} from 'react-native';
import splashImage from '../../../assets/splash.png';


const Splash = () => {




    return(
        <View>
            <Image source={splashImage} />
        <Text>
            You'll Find All you need Here !
        </Text>
        </View>
    )


}



export default Splash