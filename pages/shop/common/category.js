import React, { useState, useContext } from 'react';
import { Collapse } from 'reactstrap';
import FilterContext from '../../../helpers/filter/FilterContext';

const Category = () => {
    const context = useContext(FilterContext);
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
    const setSelectedCategory = context.setSelectedCategory;
    const [url, setUrl] = useState();

    const updateCategory = (category) => {
        context.setSelectedBrands([])
        const pathname = window.location.pathname;
        setUrl(pathname);
        setSelectedCategory(category);

    }

    return (
        <>
            <div className="collection-collapse-block open">
                <h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
                <Collapse isOpen={isCategoryOpen}>
                    <div className="collection-collapse-block-content">
                        <div className="collection-brand-filter">
                            <ul className="category-list">
                                <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
                                <li><a href={null} onClick={() => updateCategory("fashion")}>fashion</a></li>
                                <li><a href={null} onClick={() => updateCategory("electronics")}>electronics</a></li>
                                <li><a href={null} onClick={() => updateCategory("vegetables")}>vegetables</a></li>
                                <li><a href={null} onClick={() => updateCategory("furniture")}>furniture</a></li>
                                <li><a href={null} onClick={() => updateCategory("jewellery")}>jewellery</a></li>
                                <li><a href={null} onClick={() => updateCategory("beauty")}>beauty</a></li>
                                <li><a href={null} onClick={() => updateCategory("flower")}>flower</a></li>
                                <li><a href={null} onClick={() => updateCategory("tools")}>tools</a></li>
                                <li><a href={null} onClick={() => updateCategory("watch")}>watch</a></li>
                                <li><a href={null} onClick={() => updateCategory("metro")}>metro</a></li>
                                <li><a href={null} onClick={() => updateCategory("shoes")}>shoes</a></li>
                                <li><a href={null} onClick={() => updateCategory("bags")}>bags</a></li>
                                <li><a href={null} onClick={() => updateCategory("kids")}>kids</a></li>
                                <li><a href={null} onClick={() => updateCategory("pets")}>PETS</a></li>
                                <li><a href={null} onClick={() => updateCategory("goggles")}>goggles</a></li>
                                <li><a href={null} onClick={() => updateCategory("game")}>game</a></li>
                                <li><a href={null} onClick={() => updateCategory("gym")}>gym</a></li>
                                <li><a href={null} onClick={() => updateCategory("nursery")}>nursery</a></li>
                                <li><a href={null} onClick={() => updateCategory("videoslider")}>videoslider</a></li>
                                <li><a href={null} onClick={() => updateCategory("marketplace")}>marketplace</a></li>
                                <li><a href={null} onClick={() => updateCategory("marijuana")}>marijuana</a></li>
                            </ul>
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Category;