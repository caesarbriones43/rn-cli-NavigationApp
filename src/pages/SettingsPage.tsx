import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

const SettingsPage = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>SettingsPage</Text>
    </View>
  );
};

export default SettingsPage;
