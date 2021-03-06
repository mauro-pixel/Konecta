import React from "react";

class ControlButtons extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();

        if (this.props.edit_mode == false) {
            this.props.onEnableEdit();
        } else {
            this.props.onDisableEdit();
        }
    }

    render() {
        return (
            <div className="comments-controls-bar">
                {this.props.comment.approved == 0 ||
                this.props.comment.approved == 2 ? (
                    <a
                        href="#"
                        className="approve-comment"
                        onClick={this.props.onApprove}
                    >
                        Aprobar |{" "}
                    </a>
                ) : null}
                {this.props.comment.approved == 0 ||
                this.props.comment.approved == 1 ? (
                    <a
                        href="#"
                        className="unapprove-comment"
                        onClick={this.props.onUnapprove}
                    >
                        Desaprobar |{" "}
                    </a>
                ) : null}
                <a href="#" className="edit-comment" onClick={this.handleEdit}>
                    Edit |{" "}
                </a>{" "}
                <a
                    href="#"
                    className="trash-comment"
                    onClick={this.props.onDelete}
                >
                    Basura
                </a>
            </div>
        );
    }
}

export default ControlButtons;
