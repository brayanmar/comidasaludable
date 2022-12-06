import { Route, Routes } from 'react-router-dom';
import Home from './component/home/home';
import Form from './component/form/form';
import Lading from './component/landing/lading';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Lading />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
