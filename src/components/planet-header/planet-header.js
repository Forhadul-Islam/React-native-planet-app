import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset="h1">THE PLANETS</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: spacing[14],
        padding: spacing[10],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        
    }
})