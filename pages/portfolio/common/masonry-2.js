import React, { useState } from 'react';
import { Container, Media } from 'reactstrap';
import Masonry from 'react-masonry-css';
import { allData, fashionData, bagsData, shoesData, watchData } from '../../../data/portfolioData';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';


const MasonryTwoPage = ({colClass, grid, fluid}) => {

    const [activeTab, setActiveTab] = useState('portfolio');

    return (
        <>
            <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
                <Container fluid={fluid}>
                    <Tabs>
                        <TabList align="center" id="form1">
                            <Tab className={`filter-button project_button ${activeTab == 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')} data-filter="all">All</Tab>
                            <Tab className={`filter-button project_button ${activeTab == 'fashion' ? 'active' : ''}`} onClick={() => setActiveTab('fashion')} data-filter="fashion">Fashion</Tab>
                            <Tab className={`filter-button project_button ${activeTab == 'bags' ? 'active' : ''}`} onClick={() => setActiveTab('bags')} data-filter="bags">Bags</Tab>
                            <Tab className={`filter-button project_button ${activeTab == 'shoes' ? 'active' : ''}`} onClick={() => setActiveTab('shoes')} data-filter="shoes">Shoes</Tab>
                            <Tab className={`filter-button project_button ${activeTab == 'watch' ? 'active' : ''}`} onClick={() => setActiveTab('watch')} data-filter="watch">Watch</Tab>
                        </TabList>
                        <Container fluid={fluid}>
                            <TabPanel>
                                <Masonry
                                    breakpointCols={grid}
                                    className="isotopeContainer row"
                                    columnClassName={`isotopeSelector ${colClass}`}
                                >
                                    {allData.length > 0 ?
                                        allData.map((item, index) =>
                                            <div className="overlay" key={index}>
                                                <div className="border-portfolio">
                                                    <div>
                                                        <Media src={item.img} className="img-fluid blur-up lazyload" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        '!! No Blogs Found'}
                                </Masonry>

                            </TabPanel>
                            <TabPanel>

                                <Masonry
                                    breakpointCols={grid}
                                    className="isotopeContainer row"
                                    columnClassName={`isotopeSelector ${colClass}`}
                                >
                                    {fashionData.length > 0 ?
                                        fashionData.map((item, index) =>
                                            <div className="overlay" key={index}>
                                                <div className="border-portfolio">
                                                    <a href={item.img}>
                                                        <div className="overlay-background">
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={item.img} className="img-fluid blur-up lazyload" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) :
                                        '!! No Blogs Found'}
                                </Masonry>

                            </TabPanel>
                            <TabPanel>

                                <Masonry
                                    breakpointCols={grid}
                                    className="isotopeContainer row"
                                    columnClassName={`isotopeSelector ${colClass}`}
                                >
                                    {bagsData.length > 0 ?
                                        bagsData.map((item, index) =>
                                            <div className="overlay" key={index}>
                                                <div className="border-portfolio">
                                                    <a href={item.img}>
                                                        <div className="overlay-background">
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={item.img} className="img-fluid blur-up lazyload" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) :
                                        '!! No Blogs Found'}
                                </Masonry>

                            </TabPanel>
                            <TabPanel>
                                <Masonry
                                    breakpointCols={grid}
                                    className="isotopeContainer row"
                                    columnClassName={`isotopeSelector ${colClass}`}
                                >
                                    {shoesData.length > 0 ?
                                        shoesData.map((item, index) =>
                                            <div className="overlay" key={index}>
                                                <div className="border-portfolio">
                                                    <a href={item.img}>
                                                        <div className="overlay-background">
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={item.img} className="img-fluid blur-up lazyload" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) :
                                        '!! No Blogs Found'}
                                </Masonry>
                            </TabPanel>
                            <TabPanel>
                                <Masonry
                                    breakpointCols={grid}
                                    className="isotopeContainer row"
                                    columnClassName={`isotopeSelector ${colClass}`}
                                >
                                    {watchData.length > 0 ?
                                        watchData.map((item, index) =>
                                            <div className="overlay" key={index}>
                                                <div className="border-portfolio">
                                                    <a href={item.img}>
                                                        <div className="overlay-background">
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={item.img} className="img-fluid blur-up lazyload" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) :
                                        '!! No Blogs Found'}
                                </Masonry>
                            </TabPanel>
                        </Container>
                    </Tabs>
                </Container>
            </section>
        </>
    )
}

export default MasonryTwoPage;
