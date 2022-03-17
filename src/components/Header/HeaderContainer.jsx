import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AuthMe} from "../../redux/auth_reducer";
import Preloader from "../Preloader/Preloader";


class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.AuthMe();
    }

    render() {

        return (
            <>
                <div>
                    {this.props.isFetching ? <Preloader /> : null}
                </div>
            <Header {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return (
        {isFetching: state.usersPage.isFetching,
            isAuth: state.auth.isAuth,
            login: state.auth.login}

    )
}


export default connect(mapStateToProps, {AuthMe})(HeaderContainer);