import React from 'react';

type Props = {};

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

                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

     onAuthChange = (): void => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    };

    onLoginClick = () => {
        this.auth.signIn();
    };

    onLogoutClick = () => {
      this.auth.signOut();
    };

    private renderAuthButton() {
        if (this.state.isSignedIn === null){
            return null;
        } else if(this.state.isSignedIn) {
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

export default GoogleAuth;