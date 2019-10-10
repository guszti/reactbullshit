import React from "react";
import {fetchStream} from "../../actions";
import {StoreState, Stream} from "../../types";
import {connect, MapStateToProps} from "react-redux";

type OwnProps = {
    match: any;
};

type DispatchProps = {
    fetchStream: typeof fetchStream;
};

type StateProps = {
    stream: Stream;
};

type Props = OwnProps & DispatchProps & StateProps;

class StreamShow extends React.Component<Props>{
    componentDidMount(): void {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }

        return(
            <div>
                <h1>{this.props.stream.title}</h1>
                <h3>{this.props.stream.description}</h3>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, StoreState> = (state: StoreState, ownProps: any) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {fetchStream})(StreamShow);