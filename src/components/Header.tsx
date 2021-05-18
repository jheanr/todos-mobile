import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface HeaderProps {
  darkMode: boolean;
  onPress: () => void;
}

export function Header({ darkMode, onPress }: HeaderProps) {
  return (
    <View
      style={darkMode ? [styles.header, styles.headerDark] : styles.header}
    >
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <Switch
        style={styles.themeSwitch}
        trackColor={{ false: "#767577", true: "#212136" }}
        thumbColor={darkMode ? "#565BFF" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onPress}
        value={darkMode}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    backgroundColor: '#191931'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  themeSwitch: {
    position: 'absolute',
    top: 30,
    right: 35
  }
});
