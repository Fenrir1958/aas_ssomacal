import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FaEye } from "react-icons/fa6";
import './Formlogin.css'
import './Button.css'

const Formlogin = () => {
    return (
        <Form id="login" action="index.html">
            <div className="mb-3">
                <Form.Label className="form-label">Dirección de correo</Form.Label>
                <Form.Control id="email" placeholder="nombre@ssomacal.com" type="email" />
            </div>
            <div className="mb-3">
                <Form.Label className="form-label">Contraseña</Form.Label>
                <InputGroup className="input-group-merge input-group">
                    <Form.Control id="password" placeholder="Ingresa tu contraseña" type="password" />
                    <span id="showPassword" className="input-group-text">
                        <FaEye aria-hidden="true" />
                    </span>
                </InputGroup>
            </div>
            <Button type="button" className="w-100 mb-3 btn-lg btn-login">
                Iniciar sesión
            </Button>{' '}
        </Form>
    )
}

export default Formlogin