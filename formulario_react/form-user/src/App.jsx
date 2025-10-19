import Label from './components/Label'
import Input from './components/Input'

export default function App() {
  return <>
    <form className='container form'>
      <Label para="email">Email</Label>
      <Input />
      <Label>Senha</Label>
      <Input />
    </form>
  </>
} 