import React from 'react';
import { Lista} from './Lista'

export default class Componente1 extends React.Component {

    state = {
        title : 'Meu Primeiro Componente do React',
        cursos : ['React', 'Kotlin', 'Angular', 'Vue', 'Blazor']
    }

    componentDidMount(){
        this.setState({title : 'text3'});
        console.log('componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('componentWillUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        const lista = this.state.cursos.map((curso, i) => (
            <Lista key={i} info={curso}/>
        ));

        return (
            <>
                <h1 className="fonte">{this.state.title}</h1>
                {lista}
            </>
        );
    }
}