import './App.css';
import VideoCard from './components/videoCard';
import { Provider } from 'react-redux';
import store from './utils/Store';

function App() {
  return (
    <Provider  store={store}>

    <VideoCard />

    </Provider>
  );
}

export default App;
