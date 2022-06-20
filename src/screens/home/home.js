import { FlatList, Pressable, StatusBar, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import PlanetHeader from "../../components/planet-header/planet-header";
import { colors } from "../../theme/colors";
import SafeAreaView from "../../util/safeAreaView";
import { PLANET_LIST } from "../../data/planetData";
import Text from "../../components/text/text";
import { spacing } from "../../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlanetItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=>{navigation.navigate("Details", {planet: item})}} style={styles.item}>
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <View
          style={[styles.circle, { backgroundColor: item.color }]}
        />
        <Text preset="h3" style={styles.itemName}>
          {item.name}
        </Text>
      </View>
      <AntDesign name="right" size={24} color="white" />
    </Pressable>
  );
}

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <PlanetHeader isHome={true} />
      <View>
        <TextInput 
          placeholder="Type your planet name.."
          placeholderTextColor={colors.white}
          style={styles.input}
          onChangeText = {(text) => console.log(text)}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
         return <PlanetItem item={item} navigation={navigation} />
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: "100%",
  },
  list: {
    padding: spacing[10],
    marginTop: spacing[6],
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  separator: {
    borderBottomColor: colors.white,
    height: spacing[15],
    borderBottomWidth: 0.2,
    marginBottom: spacing[8]
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: spacing[6]
  },
  itemName: {
    textTransform: "uppercase",
  },
  input:{
    padding: spacing[10],
    fontSize: spacing[9],
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
    marginHorizontal: spacing[10],
    marginTop: spacing[3],
    color: colors.white,
  }
});
