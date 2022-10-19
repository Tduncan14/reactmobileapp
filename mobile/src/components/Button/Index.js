import React from 'react';
import { Pressable,TouchableOpacity , Text} from 'react-native';
import styles from './Styles';


const Button = ({title}) => {
    


    return (

        <Pressable style ={styles.container}>
            <Text>
                {title}
             </Text>
        </Pressable>


    )

}


export default Button;