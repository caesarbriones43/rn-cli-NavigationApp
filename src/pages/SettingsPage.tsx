import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsPage = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  const {favoriteIcon} = authState;

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>SettingsPage</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {favoriteIcon && (
        <Icon name={favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};

export default SettingsPage;
