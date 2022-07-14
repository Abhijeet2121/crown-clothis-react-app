// import './categories.styles.scss'
import {Routes, Route,} from 'react-router-dom';

import Home from './routes/home/home';
import Navagation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';

const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Navagation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
  );
}

export default App;
