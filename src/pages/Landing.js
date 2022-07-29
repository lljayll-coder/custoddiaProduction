import landingImage from '../assets/images/main.svg'

import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div>
            <nav>
                
            </nav>
    
            <div className='container page' style={{paddingLeft: 70}}>
                <h1>
                    Scalable <span style={{color: '#2cb1bc'}}>Secure</span> Services
                </h1>
                <p>Custoddia provides businesses with software solutions that are secure, low cost and scalable.</p>
                <Link to='/login' className='btn'>Login/Register</Link>
            </div>
            <img src={landingImage}  style={{ height: 600, width: 1350, paddingLeft: 500 }} alt='safe secure services' className='img main-img'/>
        </div>
      )
}
