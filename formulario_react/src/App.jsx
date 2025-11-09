import Nome from './components/Nome'
import Diretor from './components/Diretor'
import Ano from './components/Ano'
import Estilo from './components/Estilo'
import Review from './components/Review'
import Nota from './components/Nota'
import Enviar_button from './components/Enviar_button'
import Form from './components/Form'
import './App.css'




export default function App(){
    return<>
    <div class="container">
        <Form/>
            <Nome/>
            <Diretor/>
            <Ano/>
            <Estilo/>
            <Nota/>
            <label htmlFor="">Review</label>
            <Review/>
            <Enviar_button/>
        </div>
    </>
}

