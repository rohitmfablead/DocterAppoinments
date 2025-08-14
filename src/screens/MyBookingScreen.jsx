import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import fonts from '../utils/fonts';
import colors from '../utils/colors';

const { width } = Dimensions.get('window');
const headers = ['Upcoming', 'Completed', 'Canceled'];

let animationActive = true;
let animationActiveRef;

const BookingCard = ({
  date,
  time,
  doctorName,
  specialty,
  clinicName,
  imageUri,
  onCancel,
  onReschedule,
  onReBook,
  onAddReview,
  status,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <View style={styles.cardBody}>
        <Image source={{ uri: imageUri }} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctorName}</Text>
          <Text style={styles.specialty}>{specialty}</Text>
          <Text style={styles.clinicName}>{clinicName}</Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        {status === 'upcoming' && (
          <>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onReschedule}>
              <Text style={styles.buttonText}>Reschedule</Text>
            </TouchableOpacity>
          </>
        )}
        {status === 'completed' && (
          <>
            <TouchableOpacity style={styles.button} onPress={onReBook}>
              <Text style={styles.buttonText}>Re-Book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onAddReview}>
              <Text style={styles.buttonText}>Add Review</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default function MyBookingScreen() {
  const [headerWidths, setHeaderWidths] = useState([]);
  const [active, setActive] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const barTranslate = Animated.multiply(scrollX, -1);
  const barTranslate1 = useRef(new Animated.Value(0)).current;
  const headerScrollView = useRef();
  const itemScrollView = useRef();

  useEffect(() => {
    let leftOffset = 0;
    for (let i = 0; i < active; i += 1) {
      leftOffset += headerWidths[i];
    }
    headerScrollView.current?.scrollToIndex({
      index: active,
      viewPosition: 0.5,
    });
    Animated.spring(barTranslate1, {
      toValue: leftOffset,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  }, [active, headerWidths]);

  const onPressHeader = index => {
    if (animationActiveRef) {
      clearTimeout(animationActiveRef);
    }
    if (active !== index) {
      animationActive = false;
      animationActiveRef = setTimeout(() => {
        animationActive = true;
      }, 400);
      itemScrollView.current?.scrollToIndex({ index });
      LayoutAnimation.easeInEaseOut();
      setActive(index);
    }
  };

  const onScroll = e => {
    const x = e.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(x / width + 0.5);
    if (active !== newIndex && animationActive) {
      LayoutAnimation.easeInEaseOut();
      setActive(newIndex);
    }
  };

  const onHeaderLayout = (width, index) => {
    const newWidths = [...headerWidths];
    newWidths[index] = width;
    setHeaderWidths(newWidths);
  };

  const UpcomingScreen = () => {
    const upcomingBookings = [
      {
        date: 'May 22, 2023',
        time: '10:00 AM',
        doctorName: 'Dr. James Robinson',
        specialty: 'Orthopedic Surgery',
        clinicName: 'Elite Ortho Clinic, USA',
        imageUri: 'https://example.com/james_robinson.jpg',
      },
      {
        date: 'June 14, 2023',
        time: '3:00 PM',
        doctorName: 'Dr. Daniel Lee',
        specialty: 'Gastroenterologist',
        clinicName: 'Digestive Institute, USA',
        imageUri: 'https://example.com/daniel_lee.jpg',
      },
    ];

    return (
      <FlatList
        data={upcomingBookings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <BookingCard
            date={item.date}
            time={item.time}
            doctorName={item.doctorName}
            specialty={item.specialty}
            clinicName={item.clinicName}
            imageUri={item.imageUri}
            status="upcoming"
          />
        )}
        contentContainerStyle={styles.tabContent}
      />
    );
  };

  const CompletedScreen = () => {
    const completedBookings = [
      {
        date: 'March 12, 2023',
        time: '11:00 AM',
        doctorName: 'Dr. Sarah Johnson',
        specialty: 'Gynecologist',
        clinicName: 'Women’s Health Clinic',
        imageUri: 'https://example.com/sarah_johnson.jpg',
      },
      {
        date: 'March 2, 2023',
        time: '12:00 PM',
        doctorName: 'Dr. Michael Chang',
        specialty: 'Cardiologist',
        clinicName: 'HeartCare Center, USA',
        imageUri: 'https://example.com/michael_chang.jpg',
      },
    ];

    return (
      <FlatList
        data={completedBookings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <BookingCard
            date={item.date}
            time={item.time}
            doctorName={item.doctorName}
            specialty={item.specialty}
            clinicName={item.clinicName}
            imageUri={item.imageUri}
            status="completed"
          />
        )}
        contentContainerStyle={styles.tabContent}
      />
    );
  };

  const CanceledScreen = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabText}>No canceled bookings</Text>
    </View>
  );

  return (
    <BaseLayout>
      <View style={styles.container}>
        <View>
          <FlatList
            data={headers}
            ref={headerScrollView}
            keyExtractor={item => item}
            horizontal
            style={[styles.headerScroll, { alignSelf: 'center' }]}
            contentContainerStyle={styles.headerListContainer}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false },
            )}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.headerGap} />}
            ListFooterComponent={() => <View style={styles.headerBar} />}
            renderItem={({ item, index }) => (
              <View style={{ overflow: 'hidden' }}>
                <TouchableOpacity
                  onLayout={e =>
                    onHeaderLayout(e.nativeEvent.layout.width, index)
                  }
                  onPress={() => onPressHeader(index)}
                  key={item}
                  style={[
                    styles.headerItem,
                    {
                      borderBottomWidth: active === index ? 1 : 0,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.headerText,
                      {
                        color:
                          active === index
                            ? colors.textPrimary
                            : colors.textSecondary,
                      },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Animated.View
            style={[
              styles.headerBar,
              {
                width: headerWidths[active],
                transform: [
                  { translateX: barTranslate },
                  { translateX: barTranslate1 },
                ],
              },
            ]}
          />
        </View>
        <FlatList
          data={headers}
          ref={itemScrollView}
          keyExtractor={item => item}
          horizontal
          pagingEnabled
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          renderItem={({ item, index }) => (
            <View key={item} style={styles.mainItem}>
              {index === 0 && <UpcomingScreen />}
              {index === 1 && <CompletedScreen />}
              {index === 2 && <CanceledScreen />}
            </View>
          )}
        />
      </View>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerScroll: {
    flexGrow: 0,
    alignSelf: 'center',
  },
  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  headerText: {
    fontFamily: fonts.BOLD,
  },
  mainItem: {
    width: width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  mainText: {
    color: '#fff',
  },
  headerBar: {
    height: 3,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 1,
  },
  headerListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerGap: {
    width: 30,
  },
  tabContent: {
    flexGrow: 1,
    width: width,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  tabText: {
    fontSize: 18,
    fontFamily: fonts.BOLD,
    color: colors.textPrimary,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    fontFamily: fonts.REGULAR,
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    fontFamily: fonts.REGULAR,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontFamily: fonts.BOLD,
    color: colors.textPrimary,
    marginBottom: 3,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
    fontFamily: fonts.REGULAR,
    marginBottom: 3,
  },
  clinicName: {
    fontSize: 14,
    color: '#666',
    fontFamily: fonts.REGULAR,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: fonts.BOLD,
  },
});
