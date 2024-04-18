import { View, Text } from "react-native";
import RecipizCard from './RecipizCard';
import Image from

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
        <RecipizCard/>
    </View>
  );
}
