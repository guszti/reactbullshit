import React, { Fragment } from "react";
import Modal from "../Modal";
import history from "../../history";
import {deleteStream, fetchStream} from "../../actions";
import {StoreState, Stream} from "../../types";
import {connect, MapStateToProps} from "react-redux";
import {Link} from "react-router-dom";

type OwnProps = {
    match: any;
};

type StateProps = {
    stream: Stream;
};

type DispatchProps = {
    fetchStream: typeof fetchStream;
    deleteStream: typeof deleteStream;
};

type Props = StateProps & OwnProps & DispatchProps;

class StreamDelete extends React.Component<Props>{
    componentDidMount(): void {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        const {id} = this.props.match.params;

        const actions = (
            <Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui negative button">Delete</button>
                <Link to={"/"} className="ui primary button">Cancel</Link>
            </Fragment>
        );

        return(
            <Modal
                header="Delete Stream"
                content={this.props.stream ? `Are you sure you want to delete "${this.props.stream.title}"?` : "Loading..."}
                actions={actions}
                onDismiss={() => history.push("/")}
            />
        );
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, StoreState> = (state: StoreState, ownProps: any) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);