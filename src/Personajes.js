import './App.css';
import React from 'react'
export default class Personajes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        let data = this.state.data;
        let personajes = []
        for (let i = 0; i < data.length; i++){
            personajes.push(<tr>
                <td>{data[i].name}</td>
                <td>{data[i].height}</td>
                <td>{data[i].mass}</td>
                <td>{data[i].hair_color}</td>
                <td>{data[i].skin_color}</td>
                <td>{data[i].eye_color}</td>
                <td>{data[i].birth_year}</td>
                <td>{data[i].gender}</td>
                <td>{data[i].homeworld}</td>
                <td>{data[i].films}</td>
                <td>{data[i].species}</td>
                <td>{data[i].vehicles}</td>
                <td>{data[i].starships}</td>
                <td>{data[i].created}</td>
                <td>{data[i].edited}</td>
                <td>{data[i].url}</td>
                </tr>)
        }
        return (
            <table>
                <tbody>
                    <tr>
                    <td>Nombre</td>
                    <td>Tamaño</td>
                    <td>Masa</td>
                    <td>Color de pelo</td>
                    <td>Color de piel</td>
                    <td>Color de ojos</td>
                    <td>Año de nacimiento</td>
                    <td>Planeta</td>
                    <td>Peliculas</td>
                    <td>Especie</td>
                    <td>Vehiculos</td>
                    <td>Naves</td>
                    <td>Creado</td>
                    <td>Editado</td>
                    <td>URL</td>
                    </tr>
                    {personajes}
                </tbody> 
            </table>   

        );
    }
    
    async loadData(){
        let response = await fetch("https://swapi.dev/api/people/");
        let parseResponse = await response.json();
        this.setState({
            data: parseResponse.results
        })
    }
}