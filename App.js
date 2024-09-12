import { Text, View, SafeAreaView, Image, StyleSheet, StatusBar, ScrollView } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar backgroundColor="#0077B5" />
        <Image
          source={
            {
              uri: 'https://media.licdn.com/dms/image/v2/C4D03AQHF3A0oS7WA9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1536852136672?e=1731542400&v=beta&t=2Bozh7GqLis3IaMea8zcH9V4kq3HfE6RcSR4re2O2Lg',
            }
          }
          style={styles.myImage}
        />
        <Text style={styles.myName}>Anderson Demetrio PLácido</Text>
        <Text style={styles.myPosition}>Desenvolvedor de Software</Text>

        <Text style={styles.title}>Contato</Text>
        <View style={styles.separator} />

        <View style={styles.row}>
          <MaterialCommunityIcons name='email-alert-outline' size={30} color="#0077B5" />
          <Text> andersondemetrio.trabalho@gmail.com</Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name='phone' size={30} color="#0077B5" />
          <Text>48-996569612</Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name='linkedin' size={30} color="#0077B5" />
          <Text>https://www.linkedin.com/in/andersondemetrio/</Text>
        </View>

        <Text style={[styles.title, { marginTop: 10 }]}> Resumo</Text>

        <View style={styles.separator} />

        <Text style={[styles.title, { marginTop: 10 }]}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut, dolore tempore iure rem quas facilis perferendis. Optio velit dolor explicabo iure est vitae, voluptatum nulla sint, corporis voluptate deserunt!</Text>


        <Text style={[styles.title, {marginTop:20}]}>Habilidades</Text>
        <View style={styles.separator} />
     
     <View style={styles.list}>
     <View style={styles.badge}>
          <Text> Javascript</Text>
      </View>
      <View style={styles.badge}>
          <Text> Java</Text>
      </View>
      <View style={styles.badge}>
          <Text> Python</Text>
      </View>
      <View style={styles.badge}>
          <Text> HTML</Text>
      </View>
      <View style={styles.badge}>
          <Text> CSS</Text>
      </View>

      <View style={styles.badge}>
          <Text> Django</Text>
      </View>
      <View style={styles.badge}>
          <Text> Postgres</Text>
      </View>



     </View>
            </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  myImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10
  },
  container: {
    padding: 20,
    flex: 1
  },
  myName: {
    color: '#0077B5',
    fontSize: 24,
    textAlign: 'center'
  },
  myPosition: {
    color: '#CCC',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  title: {
    color: '#0077B5',
    fontSize: 18
  },
  separator: {
    backgroundColor: '#0077B5',
    width: '100%',
    height: 1,
    marginVertical: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  list :{
    flexDirection:'row',
    gap:10,
    flexWrap:'wrap',
  },
  badge:{
    backgroundColor:'#0077B5',
    padding:5,
    borderRadius:5,
    opacity:0.7
  }
})