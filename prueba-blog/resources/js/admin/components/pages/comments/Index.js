import React from "react";
import { connect } from "react-redux";

// actions
import { listComments } from "../../../store/actions/CommentActions";

// partials
import Spinner from "../../partials/Spinner";
import Breadcrumb from "../../partials/Breadcrumb";
import Pagination from "../../partials/Pagination";
import SuccessAlert from "../../partials/SuccessAlert";
import ErrorAlert from "../../partials/ErrorAlert";
import Row from "./Row";

// style
import "../../../css/comment.css";

class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.listComments(1);
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Comentarios</h1>

                    <Breadcrumb />
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">
                                        Todos los comentarios
                                    </h3>
                                </div>

                                <div className="box-body">
                                    <Spinner
                                        show={this.props.comments.list_spinner}
                                    />

                                    <SuccessAlert
                                        msg={
                                            this.props.comments.success_message
                                        }
                                    />
                                    <ErrorAlert
                                        msg={this.props.comments.error_message}
                                    />

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Autor</th>
                                                <th width="53%">Comentario</th>
                                                <th>En respuesta a</th>
                                                <th>Enviado el</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.comments.comments.data
                                                ? this.props.comments.comments.data.map(
                                                      item => (
                                                          <Row
                                                              key={item.id}
                                                              comment={item}
                                                              validation_errors={
                                                                  this.props
                                                                      .comments
                                                                      .validation_errors
                                                              }
                                                          />
                                                      )
                                                  )
                                                : null}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination
                                    data={this.props.comments.comments}
                                    onclick={this.props.listComments.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.comment
    };
};

const mapDispatchToProps = dispatch => {
    return {
        listComments: page => dispatch(listComments(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
