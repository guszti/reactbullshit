import React from 'react';
import {signIn, signOut} from "../actions";
import {connect, MapStateToProps} from "react-redux";
import {StoreState} from "../types";

type DispatchProps = {
    signIn: typeof signIn;
    signOut: typeof signOut;
};

type StateProps = {
    isSignedIn: boolean | null;
};

type Props = StateProps & DispatchProps;

class GoogleAuth extends React.Component<Props> {
    state = {isSignedIn: null};
    private auth: any;

    componentDidMount(): void {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "965342956568-3aksbnbmeqm8bkthbg3va9h48d12oav2.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

     onAuthChange = (isSignedIn: boolean): void => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onLoginClick = () => {
        this.auth.signIn();
    };

    onLogoutClick = () => {
      this.auth.signOut();
    };

    private renderAuthButton() {
        if (this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn) {
            return(
                <button className="ui red google button" onClick={this.onLogoutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return(
                <button className="ui red google button" onClick={this.onLoginClick}>
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
        return(this.renderAuthButton());
    }
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = (state: StoreState) => {
    return{
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);