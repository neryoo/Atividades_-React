import Nome from './components/Nome'
import Diretor from './components/Diretor'
import Ano from './components/Ano'
import Estilo from './components/Estilo'
import Review from './components/Review'
import Nota from './components/Nota'
import Enviar_button from './components/Enviar_button'
import Form from './components/Form'


export default function App(){
    return<>
    <h1>CADASTRO DE FILMES</h1>
        <form>
            <label htmlFor="">Nome</label>
            <Nome/>
            <label htmlFor="">Diretor</label>
            <Diretor/>
            <label htmlFor="">Ano</label>
            <Ano/>
            <label htmlFor="">Estilo</label>
            <Estilo/>
            <label htmlFor="">Nota</label>
            <Nota/>
            <label htmlFor="">Review</label>
            <Review/>
            <Enviar_button/>

        </form>
    </>
}

