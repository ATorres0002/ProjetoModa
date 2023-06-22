import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Novidades from './Pages/Novidades';
import SobreNos from './Pages/SobreNos';
import Noticias from './Pages/Noticias';
import Header from './components/Header';
import Erro from './Pages/Erro';

function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            
            <Route path='/' element={<Home/>} />  
            <Route path='/novidades' element={<Novidades/>}/>
            <Route path='/sobre' element={<SobreNos/>}/>
            <Route path='/noticias' element={<Noticias/>}/>
            <Route path='*' element={<Erro/>}/>

        </Routes>
        </BrowserRouter>
    )

}
export default RouterApp;