import React, { useContext } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GOOD_ROUTE } from '../utils/consts';
import { Context } from '../index';

const GoodItem = ({ good }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(GOOD_ROUTE + '/' + good.id);
  };

  return (
    <Col md={3} className={'mt-3'} onClick={handleClick}>
      <Card style={{ width: 150, cursor: 'pointer', border: '1px solid #D2D2D2' }}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + good.img} />
        <div className='text-black-50 mt-1 d-flex align-items-center'>
        </div>
        <div>
          {good.name}
        </div>
      </Card>
    </Col>
  );
};

export default GoodItem;