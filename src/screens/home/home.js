import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import PlanetHeader from "../../components/planet-header/planet-header";
import { colors } from "../../theme/colors";
import SafeAreaView from "../../util/safeAreaView";
import { PLANET_LIST } from "../../data/planetData";
import Text from "../../components/text/text";
import { spacing } from "../../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <View
                  style={[styles.circle, { backgroundColor: item.color }]}
                />
                <Text preset="h3" style={styles.itemName}>
                  {item.name}
                </Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          );
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
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    ss,
  },
  separator: {
    borderBottomColor: colors.white,
    height: spacing[15],
    borderBottomWidth: 0.2,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  itemName: {
    textTransform: "uppercase",
  },
});
