import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {isToggleFetching, setLoginUserData} from "../../redux/auth_reducer";
import Preloader from "../Preloader/Preloader";
import {getAuthMe} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isToggleFetching(true);
       getAuthMe()
            .then(data => {

            this.props.isToggleFetching(false);
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setLoginUserData(id, login, email)
            }
        });
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


export default connect(mapStateToProps, {isToggleFetching, setLoginUserData})(HeaderContainer);