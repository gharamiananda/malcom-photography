import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import useService from '../hook/useService';
import './ServiceDetail.css';
import { useForm } from "react-hook-form";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ServiceDetail = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([])
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch(`https://dry-scrubland-05272.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [id])

    // console.log(details);

    const { name, price, desc, picture } = details;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleOrder = () => {
        console.log("order");
        toast(`Dear, ${user.email}  your order ${name}  Successfully placed`)
        setShow(false);
    }

    return (
        <div className='pt-5 container'>
            <div className="pt-5 row align-items-center">

                <div className="col-md-6">
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                    <p>{desc}</p>
                    <img src={picture} alt="" className='img-fluid   service-img' />
                </div>
                <div className="col-md-6">

                    <div class="row main">
                        <div class="main-login main-center">
                            <h5>Fill the form to purchase</h5>



                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">
                                    <label for="name" class="cols-sm-2 control-label">Your Name</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="name" id="name" placeholder="Enter your Name" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email" class="cols-sm-2 control-label">Your Email</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" value={user?.email} name="email" id="email" placeholder="Enter your Email" />
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label for="username" class="cols-sm-2 control-label">Your Address</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                            <textarea type="text" class="form-control" name="username" id="username" placeholder="Enter your Address" {...register('address')} />
                                        </div>
                                    </div>
                                </div>



                                <input type="submit" onClick={handleShow} class="btn btn-primary btn-lg btn-block login-button" />
                            </form>



                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm Order</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h2>{name}</h2>
                                    <h2>{price}</h2>
                                    <p>{desc}</p>
                                    <img src={picture} alt="" className='img-fluid   service-img' />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleOrder}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                </div>


            </div>
            <ToastContainer />

        </div >
    );
};

export default ServiceDetail;