import React from 'react';

function MyService(props) {
    return (
        <div className="bg-my-few-dark ability-part" id="service">
            <p className="section-heading">
                My <span className="orange">'Services'</span>
            </p>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-xl-6">
                        <table className="table table-bordered border-light text-light">
                            <thead>
                            <tr>
                                <th className="text-center">№</th>
                                <th>Service</th>
                                <th className="text-center">Experience</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Producing front-end part of web-applications</td>
                                <td className="text-success text-center">Yes <i
                                    className="bi bi-check-circle-fill"></i></td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>Making responsive-page</td>
                                <td className="text-success text-center">Yes <i
                                    className="bi bi-check-circle-fill"></i></td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>Making Fast Page</td>
                                <td className="text-success text-center">Yes <i
                                    className="bi bi-check-circle-fill"></i></td>
                            </tr>
                            <tr>
                                <td className="text-center">4</td>
                                <td>API-Integration</td>
                                <td className="text-success text-center">Yes <i
                                    className="bi bi-check-circle-fill"></i></td>
                            </tr>
                            <tr>
                                <td className="text-center">5</td>
                                <td>Authorization</td>
                                <td className="text-success text-center">Yes <i
                                    className="bi bi-check-circle-fill"></i></td>
                            </tr>
                            <tr>
                                <td className="text-center">6</td>
                                <td>Login</td>
                                <td className="text-success text-center">Yes <i
                                    className="bi bi-check-circle-fill"></i></td>
                            </tr>
                            <tr>
                                <td className="text-center">7</td>
                                <td>Private-Page</td>
                                <td className="text-success text-center">Yes <i
                                    className="bi bi-check-circle-fill"></i></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*<div className="col-12">*/}
                    {/*    <p className="text-light text-center my-5 section-heading">*/}
                    {/*        <span className="orange">'Programs'</span> I use*/}
                    {/*    </p>*/}

                    {/*    <div className="borde border-ligh my-4 py-3 container-fluid px-4">*/}
                    {/*        <div className="row justify-content-center">*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img1} alt="" className="w-100"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img2} alt="" className="w-100"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img3} alt="" className="w-100"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img4} alt="" className="w-100"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img5} alt="" className="w-100 bg-light rounded-circle p-1"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img6} alt="" className="w-100"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img7} alt="" className="w-100"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-2 col-4 my-3">*/}
                    {/*                <img src={img8} alt="" className="w-100"/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    );
}

export default MyService;