import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  ActivityIndicator,
} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import BaseTextInput from '../components/BaseTextInput';
import {
  left_arrow,
  user,
  email,
  calendar,
  Gender,
  camera,
  tick,
} from '../assets/icons';
import CustomImage from '../components/CustomImage';
import colors from '../utils/colors';
import { users } from '../assets/images';
import fonts from '../utils/fonts';
import BaseButton from '../components/BaseButton';

const SignupScreen1 = ({ navigation }) => {
  const [name, setName] = useState('Michael Jordan');
  const [nickname, setNickname] = useState('');
  const [emailVal, setEmail] = useState('name@example.com');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    console.log('Profile Data:', {
      name,
      nickname,
      email: emailVal,
      dateOfBirth,
      gender,
    });

    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Bottom');
    }, 3000);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <BaseLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity>
            <CustomImage
              displaySource={left_arrow}
              style={{ width: 24, height: 24, tintColor: colors.textPrimary }}
            />
          </TouchableOpacity>
          <Text style={styles.header}>Fill Your Profile</Text>
        </View>
        <View style={styles.profileWrapper}>
          <View style={styles.profileImageContainer}>
            <Image source={users} style={styles.profileImage} />
          </View>
          <TouchableOpacity style={styles.cameraIcon}>
            <CustomImage
              displaySource={camera}
              style={{ width: 24, height: 24, tintColor: colors.textPrimary }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <BaseTextInput
            value={name}
            onChangeText={setName}
            placeholder="Name"
            icon={user}
          />
          <BaseTextInput
            icon={user}
            value={nickname}
            onChangeText={setNickname}
            placeholder="Nickname"
          />
          <BaseTextInput
            icon={email}
            value={emailVal}
            onChangeText={setEmail}
            placeholder="name@example.com"
            keyboardType="email-address"
          />
          <BaseTextInput
            icon={calendar}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="Date of Birth"
          />
          <BaseTextInput
            icon={Gender}
            value={gender}
            onChangeText={setGender}
            placeholder="Gender"
          />
        </View>
        <BaseButton
          title="Save"
          onPress={handleSave}
          backgroundColor="#000"
          textColor="#fff"
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
          statusBarTranslucent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 150,
                  backgroundColor: '#A4CFC3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}
              >
                <Image
                  source={tick}
                  style={{ width: 80, height: 80, tintColor: '#fff' }}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.modalText}>Congratulations!</Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: fonts.REGULAR,
                    textAlign: 'center',
                  }}
                >
                  Your account is ready to use. You will be redirected to the
                  Home Page in a few seconds...!
                </Text>
              </View>
              <View>
                <ActivityIndicator
                  color={colors.primary}
                  size="large"
                  style={styles.loader}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontFamily: fonts.MEDIUM,
    color: colors.textPrimary,
  },
  profileWrapper: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 25,
    position: 'relative',
  },
  profileImageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  cameraIconText: {
    fontSize: 18,
  },
  inputWrapper: {
    paddingVertical: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontFamily: fonts.MEDIUM,
    textAlign: 'center',
  },
  loader: {
    marginTop: 20,
    transform: [{ scale: 1.2 }],
  },
});

export default SignupScreen1;
