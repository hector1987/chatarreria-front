/**
* ApiCalls
*
* Contiene todas las llamadas a la API
*
* @author Hector Morales <warrior1987@gmail.com>
*/

import axios from 'axios';

const path = "http://"+window.location.hostname+":5000/";

export function login(id_empresa,username,password){
	//consulta si el usuario existe con los datos ingresados
    return axios.get(path+'login/'+id_empresa+'/'+username+'/'+password, {withCredentials: true});    
}	

export function validaEmpresa(id_empresa){
	//consulta si la empresa existe
    return axios.get(path+'validaEmpresa/'+id_empresa, {withCredentials: true});
}

export function checkSession(){
	//consulta si la sesion esta activa
	return axios.get(path+'checkSession', {withCredentials: true});
}

export function logout(){
	//cierra la sesion
	return axios.get(path+'logout', {withCredentials: true});
}

export function loadComboBoxDataGrid(apiField){
	//carga el combobox dinamico 
	return axios.get(path+apiField, {withCredentials: true});
}

export function consultarFilas(apiField,searchWord){
	//consulta el numero de filas de la grilla
	return axios.get(path+apiField+'Rows', {
    		    withCredentials: true, 
    		    params: { 
    		        searchWord : searchWord,                
    		    } 
    		});
}

export function cargarFilas(apiField,searchWord,showRecords,offsetRecord){
	//trae las filas filas de la grilla
	return axios.get(path+apiField, {
				withCredentials: true, 
				params: { 
					searchWord : searchWord,
					showRecords : showRecords,
					offsetRecord : offsetRecord 
				} 
			});
}

export function eliminarFilas(apiField,id){
	//elimina una fila de la grilla
	return axios.delete(path+apiField,{            
        	    data: {id : id},
        	    withCredentials: true
        	});
}

export function insertarActualizarFila(method,apiField,arrayData){
	//inserta actualiza una fila en la grilla
	return axios({
        	    method: method,
        	    url: path+apiField,
        	    data: arrayData,
        	    withCredentials: true
        	});	
}

export function cargarDatosReporte(table,fecha1,fecha2){
	//cargar los datos del reporte
	return axios.get(path+table+'Report', {
	            withCredentials: true, 
	            params: { 
	                fecha1 : fecha1,
	                fecha2 : fecha2            
	            } 
	        });
}

export function sendEmailPassword(email){	
	//envia correo para cambiar password
	return axios({
        	    method: 'post',
        	    url: path+'emailPassword',
        	    data: { 'email': email },
        	    withCredentials: true
        	});	
}

export function checkToken(email,token){	
	//chequea si el token del correo es el vigente
	return axios({
        	    method: 'post',
        	    url: path+'checkToken',
        	    data: { 'email': email,'token': token },
        	    withCredentials: true
        	});	
}

export function updatePassword(email,password){	
	//actualiza el password
	return axios({
        	    method: 'post',
        	    url: path+'updatePassword',
        	    data: { 'email': email,'password': password },
        	    withCredentials: true
        	});	
}

export function uploaderFile(file,table,field,id,folder){	
	var formData = new FormData();
	formData.append("file", file);
	formData.append("table", table);
	formData.append("field", field);
	formData.append("id", id);
	formData.append("folder", folder);
	//enviar el archivo
	return axios.post(path+'uploaderFile',
				formData,
				{
	            	withCredentials: true,	            
	           		headers: {
            			'content-type': 'multipart/form-data'
        			} 
	        	}
	        );
}