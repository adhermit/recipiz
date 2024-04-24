import { View, Text, Image } from "react-native";
import RecipizCard from './RecipizCard';
import { StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source ={ require ('./../assets/logo-recipiz.png')} style={styles.homeImage} />
        <RecipizCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  homeImage: {
      "height": 200,
      resizeMode: 'contain',
      marginBottom: 20
  },
  homeTitle: {
    fontSize: 23,
  }
});
