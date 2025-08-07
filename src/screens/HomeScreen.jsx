import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BaseLayout from '../components/BaseLayout';
import colors from '../utils/colors';
import CustomImage from '../components/CustomImage';
import { bell, location, search } from '../assets/icons';
import fonts from '../utils/fonts';
import BaseTextInput from '../components/BaseTextInput';
import AnimatedTileScrolling from '../components/CustomSwiper';
import { DOCTERS1, DOCTERS2, DOCTERS3 } from '../assets/images';
import CustomSwiper from '../components/CustomSwiper';
import SectionHeader from '../components/SectionHeader';
import CategoriasSection from '../components/CategoriasSection';
import MedicalSection from '../components/MedicalSection';

const HomeScreen = () => {
  const bannerImages = [DOCTERS1, DOCTERS2, DOCTERS3];
  return (
    <BaseLayout>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.locationContainer}>
            <View style={styles.iconWrapper}>
              <CustomImage
                displaySource={location}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.locationText}>Surat, India</Text>
          </View>

          <View style={styles.notificationWrapper}>
            <CustomImage
              displaySource={bell}
              style={{ width: 25, height: 25 }}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <BaseTextInput
            style={{ borderWidth: 0,marginBottom:5 }}
            icon={search}
            placeholder={'Search doctor...'}
          />
        </View>
        <CustomSwiper />
        <View>
          <SectionHeader
            title="Categories"
            onPressAction={() => Alert.alert('Navigating to all categories')}
          />
          <CategoriasSection />
        </View>
        <View>
          <SectionHeader
          
            title="Nearby Medical Centers"
            onPressAction={() => Alert.alert('Navigating to all categories')}
          />
          <MedicalSection />
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontFamily: fonts.MEDIUM,
  },
  notificationWrapper: {
    width: 34,
    height: 34,
    borderRadius: 34,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
