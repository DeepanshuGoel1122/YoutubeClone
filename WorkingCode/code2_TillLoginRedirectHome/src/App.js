import LoginScreen from './screen/loginScreen/LoginScreen';
import Main from './components/Main';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './_app.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Main />} />
    <Route path="/auth" element={<LoginScreen />} />
    <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
