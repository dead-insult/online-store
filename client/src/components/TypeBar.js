import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Context} from "../index"
import { ListGroup } from 'react-bootstrap';


const TypeBar = observer(() => {
    const {good} = useContext(Context)
    return (
        <ListGroup>
            {good.types.map(type => 
                <ListGroup.Item
                    active = {type.id === good.selectedType.id}
                    onClick={() => good.setSelectedType(type)}
                    key={type.id}
                    style={{
                        marginLeft: -90,
                        cursor: 'pointer',
                        border: '1px solid #D2D2D2',
                        backgroundColor: type.id === good.selectedType.id ? "#DC3545" : "white",
                        width: 250}}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;