import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    padding: 20,
    backgroundColor: '#ff0021',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  menuBoton: {
    marginVertical: 5,
  },
  menuText: {
    fontSize: 20,
  },
});
