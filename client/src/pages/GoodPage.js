import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { addToBasket, fetchOneGood } from '../http/goodApi';

const GoodPage = () => {
    const [good, setGood] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneGood(id).then(data => setGood(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('goodId', id)
        addToBasket(formData).then(response => alert(`Товар ` + good.name + ` был добавлен в вашу корзину!`))
    }

    return (
        <Container className='mt-3'>
            <Row>
            <Col md = {4}>
                <Image width = {300} height={300} src={process.env.REACT_APP_API_URL + good.img} />
            </Col>
            <Col md = {4}>
                <Row className='d-flex flex-column align-items-center'>
                    <h2>
                        {good.name}
                    </h2>
                </Row>
            </Col>
            <Col md = {4}>
                <Card className='d-flex flex-column align-items-center justify-content-around'
                style={{width: 300, height: 300, fontSize: 32, border: '5px solid #D2D2D2'}}>
                    <h3>
                        {good.price} руб
                    </h3>
                    <Button variant='danger' onClick={add}>
                        Добавить в корзину
                    </Button>
                </Card>
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'
            style={{width:300}}>
                <h1>Характеристики</h1>
                {good.info.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? '#D2D2D2' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default GoodPage;