import { ApiClient } from './client.api';
import { METHODS } from './constants.api';
import ApiFetchError from './errors/ApiFetchError';

const basePath = "product-list";

export const fetchApiProducts = async () => {
  try {
    const { data } = await ApiClient.get(basePath);
    return data;
  } catch (err) {
    throw new ApiFetchError(err, METHODS.GET, basePath);
  }
}

export const fetchApiSingleProduct = async (id) => {
  const path = `${basePath}/${id}`

  try {
    const { data } = await ApiClient.get(path);
    return data;
  } catch (err) {
    throw new ApiFetchError(err, METHODS.GET, path);
  }
}

