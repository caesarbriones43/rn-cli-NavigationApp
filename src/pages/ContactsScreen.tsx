import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

const ContactsScreen = () => {
  const {singIn, singOut, authState} = useContext(AuthContext);

  const {isLoggedIn} = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {/* {!isLoggedIn && (
        <Button
          title="Login in"
          onPress={() => {
            singIn();
          }}
        />
      )} */}

      {!isLoggedIn ? (
        <Button
          title="Login in"
          onPress={() => {
            singIn();
          }}
        />
      ) : (
        <Button
          title="Login out"
          onPress={() => {
            singOut();
          }}
        />
      )}
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};

export default ContactsScreen;
