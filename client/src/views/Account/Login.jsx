import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { history } from '../../_helpers'
import { BsFillPersonCheckFill } from "react-icons/bs";

import { accountService } from '../../_services'

function Login() {
    useEffect(() => {
        if (accountService.userValue) {
            history.push('/account');
        }
    }, []);

    const { handleSubmit, register, errors } = useForm();
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = (values) => {
        accountService.login(values)
            .then(() => {
                history.push('/account');
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
                <div className="auth-content">
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
                                    <h3 className="">Welcome back, Login</h3>

                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email"
                                            ref={register({
                                                required: "Required",
                                                pattern: {
                                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                  message: "Invalid email address"
                                                }
                                              })}
                                        />
                                        <small className="isError">{errors.email && errors.email.message}</small>
                                    </div>

                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                        <input type="password" name="password" id="password" placeholder="Password"
                                            ref={register({
                                                required: "Required",
                                            })}
                                        />
                                        <small className="isError">{errors.password && errors.password.message}</small>
                                    </div>
                                    <p className="forgot-password"><Link to="">Forgot Password</Link></p>

                                    <button type="submit" className="btn">Login</button>
                                    <p className="">Don't have an account? <Link to="/register">Create one</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;