import React, { useState} from 'react';

import { 
  View, 
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity
 } from 'react-native';

export default function components() {

  const [likeado, setLikeado] = useState(false)

const getLike = (likeado) => {
  if(likeado > 0 ){
    return require("../../../assets/likeC.png")
  }
  return require("../../../assets/like.png")
}
  const curtitFoto = () => {
    setLikeado(!likeado)
  }

  return (
    <View style={styles.container}> 
          <View style={styles.containerLike}>
            <TouchableOpacity onPress={curtitFoto}>
                <Image source={getLike(likeado)} style={styles.like} />
            </TouchableOpacity>
         </View>
   </View>
  );
}

const margin = Platform.OS === 'ios' ? 40 : 0
const largura = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  like:{
    width: 15,
    height: 15,
    margin: 10
  },
  containerLike:{
    flexDirection:'row',
    alignItems: 'center'
  }
}
)