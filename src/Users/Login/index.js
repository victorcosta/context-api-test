import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from './../../services';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (email && password.length > 5) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

  const handleSingUp = () => {};

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}
        placeholder="Nome (Caso cadastro)"
        placeholderTextColor="#666"
        autoCapitalize="none"
        value={name}
      />
      <TextInput
        keyboardType="email-address"
        style={styles.input}
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
        placeholderTextColor="#666"
        autoCapitalize="none"
        value={email}
      />

      <TextInput
        secureTextEntry
        style={styles.input}
        onChangeText={(e) => setPassword(e)}
        placeholder="Senha"
        placeholderTextColor="#666"
        value={password}
      />

      <TouchableOpacity
        style={!buttonDisabled ? styles.button : styles.disabled}
        disabled={buttonDisabled}
        onPress={handleLogin}
      >
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={!buttonDisabled ? styles.button : styles.disabled}
        disabled={buttonDisabled}
        onPress={handleSingUp}
      >
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    padding: 15,
    margin: 10,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#296999',
    width: '90%',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  disabled: {
    backgroundColor: '#296990A5',
    width: '90%',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  textButton: {
    color: '#fff'
  }
});

export default Login;
