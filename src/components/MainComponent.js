import React from 'react';
import {Card,CardBody,CardTitle} from 'reactstrap';

const minMaxTemp = (min,max)=>{
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
};

export const Main = (props) =>{
    return(
        <div className="container">
                    <Card>
                        <CardTitle>
                            <h1>{props.city} {props.country}</h1>
                            <h5 className="py-2">
                                {props.icon ? <img src={props.icon} alt="weather icon"/> : null}
                            </h5>
                        </CardTitle>
                        <CardBody>
                            <div>
                                {props.temp ? <h2 className="py-2">{props.temp}&deg;</h2>: null}
                                {props.temp_min && props.temp_max ? minMaxTemp(props.temp_min,props.temp_max) : null}
                                {props.description ? <h6>{props.description}</h6> : null}
                            </div>
                        </CardBody>
                    </Card>
                </div>
    );
}