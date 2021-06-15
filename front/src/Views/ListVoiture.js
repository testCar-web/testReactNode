import React from 'react';
import Navbar from '../components/navbar/navbar'
import CardVoiture from '../components/CardVoiture';
import { FosseData } from '../components/data/FosseData';


export default function ListVoiture() {
    return (
        <div>
            <Navbar></Navbar> 
            <h1 style={{textAlign:'center', fontWeight:'bold', color:'#00aaff', marginTop:30}}>List Car</h1>
            <div className="compo_list">
                {
                    FosseData.map((elt) => (<CardVoiture image={elt.image} mark={elt.mark} id={elt.id} ></CardVoiture>))
                }
            </div>
           
        </div>
    )
}
