import React from 'react';



class ProfileInfoStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
            this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {

        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    }

  componentDidUpdate(prevProps, prevState, snapshot) {
       
        if (prevProps.status !== this.props.status) {
           this.setState({status: this.props.status} )
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render(){
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span  onDoubleClick = {this.activateEditMode }>{this.props.status || '----'}</span>}

                </div>
                <div>
                    {this.state.editMode &&
                        <input onChange ={this.onStatusChange} autoFocus  = {true}
                               onBlur ={this.deactivateEditMode}
                               value = {this.state.status} />}

                </div>
            </>
        )
    }
}




export default ProfileInfoStatus;
