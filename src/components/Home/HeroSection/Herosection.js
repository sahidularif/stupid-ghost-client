import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSection from '../LeftSection/LeftSection'
import RightSection from '../RightSection/RightSection'
import RecentPost from '../LeftSection/RecentPost/RecentPost';
import HeroPost from '../LeftSection/HeroPost/HeroPost';
const Herosection = () => {
    return (
        <div className="container shadow" fluid style={{ backgroundColor: 'snow' }}>
            <div className="row g-0 d-flex justify-content-around fluid">
                <div className="col-lg-8 mt-3">
                    <HeroPost />
                </div>
                <div className="col-lg-4 mt-3">
                    <RightSection />
                </div>
            </div>
            <div className="row g-0 mx-auto">
                <div className="col-lg-12 mt-5 ">
                    <RecentPost></RecentPost>
                </div>
            </div>
        </div>
    );
};

export default Herosection;