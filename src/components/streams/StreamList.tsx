import React from "react";
import {fetchStreams} from "../../actions";
import {connect, MapStateToProps} from "react-redux";
import {StoreState, Stream} from "../../types";
import {Link} from "react-router-dom";

type DispatchProps = {
    fetchStreams: typeof fetchStreams;
};

type StateProps = {
    streams: Stream[];
    currentUser: number | null;
    isSignedIn: boolean | null;
};

type Props = StateProps & DispatchProps;

class StreamList extends React.Component<Props> {
    componentDidMount(): void {
        this.props.fetchStreams();
    }

    renderCreate = () => {
        if(this.props.isSignedIn) {
            return(
                <div style={{ textAlign: "right" }}>
                    <Link to={"/stream/new"} className="ui button primary" >
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    renderAdmin = (stream: Stream) => {
        if(this.props.isSignedIn && stream.userId === this.props.currentUser) {
            return(
                <div className="right floated content">
                    <Link to={`stream/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`stream/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    };

    renderStreams = () => {
        return(
            this.props.streams.map((stream: Stream) => {
                return(
                    <div className="item" key={stream.id}>
                        {this.renderAdmin(stream)}
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            <Link to={`/stream/show/${stream.id}`} className="header">{stream.title}</Link>
                            <div className="description">
                                {stream.description}
                            </div>
                        </div>
                    </div>
                );
            })
        );
    };

    render() {
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderStreams()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = (state: StoreState): StateProps => {
    return {
        streams: Object.values(state.streams),
        currentUser: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);