import buy from './Images/c1.jpg';
import sell from './Images/c2.jpg';
// import './Service.css';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <section id='header' className='left-section d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-lg-6 pt-lg-0 order-1 order-lg-1 left-image d-flex flex-direction-column'>
                                    <NavLink to='/sell'>  <button className='btn btn-success btn-get-started'>Sell</button></NavLink>
                                    <img src={sell} className='img-fluid service-images ' alt='sell image' />
                                </div>
                                <div className='col-lg-6 order-2 order-lg-2 d-flex flex-direction-column'>
                                    <NavLink to='/buy'>  <button className='btn btn-success btn-get-started'>buy</button></NavLink>
                                    <img src={buy} className='img-fluid service-images right-image' alt='buy image' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;