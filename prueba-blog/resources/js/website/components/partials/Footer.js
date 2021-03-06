import React from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../GlobalContext";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <footer>
                <div className="row">
                    <div className="six columns info">
                        <h3>Nosotros</h3>

                        <p>
                            Es un hecho establecido hace demasiado tiempo que un
                            lector se distraerá con el contenido del texto de un
                            sitio mientras que mira su diseño. El punto de usar
                            Lorem Ipsum es que tiene una distribución más o
                            menos normal de las letras, al contrario de usar
                            textos como por ejemplo "Contenido aquí, contenido
                            aquí".
                        </p>
                    </div>

                    <div className="six columns">
                        <h3 className="social">Navigate</h3>

                        <ul className="navigate group">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {this.context.categories.map(category => (
                                <li key={category.id}>
                                    <Link
                                        to={
                                            "/category/" +
                                            category.id +
                                            "/" +
                                            category.slug
                                        }
                                    >
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.contextType = GlobalContext;

export default Footer;
