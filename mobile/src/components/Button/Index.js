import React from 'react';
import { Pressable,TouchableOpacity , Text} from 'react-native';
import styles from './Styles';


const Button = ({title}) => {
    


    return (

        <TouchableOpacity  activeOpacity={0.5} style ={styles.container}>
            <Text style={styles.text}>
                {title}
             </Text>
        </TouchableOpacity>


    )

}


export default Button;