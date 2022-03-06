import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/store';
import Loader from '../components/loader/loader.component';

const PersistProvider = ({ children }) => {
  return <PersistGate loading={<Loader />} persistor={persistor}>{children}</PersistGate>;
};

export default PersistProvider;
