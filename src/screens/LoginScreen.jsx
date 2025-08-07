import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import { DOCTERS1 } from '../assets/images';

const LoginScreen = () => {
  return (
    <BaseLayout>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo */}
        <View
          style={{
          height:250,
          width:'100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'red'
          }}
        >
          <Image source={DOCTERS1} style={styles.logo} />

          <Text style={styles.appName}>HealthPal</Text>
        </View>

        <View
          style={{
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.welcome}>Hi, Welcome Back!</Text>
          <Text style={styles.subtext}>Hope you're doing fine.</Text>
        </View>

        <View style={styles.inputContainer}>
          {/* <Feather name="mail" size={20} color="#999" style={styles.icon} /> */}
          <TextInput
            placeholder="Your Email"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          {/* <Feather name="lock" size={20} color="#999" style={styles.icon} /> */}
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        {/* OR separator */}
        <Text style={styles.orText}>or</Text>

        {/* Sign in with Google */}
        <TouchableOpacity style={styles.socialButton}>
          {/* <AntDesign name="google" size={20} color="#EA4335" /> */}
          <Text style={styles.socialText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Sign in with Facebook */}
        <TouchableOpacity style={styles.socialButton}>
          {/* <FontAwesome name="facebook" size={20} color="#1877F2" /> */}
          <Text style={styles.socialText}>Sign in with Facebook</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0A0A0A',
    marginBottom: 8,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: '#777',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    width: '100%',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 8,
    fontSize: 16,
  },
  icon: {
    marginRight: 4,
  },
  signInButton: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    marginVertical: 12,
    color: '#999',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 12,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 16,
  },
  forgotText: {
    color: '#1E90FF',
    marginTop: 12,
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#555',
    fontSize: 14,
  },
  signupLink: {
    color: '#1E90FF',
    fontSize: 14,
    fontWeight: '600',
  },
});
