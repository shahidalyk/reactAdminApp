import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const HeaderComponent = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {"  |  "}
            <Link to="/about" activeClassName="active">About</Link>
            {"  |  "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            { loading && <LoadingDots interval={100} dots={20} /> }
        </nav>
    );
};

HeaderComponent.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default HeaderComponent;
