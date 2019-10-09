import React from "react";
import {fetchStreams} from "../../actions";
import {connect} from "react-redux";

type DispatchProps = {
    fetchStreams: typeof fetchStreams;
};

type Props = DispatchProps;

class StreamList extends React.Component<Props> {
    componentDidMount(): void {
        this.props.fetchStreams();
    }

    render() {
        return <div>4</div>;
    }
};

export default connect(null, {fetchStreams})(StreamList);