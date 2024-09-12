import { View,Text, StatusBar, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View  style={styles.minhaTela}>
      <StatusBar backgroundColor={"red"} />
     <Text style={{color: 'red', fontSize:50}} >

      Vou lamber VC Au
     </Text>
    <Image source={
     {     uri:'https://w7.pngwing.com/pngs/85/681/png-transparent-fawn-pug-pug-puppy-dog-breed-companion-dog-snout-pug-mammal-animals-carnivoran.png',
            width : 150,
            height :150
    }
       }
       />
       <Image
       source={
        require('./pet.jpg')}
        //style={{ width: 150, height: 150, borderRadius: 24 }}
        style={styles.minhaImagem}
       />
        </View>
    
  );
}

const styles = StyleSheet.create({
  
  minhaImagem : {

    width:300,
    height :150

  },
  minhaTela:{
    backgroundColor:'#CCC',
    flex:1,
   }
}
)