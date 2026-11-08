import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import GoodList from '../components/GoodList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchGoods, fetchTypes } from '../http/goodApi';

const Shop = observer(() => {
    const {good} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => good.setTypes(data))
        fetchBrands().then(data => good.setBrands(data))
        fetchGoods().then(data => {good.setGoods(data.rows)})
    }, [])

    useEffect(() => {
        fetchGoods(good.selectedType.id, good.selectedBrand.id).then(data => {good.setGoods(data.rows)})
    }, [good.selectedType, good.selectedBrand,])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md = {3}>
                    <TypeBar/>
                </Col>
                <Col md = {9}>
                    <BrandBar />
                    <GoodList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;