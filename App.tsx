import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import logo from './assets/logo.png';

export default function App() {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e cadastro
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log("Login attempted with:", username, password);
  };

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log("Cadastro realizado com:", email, password);
  };

  const renderLogin = () => (
    <View style={styles.formContainer}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(false)}>
        <Text style={styles.switchText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSignup = () => (
    <View style={styles.formContainer}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(true)}>
        <Text style={styles.switchText}>Já tem uma conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLogin ? renderLogin() : renderSignup()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12642A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  formContainer: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FD6F22',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
