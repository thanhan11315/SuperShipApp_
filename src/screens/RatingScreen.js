import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextArea from '../components/TextArea';
import colors from '../theme/Colors';
import Button1 from '../components/Button1';
import TopBar from '../components/TopBar';
import OrderSummary from '../components/OrderSummary';
import RecipientInformation from '../components/RecipientInformation';
const RatingScreen = ({navigation}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const Star = ({index, selected}) => (
    <TouchableOpacity onPress={() => setRating(index + 1)}>
      <Text style={[styles.star, selected && styles.selectedStar]}>★</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 50}}>
          <TopBar title="Đánh Giá" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <OrderSummary />
        </View>
        <View style={styles.boxItem}>
          <RecipientInformation />
        </View>
        <View style={styles.starContainer}>
          {[...Array(5)].map((_, index) => (
            <Star key={index} index={index} selected={index < rating} />
          ))}
        </View>
        <View style={styles.boxItem}>
          <TextArea
            placeholder="Chi tiết đánh giá của bạn"
            onChange={Text => setReview(Text)}
          />
        </View>
        <View style={[styles.boxItem, {paddingBottom: 12}]}>
          <View style={{height: 50}}>
            <Button1 title="Gửi Đánh Giá" fontSize={16} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  boxItem: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  starContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  star: {
    fontSize: 40,
    color: '#aaa',
  },
  selectedStar: {
    color: colors.brand,
  },
});

export default RatingScreen;
