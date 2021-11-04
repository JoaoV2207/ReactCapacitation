import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Form.css'
import axios from 'axios';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmuit(event){
        event.preventDefault();
        axios.post('/users/login', {email, password}).then((res) => history.push('/'))
        .catch((err) => alert(err))
    }

  
    return (
        <div className="Form">
          <form method="POST" onSubmit = {handleSubmuit}>
            <div className="container2">
                <br />
              <div id="Email">
                <label htmlFor='email'><p>Login:</p></label>
                <input type='text' placeholder="Digite seu email" name="email"
                  required onChange={handleEmailChange} value = {email}
                  />
              </div>
              <div id="Password">
                <input id="form-bottom" type="password"
                  placeholder="Digite sua senha"
                  name="password" required onChange = {handlePasswordChange} value = {password}
                  />
                <span className="password">
                  <Link to="">
                    Esqueci minha senha
                  </Link>
                </span>
              </div>
              <button type="submit">Entrar</button>
              <br className="unselectable" />
              <br className="unselectable" />
            </div>
          </form>
        </div>
      )
    }