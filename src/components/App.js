import React, {PropTypes} from 'react';
import HeaderComponent from './common/HeaderComponent';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <HeaderComponent />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
