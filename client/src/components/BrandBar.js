import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {good} = useContext(Context)
    return (
        <Row className='d-flex'>
            {good.brands.map(brand => 
                <Card
                    key={brand.id}
                    className='p-3'
                    onClick={() => good.setSelectedBrand(brand)}
                    style={{
                        border: '1px solid #D2D2D2',
                        backgroundColor: brand.id === good.selectedBrand.id ? "#DC3545" : "white",
                        color: brand.id === good.selectedBrand.id ? "white" : "black", 
                        width: 165}}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;