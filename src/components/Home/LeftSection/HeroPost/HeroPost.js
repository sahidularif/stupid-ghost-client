import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import pImage from '../../../../images/167221-original.jpg';
const HeroPost = () => {
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
    const post = posts.find(post => post.id == 1);
    return (
        <Container fluid>
            <Row className="g-0">
                <Col md={11} fluid className="g-0 m-auto">
                    
                    <Image src={post.coverImage} fluid alt="hero image" rounded />
                    <span><CategoryIcon style={{ fontSize: 20 }} /> Tech </span>
                    <span><AccessTimeIcon style={{ fontSize: 20 }} /> 24 June 2021</span>
                    <h4>{post.postTitle}</h4>
                    <span><PersonIcon style={{ fontSize: 20 }} /> Sahidul Arif </span>
                    <span><VisibilityIcon style={{ fontSize: 20 }} /> Views: 575 </span>
                    <span><ShareIcon style={{ fontSize: 20 }} /> Share: 150 </span>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroPost;