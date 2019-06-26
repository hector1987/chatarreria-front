import React, { Component } from 'react';
import DataGridContainer from './DataGridContainer';
import Button from 'react-bootstrap/Button';

class DataGrid extends Component {    
  	handleNewButton(){
        console.log(this.props.funcionClick);
        this.props.funcionClick('FormDataGrid',{ idRow:0,mainContainer:this.props.mainContainer,titulo:this.props.titulo,apiUrl:this.props.apiUrl,formFields:this.props.formFields});
        //console.log(this.props.funcionClick);
    }    
  	render() {
        //if (this.state.empleados.length > 0) {
        return (
            <div className="container ContenedorDataGrid">
                <div className="content">
                    <div className="table-responsive mt-4">
                        <div className="titulo">{this.props.titulo}</div>
                    </div>
                    <hr />
                    <div className="table-responsive mb-3">
                        <Button variant="primary" onClick={this.handleNewButton.bind(this)}>AGREGAR NUEVO</Button>
                    </div>
                    <div className="table-responsive mb-3">
                        <div style={{float:'left',width:'70px'}}>Mostrar:</div> 
                        <div style={{float:'left'}}>
                            <select style={{border:'1px solid #dee2e6'}}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="todos">TODAS</option>
                            </select>                            
                        </div>
                        <div style={{float:'left',width:'70px',paddingLeft:'5px'}}>Entradas</div> 
                        <div style={{float:'right'}}>
                            <div style={{float:'left',width:'70px'}}>Buscar:</div> 
                            <div style={{float:'left'}}>
                                <input type="text" style={{border:'1px solid #dee2e6'}}/>
                            </div>
                        </div>
                    </div>                    
                    <div className="table-responsive" style={{height:'calc(100% - 170px)'}}>
                        <DataGridContainer funcionClick={this.props.funcionClick} 
                                           titulo={this.props.titulo}
                                           colsHeaders={this.props.colsHeaders} 
                                           colsData={this.props.colsData}
                                           apiUrl={this.props.apiUrl}
                                           formFields={this.props.formFields}
                                           mainContainer={this.props.mainContainer}/>
                    </div> 
                     <div className="table-responsive mb-3">
                        <Button variant="primary" onClick={this.handleNewButton.bind(this)}>AGREGAR NUEVO</Button>
                    </div>                   
                </div>
            </div>             
        )
    } 
}

export default DataGrid
