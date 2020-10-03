import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { history } from '../../_helpers'
import { BsFillPersonCheckFill } from "react-icons/bs";

import { accountService } from '../../_services'

function Register() {
    useEffect(() => {
        if (accountService.userValue) {
            history.push('/account');
        }
    }, []);
    
    const { handleSubmit, register, errors } = useForm();
    const [states, setStates] = useState([]);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        // Fetching Nigeris states for registration
        fetch('http://locationsng-api.herokuapp.com/api/v1/states')
            .then(res => res.json())
            .then(data => setStates(data))
            .catch(error => console.log(error));
    }, []);

    const examCategory = ["0Level", "Primary", "Professional", "University"]

    const onSubmit = (values) => {
        accountService.register(values)
            .then(({ message }) => {
                history.push('/login');
                enqueueSnackbar(message, {
                    variant: 'success', autoHideDuration: 3000, preventDuplicate: true,
                    anchorOrigin: { horizontal: "right", vertical: "top" }
                });
            }).catch((error) => {
                enqueueSnackbar(error, {
                    variant: 'error', autoHideDuration: 3000, preventDuplicate: true,
                    anchorOrigin: { horizontal: "right", vertical: "top" }
                })
            })
    };

    return(
        <Fragment>
            <div className="auth-wrapper">
                <div className="auth-content col-lg-4 col-md-6">
                    <div className="auth-bg">
                        <span className="r"/>
                        <span className="r s"/>
                        <span className="r s"/>
                        <span className="r"/>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="form_wrapper">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <BsFillPersonCheckFill className="icon-lg" />
                                    <h3 className="">Sign Up</h3>

                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                <input type="text" name="firstname" placeholder="Firstname"
                                                    ref={register({
                                                        required: "Required",
                                                        pattern: {
                                                            value: /^[A-Za-z]+$/i,
                                                            message: "Invalid character"
                                                        }
                                                    })}
                                                />
                                                <small className="isError">{errors.firstname && errors.firstname.message}</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                <input type="text" name="lastname" placeholder="Lastname"
                                                    ref={register({
                                                        required: "Required",
                                                        pattern: {
                                                            value: /^[A-Za-z]+$/i,
                                                            message: "Invalid character"
                                                        }
                                                    })}
                                                />
                                                <small className="isError">{errors.lastname && errors.lastname.message}</small>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                        <input type="text" name="phone" placeholder="(+234) Phone"
                                            ref={register({
                                                required: "Required",
                                                pattern: {
                                                    value: /^[0][7-9]{1}[0-1]{1}[0-9]{8}$/i,
                                                    message: "Invalid phone number"
                                                }
                                            })}
                                        />
                                        <small className="isError">{errors.phone && errors.phone.message}</small>
                                    </div>

                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email"
                                            ref={register({
                                                required: "Required",
                                                pattern: {
                                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                  message: "invalid email address"
                                                }
                                              })}
                                        />
                                        <small className="isError">{errors.email && errors.email.message}</small>
                                    </div>

                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                        <input type="password" name="password" id="password" placeholder="Password"
                                            ref={register({
                                                required: "Required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum of 6 characters"
                                                },
                                                maxLength: {
                                                    value: 20,
                                                    message: "Maximum of 20 characters"
                                                }
                                            })}
                                        />
                                        <div id="hint">Passwords must be 6-20 characters and contain:
                                        </div>
                                        <small className="isError">{errors.password && errors.password.message}</small>
                                    </div>

                                    <div className="input_field select_option"><span><i aria-hidden="true" className="fa fa-address-book"></i></span>
                                        <select name="category"
                                            ref={register({
                                                required: "Required",
                                            })}
                                        >
                                            <option value="">Select Exam Category</option>
                                            {examCategory.map((cat, i) => (
                                                <option key={i} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                        <div className="select_arrow"></div>
                                        <small className="isError">{errors.category && errors.category.message}</small>
                                    </div>

                                    <div className="input_field select_option"><span><i aria-hidden="true" className="fa fa-map-marker"></i></span>
                                        <select name="state"
                                            ref={register({
                                                required: "Required",
                                            })}
                                        >
                                            <option value="states">Select a country</option>
                                            {states.map((state, i) => (
                                                <option key={i} value={state.name}>{state.name}</option>
                                            ))}
                                        </select>
                                        <div className="select_arrow"></div>
                                        <small className="isError">{errors.state && errors.state.message}</small>
                                    </div>

                                    <div className="form-group text-left">
                                        <div className="checkbox">
                                            <input type="checkbox" name="newsletter" id="checkbox-fill"
                                                ref={register({
                                                    required: "Required",
                                                })}
                                            />
                                            <label htmlFor="checkbox-fill">Send me the <a href="#"> Newsletter</a> weekly.</label>
                                        </div>
                                        <small className="isError">{errors.newsletter && errors.newsletter.message}</small>
                                    </div>

                                    <button type="submit" className="btn">REGISTER</button>
                                    <p className="">Already have an account? <Link to="/login">Login</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Register;