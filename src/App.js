import './categories.styles.scss'
import Home from './routes/home/home';
import Navagation from './routes/navigation/navigation';
import {Routes, Route,} from 'react-router-dom';
import SignIn from './routes/signIN/signIn';

function Shop(){
  return (
    <h1>I am The Shop</h1>
  )
}

function App() {

  return (
      <Routes>
        <Route path='/' element={<Navagation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='sign-in' element={<SignIn/>}/>

        </Route>
      </Routes>
  );
}

export default App;
