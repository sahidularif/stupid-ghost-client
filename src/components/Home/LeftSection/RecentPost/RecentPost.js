import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import pImage from '../../../../images/167221-original.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const [recentPost, setRecentPost] = useState()
    const [readMore, setReadMore] = useState(false)
    const posts = [
        {
            id: 1,
            coverImage: pImage,
            postTitle: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            postBody: "Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not"
        },
        {
            id: 2,
            coverImage: pImage,
            postTitle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            postBody: " Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation."
        },
        {
            id: 3,
            coverImage: pImage,
            postTitle: "This impressive paella is a perfect party dish and a fun meal",
            postBody: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests"
        }
    
    ]
    useEffect(() => {
        fetch('')
    },[])
    const readPost = (post) =>{
        // setReadMore(true)
        setRecentPost(post); 

    }
    const post = posts.find(post => post.id == 1);
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const shortPost = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    }
    return (
        <Container fluid className="p-3">
            <Row>
                {
                    recentPost ? (
                        <Col md={8} className="m-auto">
                            <div>
                                <Image src={post.coverImage} fluid alt="hero image" rounded />
                            </div>
                            <div>
                                <h6>title</h6>
                                <span>By: Ms-Arif</span>
                                <span><AccessTimeIcon style={{ fontSize: 20 }} /> 24 June 2021</span>
                                <p>{recentPost.postBody} jj</p>
                            </div>
                        </Col>
                    ):('')
                }
            </Row>
            <Row>
                <h3>Recent post</h3>
                {
                    posts.map((post) =>
                        <Col lg={4} className="mt-5 ml-0 mr-0">

                            <Card className={classes.root} onClick={()=>readPost(post)}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }

                                    title={post.postTitle.length > 30
                                        ? shortPost(post.postTitle.slice(0, 30).trim() + '...')
                                        : shortPost(post.postTitle).trim()
                                    }
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={post.coverImage}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {post.postBody}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>

                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}

