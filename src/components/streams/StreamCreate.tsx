import React, {ComponentType} from "react";
import {Field, reduxForm, InjectedFormProps, formValues, FormErrors, FormProps, Form} from "redux-form";
import {createStream} from "../../actions";
import {connect, MapStateToProps} from "react-redux";

type DispatchProps = {
    createStream: typeof createStream;
};

type Props = DispatchProps & InjectedFormProps<{}>;

class StreamCreate extends React.Component<Props> {
    renderInput = (formProps: any) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? "error" : ""}`;

        return(
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    onSubmit = (formValues: any) => {
        this.props.createStream(formValues);
    };

    renderError = ({error, touched}: any) => {
        if(touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label={"Enter description"} />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
}

type FormError = {
    title?: string;
    description?: string;
};

const validate = (formValues: any): FormError => {
    const errors: FormError = {};

    if(!formValues.title) {
        errors.title = "Enter a title!";
    }

    if(!formValues.description) {
        errors.description = "Enter a description!";
    }

    return errors;
};

const formWrapped = reduxForm({
    form: "streamCreate",
    validate
// @ts-ignore
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);