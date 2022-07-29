import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Landing from './pages/Landing';
import Login from './pages/Login';
import Search from './pages/Search';
import NewFile from './pages/NewFile';
import Error from './pages/Error';

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing />} />
          <Route path='/login' element={<Login />} />

          <Route path='/search' element={<Search />} />
          <Route path='/newfile' element={<NewFile />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
