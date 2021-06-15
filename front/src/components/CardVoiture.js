import React from 'react';
import { Link } from 'react-router-dom';


export default function CardVoiture(props) {
    const { id , mark, image } = props;
    return (
        <div>
            <div className="block_car">
                    <div className="img_car">
                        <Link to={`/details/${id}`}>
                            <img src={image} className="car"/>
                        </Link>
                        <h5 style={{textAlign:"center"}}>{mark}</h5>
                    </div>                      
            </div>
        </div>
    )
}
