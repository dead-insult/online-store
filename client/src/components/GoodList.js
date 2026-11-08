import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import GoodItem from './GoodItem';

const GoodList = observer(() => {
    const {good} = useContext(Context)
    return (
        <Row className='d-flex'>
            {good.goods.map(good => 
                <GoodItem key={good.id} good = {good}/>
            )}
        </Row>
    );
});

export default GoodList;