import Logo from './Logo';
import Title from './Title';
import Formlogin from './Formlogin';
import './Container.css'


const Container = () => {
    return (
        <div className="bg-login d-flex align-items-center min-vh-100">
            <div className="container">
                <div className="justify-content-center row">
                    <div className="my-5 col-xl-4 col-md-5 col-12 p-5 bg-white rounded">
                        <Logo />
                        <Title />
                        <Formlogin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container