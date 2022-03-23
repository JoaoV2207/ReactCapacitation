import './Register.css';
import Form from './Form/Form';
import Welcome from './Welcome/Welcome';

export default function Register() {

    return (
      <div className="Login">
        <section className="container">
        <div className="texto">
          <Welcome />
        </div>
        <div className="form">
          <Form />
        </div>
        </section>
      </div>
    )
  }