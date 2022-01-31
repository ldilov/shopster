import { ApiClient } from './client.api';
import { METHODS } from './constants.api';
import ApiFetchError from './errors/ApiFetchError';

const basePath = "product-list";

const fetchApiProducts = async () => {
  try {
    const { data } = await ApiClient.get(basePath);
    return data;
  } catch (err) {
    throw new ApiFetchError(err, METHODS.GET, basePath);
  }
}

export default fetchApiProducts;
