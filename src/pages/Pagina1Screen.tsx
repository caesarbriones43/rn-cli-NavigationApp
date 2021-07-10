import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  const {left} = useSafeAreaInsets();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        // <Button
        //   title="Menu"
        //   onPress={() => {
        //     navigation.toggleDrawer();
        //   }}></Button>
        <View style={{marginLeft: left + 15}}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Icon name="menu" size={35} color={colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Pagina2"
        onPress={() => {
          navigation.navigate('Pagina2Screen');
        }}></Button>
      {/* <Button
        title="Ir persona.."
        onPress={() => {
          navigation.navigate('PersonaScreen');
        }}
      /> */}
      <Text>Navegar con propiedades</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5cdb5c'}}
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pedro',
            });
          }}>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#ffff00'}}
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Maria',
            });
          }}>
          <Icon name="person-outline" size={35} color={colors.primary} />

          <Text style={{...styles.botonGrandeTexto, color: 'black'}}>
            Maria
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
