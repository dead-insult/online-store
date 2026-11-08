import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateGood from '../components/modals/CreateGood';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [goodVisible, setGoodVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant='dark'
            className='mt-4 p-2'
            onClick={() => setTypeVisible(true)}
            >Добавить тип</Button>
            <Button variant='dark'
            className='mt-4 p-2'
            onClick={() => setBrandVisible(true)}
            >Добавить бренд</Button>
            <Button variant='dark'
            className='mt-4 p-2'
            onClick={() => setGoodVisible(true)}
            >Добавить товар</Button>
            <CreateBrand show = {brandVisible} onHide = {() => setBrandVisible(false)}/>
            <CreateType show = {typeVisible} onHide = {() => setTypeVisible(false)}/>
            <CreateGood show = {goodVisible} onHide = {() => setGoodVisible(false)}/>
        </Container>
    );
};

export default Admin;