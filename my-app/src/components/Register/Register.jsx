import './Register.css';
import Form from './Form/Form';

export default function Register() {

    return (
      <div className="Login">
        <section className="container">
        <div className="Texto">
          <p>Registro</p>
        </div>
        <div className="form">
          <Form />
        </div>
        </section>
      </div>
    )
  }