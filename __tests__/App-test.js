/**
 * @format
 */

import 'react-native';
import API from '../App/Api';

test('App Real API function', async () => {
  const response = await API.getToursApi(
    {
      lat: 37.3382082,
      lng: -121.8863286,
    },
    1,
  );
  expect(response.success).toBeTruthy();
  expect(response.data).not.toHaveLength(0);
  expect(response.data[0]).toContainAllKeys([
    'path',
    'average_rating',
    'booking_flow_type',
    'city',
    'city_id',
    'duration_in_minutes',
    'favorited',
    'id',
    'name',
    'number_of_reviews',
    'price_in_usd',
    'thumbnail_url',
  ]);
});
