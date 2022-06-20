import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../text/text";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import { Ionicons } from "@expo/vector-icons";

export default function PlanetHeader({ title = "THE PLANETS", isHome = false, navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>{navigation.goBack()}} style={styles.back}>
        {!isHome && (
          <Ionicons name="ios-arrow-back-outline" size={35} color="white" />
        )}
      </Pressable>
      <Text preset="h1" style={{textTransform: 'uppercase'}}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing[14],
    padding: spacing[12],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    marginRight: spacing[6],
  },
});
