/**
* CLASS Purchases
*
* Contiene el contenedor principal de las compras
*
* @author Hector Morales <warrior1987@gmail.com>
*/

import React, { Component } from 'react';
import DataGrid from '../data_grid/DataGrid';

class DataGridSelect extends Component {      
    //var props = '';    
    render() {
        return (
            <DataGrid titulo='Seleccione...' 
                      funcionClick={this.props.funcionClick}  
                      parametro={this.props.params.parametro}
                      colsData={this.props.params.colsData} 
                      automatica="false"  
                      botonNuevo="false"                    
                      funcionEdit = {this.props.params.funcionEdit}
                      funcionEditParams={this.props.params.fetchData}                                        
                      apiField = {this.props.params.apiField}
                      mainContainer='DataGridSelect'
                      sqlParams = {this.props.params.sqlParams} />             
        )
    } 
}

export default DataGridSelect