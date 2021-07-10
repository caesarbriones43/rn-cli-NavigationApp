import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 20}}>
      <Text style={styles.title}>Iconos</Text>

      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="airplane" size={80} color={colors.primary} />
        <Icon name="bicycle-outline" size={80} color={colors.primary} />
        <Icon name="bicycle" size={80} color={colors.primary} />
        <Icon name="airplane-sharp" size={80} color={colors.primary} />
        <Icon name="bicycle-sharp" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
