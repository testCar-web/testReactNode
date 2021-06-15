import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import vhome from '../assets/images/vb.webp';
import Navbar from '../components/navbar/navbar'

export default function Home(props) {

    

    return (
        <div className="contenair">
            <Navbar></Navbar>
            <div className="content_home">
                <h2 style={{marginTop:"5%", fontFamily:"roboto", fontWeight:'bold', color:'#00aaff'}}>App node react</h2>
                <img src={vhome} style={{marginTop:'7%'}}/>
            </div>
            
        </div>
    )
}
