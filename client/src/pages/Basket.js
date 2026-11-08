import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getBasket } from '../http/goodApi';

import { Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';


const Basket = observer(() => {
    const {good} = useContext(Context)

    useEffect(() => {
        getBasket().then(data => good.setBaskets(data))
    }, [])



    // ----- Считаем общую сумму, которую юзер набрал в корзину ------- //

    let prices = 0;
    {good.basket.map(price =>
        prices += Number(price.good.price)
    )}
    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Корзина</h1>



            {/* ------- Считаем общую сумму ------- */}

            <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h1 className="pr-2">Итого:</h1>
                <h3 className="pl-2">{prices}<span className="font-weight-light pl-2">рублей</span></h3>
            </Card>



            {good.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + product.good.img} width={50} />
                                <h1 className="pl-3">{product.good.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.good.price} рублей</h2>
                            </div>
                        </Col>
                    </Row>

                </Card>
            )}
        </Container>
    );
});

export default Basket;