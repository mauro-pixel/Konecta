import React from "react";
import PaginationItem from "./PaginationItem";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return this.props.data &&
            this.props.data.total > this.props.data.per_page ? (
            <div className="pagenav">
                <p>
                    <PaginationItem
                        title="Anterior"
                        page={this.props.data.current_page - 1}
                        enabled={this.props.data.current_page > 1}
                        onclick={this.props.onclick}
                        rel="prev"
                    />
                    <PaginationItem
                        title="Siguiente"
                        page={this.props.data.current_page + 1}
                        enabled={
                            this.props.data.current_page <
                            this.props.data.last_page
                        }
                        onclick={this.props.onclick}
                        rel="next"
                    />
                </p>
            </div>
        ) : null;
    }
}

export default Pagination;
