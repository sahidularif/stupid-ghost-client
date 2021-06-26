import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import pImage from '../../../images/167221-original.jpg'
const RightSection = () => {
    const posts = [
        {
            id: 1,
            coverImage: pImage,
            postTitle: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            postBody: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 2,
            coverImage: pImage,
            postTitle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            postBody: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            id: 3,
            coverImage: pImage,
            postTitle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            postBody: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
    const shortPost = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    }
    return (
        <Container fluid>

            {
                posts.map((post, index) =>
                    <Row className="g-0 m-2 d-flex border">
                        <Col md={4}>
                            <Image src={post.coverImage} fluid alt="hero image" rounded />
                        </Col>
                        <Col md={8}>
                            <h6>{post.postTitle.length > 30
                                ? shortPost(post.postTitle.slice(0, 35).trim() + '...')
                                : shortPost(post.postTitle).trim()
                            }</h6>
                            <span><PersonIcon style={{ fontSize: 20 }} /> Sahidul Arif </span>
                            <span><AccessTimeIcon style={{ fontSize: 20 }} /> 24 June 2021</span>
                        </Col>

                    </Row>
                )
            }

        </Container>
    );
};

export default RightSection;