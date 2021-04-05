import React,{useState, useContext} from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Collapse ,Input } from 'reactstrap';
import FilterContext from '../../../helpers/filter/FilterContext';


const GET_BRAND = gql`
    query  getBrands($type:String) {
        getBrands(type: $type) {
            brand
        }
    }
`

const Brand = () => {
    
    const context = useContext(FilterContext);
    const isChecked = context.isChecked;
    const filterChecked = context.filterChecked
    const [isOpen, setIsOpen] = useState(false);
    const toggleBrand = () => setIsOpen(!isOpen);

    var { loading, data } = useQuery(GET_BRAND, {
        variables: {
            type: context.state
        }
    })

    return (
        <div className="collection-collapse-block open">
                <h3 className="collapse-block-title" onClick={toggleBrand}>brand</h3>
                <Collapse isOpen={isOpen}>
                    <div className="collection-collapse-block-content">
                        <div className="collection-brand-filter">
                            {(!data || !data.getBrands || data.getBrands.length === 0 || loading) ?
                                'loading'
                                :
                                data && data.getBrands.brand.map((brand, index) =>
                                    <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                        <Input
                                            checked={context.selectedBrands.includes(brand)}
                                            onChange={() => {
                                                    context.handleBrands(brand, isChecked),
                                                    context.setFilterChecked(brand, !filterChecked.isChecked)
                                            }}

                                            type="checkbox" className="custom-control-input" id={brand} />
                                        <label className="custom-control-label" htmlFor={brand}>{brand}</label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Collapse>
            </div>
    )
}

export default Brand;