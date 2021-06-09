import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Pressable } from 'react-native';
import styles from './styles';
import { Container, Text, Loader, Header } from '../../Component';
import { useSelector, useDispatch } from 'react-redux';
import { getToursAction } from '../../Redux/Action/tours.action';
import Icon from 'react-native-vector-icons/dist/Entypo';
import StarRating from 'react-native-star-rating';
import { Colors } from '../../Theme';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const ToursList = ({ navigation, route }) => {
  const { isLoading, toursData, loadNext } = useSelector(state => state.tours);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params !== undefined) {
      getToursApi(page);
    }
  }, []);

  const getToursApi = page => {
    const { place } = route.params;
    dispatch(getToursAction(place, page));
  };

  const gotBackHandler = () => {
    navigation.goBack()
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item.thumbnail_url }}
          resizeMode="contain"
          style={{ width: 65, height: 'auto' }}
        />
        <View style={styles.cardDetail}>
          <Text style={styles.title}>{item.city}</Text>
          <View style={styles.row}>
            <View style={{ flex: 0.3 }}>
              <Text style={styles.text}>$ {item.price_in_usd}</Text>
            </View>
            <View style={styles.column}>
              <Icon name="stopwatch">
                <Text style={[styles.text, { marginLeft: 25 }]}>
                  {' '}
                  {item.duration_in_minutes
                    ? item.duration_in_minutes
                    : '00:00'}
                </Text>
              </Icon>
            </View>
          </View>

          <StarRating
            disabled={true}
            emptyStar={'star-o'}
            fullStar={'star'}
            halfStar={'star-half-empty'}
            iconSet={'FontAwesome'}
            maxStars={5}
            rating={Number(item.number_of_reviews)}
            starSize={15}
            fullStarColor={Colors.yellow}
            halfStarColor={Colors.yellow}
            emptyStarColor={Colors.yellow}
            containerStyle={{ width: 90 }}
          />
        </View>
      </View>
    );
  };

  return (

    <Container style={{ flex: 1 }}>
      <Header title='Tour List' leftContainer={<Pressable onPress={() => gotBackHandler()} style={styles.backIconContainer}><MaterialIcons name='arrow-back-ios' style={styles.backIcon} /></Pressable>} />
      {
        isLoading && page === 1 ? <Loader /> :
          (
            <FlatList
              data={toursData}
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={renderItem}
              ListEmptyComponent={() => {
                return <View style={styles.emptyContainer}><Text style={styles.text}>No data found.</Text></View>;
              }}
              onEndReachedThreshold={0.5}
              ListFooterComponent={() => {
                return isLoading && page !== 1 && <Loader />
              }}
              onEndReached={() => {
                if (!isLoading && loadNext) {
                  let newPage = page + 1;
                  getToursApi(newPage);
                  setPage(newPage);
                }
              }}
            />
          )
      }
    </Container>
  );
};

export default ToursList;
