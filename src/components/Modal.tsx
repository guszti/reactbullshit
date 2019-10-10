import React from "react";
import ReactDom from "react-dom";

type OwnProps = {
    onDismiss: () => void;
    header: string;
    content: string;
    actions: any;
};

type Props = OwnProps;

const Modal = (props: Props) => {
    return ReactDom.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e: any) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">
                    {props.header}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector<any>("#modal")
    );
};

export default Modal;