import React from 'react';
import axios from 'axios';
import { FormularioCurso } from './Formulario';
import { ListagemCurso } from './Listagem';

const URL = 'http://localhost:3200/api/cursos';

export class AgrupamentoCurso extends React.Component {

    constructor(props){
        super(props);

        this.excluirCurso = this.excluirCurso.bind(this);
        this.setCargaHoraria = this.setCargaHoraria.bind(this);
        this.setCategoria = this.setCategoria.bind(this);
        this.setCodigo = this.setCodigo.bind(this);
        this.setDescricao = this.setDescricao.bind(this);
        this.setPreco = this.setPreco.bind(this);
        this.limpar = this.limpar.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    initialState = {
        codigo: 0,
        descricao: '',
        cargaHoraria: 0,
        preco: 0,
        categoria: 'REDES'
    }

    state = {
        ...this.initialState,
        cursos : []
    }

    limpar(evento){
        if(evento){
            evento.preventDefault();
        }
        
        this.setState(this.initialState);
    }

    async componentDidMount(){
        await this.getCursos();
    }

    async getCursos(){
        try{
            const response = await axios.get(URL);
            this.setState({cursos : response.data});
        }catch(e){
            console.log(e);
        }
    }

    async excluirCurso(_id){
        if(window.confirm('Confirma excluir o curso selecionado?')){
            try{
                await axios.delete(URL+'/'+_id);
                alert('Curso deletado com sucesso');
                await this.getCursos();
            }catch(e){
                console.log(e)
            }
        }
    }

    setCodigo(evento){
        this.setState({codigo: evento.target.value});
    }

    setDescricao(evento){
        this.setState({descricao: evento.target.value});
    }

    setCargaHoraria(evento){
        this.setState({cargaHoraria: evento.target.value});
    }

    setPreco(evento){
        this.setState({preco: evento.target.value});
    }

    setCategoria(evento){
        this.setState({categoria: evento.target.value});
    }

    async salvar(evento){
        try{
            evento.preventDefault();
            const {codigo, descricao, cargaHoraria, preco, categoria} = this.state;

            if(!codigo || !descricao || !cargaHoraria || !preco || !categoria){
                alert('favor preencher todos os dados');
                return;
            }

            await axios.post(URL, {
                codigo,
                descricao,
                cargaHoraria,
                preco, 
                categoria
            });

            alert('Curso cadastrado com sucesso!');
            await this.getCursos();
            this.limpar();
        }catch(e){
            console.log(e);
        }
    }

    render() {
        const { cursos, codigo, descricao, cargaHoraria, preco, categoria } = this.state;
        const {excluirCurso, 
            setCargaHoraria, 
            setCategoria, 
            setCodigo, 
            setDescricao, 
            setPreco,
            limpar,
            salvar} = this;

        return (
            <div className="row border-bottom">
                <div className="col-md-6"> 
                    <FormularioCurso 
                        codigo={codigo}
                        descricao={descricao}
                        cargaHoraria={cargaHoraria}
                        preco={preco}
                        categoria={categoria}

                        setCargaHoraria={setCargaHoraria}
                        setCategoria={setCategoria}
                        setCodigo={setCodigo}
                        setDescricao={setDescricao}
                        setPreco={setPreco}

                        limpar={limpar}
                        salvar={salvar}
                    />
                </div>
                <div className="col-md-6">
                    <ListagemCurso
                        cursos={cursos}
                        excluirCurso={excluirCurso}/>
                </div>
            </div>
        );
    }
}