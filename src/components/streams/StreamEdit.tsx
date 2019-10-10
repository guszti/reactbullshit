import React from "react";
import {StoreState, Stream} from "../../types";
import {connect, MapStateToProps} from "react-redux";
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";
import {pick} from "lodash";

type DispatchProps = {
    fetchStream: typeof fetchStream;
    editStream: typeof editStream;
};

type OwnProps = {
    match: any;
};

type StateProps = {
    stream: Stream;
};

type Props = StateProps & OwnProps & DispatchProps;

class StreamEdit extends React.Component<Props> {
    componentDidMount(): void {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues: any) => {
        this.props.editStream(this.props.stream.id, formValues);
    };

    render() {
        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamForm initialValues={pick(this.props.stream, "title", "description")} onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, StoreState> = (state: StoreState, ownProps: any): StateProps => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);