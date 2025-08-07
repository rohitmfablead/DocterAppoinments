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
import { email, Facebook, google, lock, user, Vector } from '../assets/icons';
import CustomImage from '../components/CustomImage';
import colors from '../utils/colors';
import BaseTextInput from '../components/BaseTextInput';
import fonts from '../utils/fonts';
import BaseButton from '../components/BaseButton';

const SignupScreen = ({navigation}) => {
  return (
    <BaseLayout>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={Vector} style={styles.logo} />
          <Text style={styles.appName}>HealthPal</Text>
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Create Account</Text>
          <Text style={styles.subtext}>We are here to help you!</Text>
        </View>

        <BaseTextInput
          icon={user}
          placeholder="Your Name"
          keyboardType="email-address"
        />
        <BaseTextInput
          icon={email}
          placeholder="Your Email"
          keyboardType="email-address"
        />

        <BaseTextInput
          icon={lock}
          placeholder="Password"
          secureTextEntry={true}
        />

        {/* Sign In Button */}
        <BaseButton
          title="Create Account"
          onPress={()=>navigation.navigate("Signup1")}
          //   loading={isSubmitting}
          backgroundColor="#000"
          textColor="#fff"
        />
       

        {/* OR Separator */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              width: 150,
              height: 1,
              backgroundColor: colors.textPrimary,
            }}
          />
          <Text style={styles.orText}>or</Text>
          <View
            style={{
              width: 150,
              height: 1,
              backgroundColor: colors.textPrimary,
            }}
          />
        </View>

        {/* Sign in with Google */}
        <TouchableOpacity style={styles.socialButton}>
          <CustomImage displaySource={google} style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Sign in with Facebook */}
        <TouchableOpacity style={styles.socialButton}>
          <CustomImage displaySource={Facebook} style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign in with Facebook</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Do you have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  appName: {
    fontSize: 20,
    fontFamily: fonts.BOLD,
    color: colors.textPrimary,
  },
  welcomeContainer: {
    // paddingVertical: ,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.MEDIUM,
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 24,
    fontFamily: fonts.REGULAR,
  },

  signInButton: {
    backgroundColor: colors.btnolor,
    height: 50,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: fonts.MEDIUM,
  },
  orText: {
    color: '#999',
    fontSize: 16,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 25,
    gap: 10,
  },
  socialIcon: {
    width: 25,
    height: 25,
  },
  socialText: {
    // marginLeft: 10,
    fontSize: 16,
    fontFamily: fonts.MEDIUM,
  },
  forgotText: {
    color: '#1E90FF',
    // marginTop: 12,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.REGULAR,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 20,
  },
  signupText: {
    color: '#555',
    fontSize: 14,
    fontFamily: fonts.REGULAR,
  },
  signupLink: {
    color: '#1E90FF',
    fontSize: 14,
    fontFamily: fonts.BOLD,
  },
});

export default SignupScreen;
