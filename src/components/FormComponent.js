import React from 'react';

export const Form = (props)=>{
    return(
        <div className="container">
            <div>{props.error ? error(): null }</div>
            <form onSubmit={props.loadWeather}>
            <div className="row">
                <div className="col-12 col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" placeholder="Enter city" autoComplete="off" />
                </div>
                <div className="col-12 col-md-3">
                    <input type="text" className="form-control" name="country" placeholder="Enter Country" autoComplete="off" />
                </div>
                <div className="col-12 col-md-3 mt-md-0 text-md-left">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    );
}

const error=()=> {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please enter the city and country
        </div>
    );
}