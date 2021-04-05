import React from 'react';
import { Col, Media, Row } from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_PRODUCTS = gql`
query blog ($type:String!) {
    blog(type:$type){
    img
   	link
    title
    desc
    date
    longDesc
    shortDesc
  }
} 
`;


const BlogList = () => {

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: 'fashion'
        }
    });

    return (
        <>
            {/* // <!--Blog List start--> */}
            
                {data && data.blog.map((item, i) =>
                    <Row className="blog-media" key={i}>
                        <Col xl="6">
                            <div className="blog-left">
                                <a href="#"><Media src={item.img}
                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                            </div>
                        </Col>
                        <Col xl="6">
                            <div className="blog-right">
                                <div>
                                    <h6>{item.title}</h6><a href="#">
                                        <h4>{item.shortDesc}</h4>
                                    </a>
                                    <ul className="post-social">
                                        <li>Posted By : Admin Admin</li>
                                        <li><i className="fa fa-heart"></i> 5 Hits</li>
                                        <li><i className="fa fa-comments"></i> 10 Comment</li>
                                    </ul>
                                    <p>{item.longDesc}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                )}
            {/* <!--Blog List start--> */}
        </>
    )
}

export default BlogList;