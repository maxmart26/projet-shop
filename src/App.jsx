import { Routes ,Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import Log from '../pages/Log.jsx';
import Registration from '../pages/registration.jsx';
import Viande from '../pages/viande.jsx';
import Produit from '../pages/Produit.jsx';
import AddProduit from '../pages/pages-admin/add-produit.jsx';

function App() {
  return (
    <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/log' element={<Log />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/viande' element={<Viande />}/>
          <Route path='/produit/:id' element={<Produit />}/>
          <Route path='/add-produit' element={<AddProduit />}/>
          <Route path='*' element={<h1>404</h1>}/>
          <Route path='/a-propos' element={<h1>A propos</h1>}/>

        </Routes>
  )
}

export default App
