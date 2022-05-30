import { Provider } from 'react-redux';
import store from '../src/redux/store';

interface Props {
  children: React.ReactNode;
  mockStore: any;
}

function MockProvider({ children = null, mockStore = null }: Props) {
  return <Provider store={mockStore || store}>{children}</Provider>;
}

export default MockProvider;
