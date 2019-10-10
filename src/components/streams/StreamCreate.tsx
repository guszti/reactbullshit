import React from "react";
import {createStream} from "../../actions";
import {connect} from "react-redux";
import StreamForm from "./StreamForm";

type DispatchProps = {
    createStream: typeof createStream;
};

type Props = DispatchProps;

class StreamCreate extends React.Component<Props> {
    onSubmit = (formValues: any) => {
        this.props.createStream(formValues);
    };

    render() {
        return(
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    };
}

export default connect(null, {createStream})(StreamCreate);