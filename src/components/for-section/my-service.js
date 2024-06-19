import React from 'react';
function MyService() {
    return (
        <div className="bg-my-few-dark ability-part" id="service">
            <p className="section-heading">
                My <span className="orange">'Services'</span>
            </p>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 mt-4">
                        <table className="table table-bordered text-light bg-my-dark">
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
                </div>
            </div>

        </div>
    );
}

export default MyService;