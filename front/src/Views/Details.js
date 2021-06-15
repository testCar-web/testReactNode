import React from 'react'
import Navbar from '../components/navbar/navbar';
import { FosseData } from '../components/data/FosseData';
import {InputGroup,FormControl,Button} from 'react-bootstrap';


export default function Details() {

    const url = window.location.pathname;
    const urlTab = url.split('/');
    const id = urlTab[2];
    const res = FosseData.find(item => item.id == id);

    return (
        <div>
            <Navbar></Navbar>
            <div className="content_detail">
                <div className="cadre_img">
                    <img src={res.image} />
                </div>
                <form className="cmt">
                    <InputGroup>
                        <InputGroup.Text>Commentaire</InputGroup.Text>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <Button variant="outline-primary" className="btn_cmt">Commenter</Button>
                </form>
            </div>
        </div>
    )
}
