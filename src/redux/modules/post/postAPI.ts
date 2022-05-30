import axios from 'axios';
import { SUBDIRECTORY } from '@utils/constants';

export default async function customFetch(type = 'new') {
  const response = await axios.get(
    `${process.env.API_REDDIT_URL}/${SUBDIRECTORY}/${type}.json`,
  );

  return response.data;
}
