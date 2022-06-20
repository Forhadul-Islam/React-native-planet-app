import { View, ScrollView, StyleSheet, Pressable, Linking } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import PlanetHeader from "../../components/planet-header/planet-header";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../../svg";
import { spacing } from "../../theme/spacing";
import Text from "../../components/text/text";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.ps_container}>
      <Text style={styles.ps_container__title}>{title}</Text>
      <Text style={styles.ps_container__value}>{value}</Text>
    </View>
  );
};

export default function Details({ navigation, route }) {
  const { planet } = route.params;
  const { name: planetName, description, radius, avgTemp, wikiLink, revolutionTime, rotationTime } = planet;
  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;
    }
  };
  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };
  return (
    <View style={styles.container}>
      <PlanetHeader navigation={navigation} />
      <ScrollView >
        <View style={styles.details}>
          <View style={styles.image}>{renderImage(planetName)}</View>
          <View style={styles.description}>
            <Text preset="h2" style={styles.description_title}>
              {planetName}
            </Text>
            <Text preset="small" style={styles.description_text}>{description}</Text>
            <View style={styles.description_footer}>
              <Text style={styles.source}>Source: </Text>
              <Pressable onPress={onPressLink}>
                <Text preset="h4" style={styles.wikipedia}>
                  Wikipedia
                </Text>
              </Pressable>
              <Text>🚀</Text>
            </View>
          </View>
        </View>
        <PlanetSection title="Rotation time" value={rotationTime} />
        <PlanetSection title="Revolution time" value={revolutionTime} />
        <PlanetSection title="Radius" value={radius} />
        <PlanetSection title="Average Temp." value={avgTemp} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    // minHeight: "100%",
  },
  details: {
    alignItems: "center",
  },
  image: {
    marginTop: spacing[15],
  },
  description: {
    alignItems: "center",
    marginHorizontal: spacing[9],
    // borderColor: colors.white,
    // borderWidth: 1,
    // margin: spacing[4],
    padding: spacing[2],
    paddingBottom: spacing[3],
    marginTop: spacing[10],
  },
  description_title: {
    fontSize: 40,
    textTransform: 'uppercase',

  },
  description_text: {
    lineHeight: spacing[12],
    textAlign: "justify",
    fontSize: spacing[9],
  },
  description_footer: {
    flexDirection: "row",
    marginTop: spacing[9],
  },
  source: {
    fontSize: spacing[8],
  },
  wikipedia: {
    fontSize: spacing[9],
    textDecorationLine: "underline",
  },
  ps_container: {
    padding: spacing[5],
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.grey,
    borderWidth: 2.5,
    marginHorizontal: spacing[10],
    marginBottom: spacing[6],
    alignItems: 'center'
  },
  ps_container__title: {
    fontSize: spacing[10],
    textTransform: 'uppercase',
    color: colors.grey
  },
  ps_container__value: {
    fontSize: 30,
    color: colors.white
  }
});
