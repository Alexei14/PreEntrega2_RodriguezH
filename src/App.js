
import './App.css';
import NavBar from './componentes/navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './componentes/itemdetailcontainer/itemdetailcontainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 not found</h1>}/>

     </Routes>
     </BrowserRouter>     

    </div>
  );
}

export default App;
