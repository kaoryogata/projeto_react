import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const URL = 'http://localhost:3200/api/cursos';

const Menu = props => {

    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const getCursos = async () =>{
            try{
                const response = await axios.get(URL);
                setCursos(response.data);
            }catch(e){
                console.log(e)
            }
        }

        getCursos();
    }, []);

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            ABC Courses
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarContent"> <ul className="navbar-nav mr-auto">
            <li className="nav-item">
<Link className="nav-link" to="/cursos">Cursos{cursos && cursos.length > 0 ? '('+cursos.length+')' : ''}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contato">Contato</Link>
            </li>
        </ul> 
        </div>
        <span>{props.nome}</span>
    </nav>
)
}

const mapStoreToProps = store => ({
    nome : store.contato.nome
});

const conectado = connect(mapStoreToProps, null)(Menu);
export { conectado as Menu}
