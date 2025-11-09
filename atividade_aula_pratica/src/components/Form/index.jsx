import Inputs from "../Inputs"
import Checkbox from "../Checkbox"
import Botao from "../Botao"


function Form(){
    return<>
    <h2>Please enter your details</h2>
    <h1>Welcome back</h1>
    <Inputs nome="Email adress"/>
    <Inputs nome="Password"/>
    <Checkbox nome="Remember for 30 days."/>
    <Botao nome="Sign up"/>
    <Botao nome="Sign in with Google"/>
    <p>Don't have an account? </p> <a href="https://www.google.com/intl/pt-BR/account/about/">Sign up</a>
    
    </>
}

export default Form