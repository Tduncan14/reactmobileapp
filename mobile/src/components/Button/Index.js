import React from 'react';
import { Pressable,TouchableOpacity , Text} from 'react-native';
import styles from './Styles';


const Button = ({title,onPress}) => {
    


    return (

        <TouchableOpacity  onPress={onPress} activeOpacity={0.5} style ={styles.container}>
            <Text style={[styles.text,styles.title]}>
                {title}
             </Text>
        </TouchableOpacity>


    )

}


export default Button;