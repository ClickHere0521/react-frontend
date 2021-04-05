import React, { useState ,useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Collapse } from 'reactstrap';
import FilterContext from '../../../helpers/filter/FilterContext';

const GET_COLOR = gql`
    query getColors($type:String)  {
        getColors(type: $type){
            colors
        }
    }
`;

const Color = () => {
    const context = useContext(FilterContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    var { loading, data } = useQuery(GET_COLOR, {
        variables: {
            type: context.state
        }
    })

    return (
        <div className="collection-collapse-block open">
            <h3 className="collapse-block-title" onClick={toggle}>colors</h3>
            <Collapse isOpen={isOpen}>
                <div className="collection-collapse-block-content">
                    <div className="color-selector">
                        <ul>
                            {(!data || !data.getColors || data.getColors.colors.length === 0 || loading) ?
                                <h4>Loading</h4>
                                :
                                data.getColors.colors.map((color, i) =>
                                <li className={`${color} ${context.selectedColor === color? 'active' : ''}`} onClick={() => {context.setSelectedColor(color)
                            }} key={i}></li>
                                    
                                )
                            }
                        </ul>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default Color;