import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Main from './components/Main';
import LoginScreen from './screen/loginScreen/LoginScreen';
import WatchScreen from './screen/watchScreen/WatchScreen';
import SearchScreen from './screen/searchScreen/SearchScreen';
import SubscriptionScreen from './screen/subscriptionScreen/SubscriptionScreen';
import ChannelScreen from './screen/channelScreen/ChannelScreen';

import './_app.scss';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Main />} />
    <Route path="/auth" element={<LoginScreen />} />
    <Route path="/watch/:id" element={<WatchScreen />} />
    <Route path="/search/:query" element={<SearchScreen />} />
    <Route path="/feed/subscriptions" element={<SubscriptionScreen />} />
    <Route path="/channel/:channelId" element={<ChannelScreen />} />
    <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
