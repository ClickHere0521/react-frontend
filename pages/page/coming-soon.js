import React from 'react';

const ComingSoon = () => {
    return (
        <>
            <div className="template-password">
                <div className="container">
                    <div id="container" className="text-center">
                        <div>
                            <div id="login">
                                <div>
                                    <div className="logo mb-4">
                                        <a href="#">
                                            <img src="../assets/images/icon/logo.png" alt="Multikart_fashion" className="img-fluid" />
                                        </a>
                                    </div>
                                    <h2 className="mb-3">
                                        Will be Opening Soon!
                            </h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form action="#" className="theme-form">
                                            <div className="col-md-12 mt-2">
                                                <h3>Enter Your Email: </h3>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-12">
                                                    <input type="password" name="password" id="password" className="form-control"
                                                        autoFocus="" />
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="actions">
                                                        <button type="submit" className="btn btn-solid">notify me</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div id="footer" className="mt-4">
                                    <div id="owner">
                                        Are you the store owner? <a href="#">Log in here</a> or <a href="#">change your password
                                    settings</a>
                                    </div>
                                </div>
                            </div>
                            <div id="powered">
                                <p>© 2021, Powered by Multikart.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ComingSoon;