/**
* ApiCalls
*
* Contiene todas las llamadas a la API
*
* @author Hector Morales <warrior1987@gmail.com>
*/

import axios from 'axios';
import globalState from '../configuration/GlobalState';

const path = "http://"+window.location.hostname+":5001/";

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

export function consultarFilas(apiField,searchWord,date1,date2,sqlParams){
	var companyData = globalState.getState().companyData;
	var id_empresa = 0;
	if(companyData !== undefined){
		id_empresa = globalState.getState().companyData[0].id;
	}	
	//consulta el numero de filas de la grilla
	return axios.get(path+'dataGridRows', {
    		    withCredentials: true, 
    		    params: { 
    		        searchWord : searchWord, 
    		        id_empresa : id_empresa,
    		        date1 	   : date1,
    		        date2      : date2,
    		        sqlParams  : sqlParams,
					tabla      : apiField	              
    		    } 
    		});
}

export function cargarFilas(apiField,searchWord,showRecords,offsetRecord,date1,date2,sqlParams,modo){
	var companyData = globalState.getState().companyData;	
	var id_empresa = 0;
	if(companyData !== undefined){
		id_empresa = globalState.getState().companyData[0].id;
	}
	//trae las filas filas de la grilla
	return axios.get(path+'dataGrid', {
				withCredentials: true, 
				params: { 
					searchWord   : searchWord,
					showRecords  : showRecords,
					offsetRecord : offsetRecord,
					id_empresa   : id_empresa,
					date1        : date1,
					date2 		 : date2,
					sqlParams    : sqlParams,
					tabla        : apiField,
					mode         : modo					
				} 
			});
}

export function eliminarFilas(apiField,id){
	//elimina una fila de la grilla
	return axios.delete(path+'dataGrid',{            
        	    data: {
        	    	id    : id,
        	    	tabla : apiField
        	    },
        	    withCredentials: true
        	});
}

export function insertarActualizarFila(method,apiField,arrayData){
	//inserta actualiza una fila en la grilla
	return axios({
        	    method: method,
        	    url: path+'dataGrid',
        	    data: {
					arrayData : arrayData,
					tabla 	  : apiField
        	    },
        	    withCredentials: true
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

export function listadoPermisos(idRol){		
	//consulta el numero de filas de la grilla
	return axios.get(path+'listadoPermisos', {
    		    withCredentials: true, 
    		    params: {  
    		    	idRol : idRol       
    		    } 
    		});
}

export function guardaPermisos(idRol,arrayPermisos){	
	//actualiza los permisos
	return axios({
        	    method: 'post',
        	    url: path+'guardaPermisos',
        	    data: { 'idRol': idRol,'arrayPermisos': arrayPermisos },
        	    withCredentials: true
        	});	
}

export function validarPermiso(idRol,idPermiso){
	//consulta el numero de filas de la grilla
	return axios.get(path+'validarPermiso', {
    		    withCredentials: true, 
    		    params: {  
    		    	idRol 	  : idRol,
    		    	idPermiso : idPermiso      
    		    } 
    		});
}

export function listadoAccesoEmpresas(idUser){		
	//consulta el numero de filas de la grilla
	return axios.get(path+'listadoAccesoEmpresas', {
    		    withCredentials: true, 
    		    params: {  
    		    	idUser : idUser       
    		    } 
    		});
}

export function guardaAccesoEmpresas(idUser,arrayEmpresas){	
	//actualiza los permisos
	return axios({
        	    method: 'post',
        	    url: path+'guardaAccesoEmpresas',
        	    data: { 'idUser': idUser,'arrayEmpresas': arrayEmpresas },
        	    withCredentials: true
        	});	
}

export function validarAccesoEmpresas(idUser,idEmpresa){
	//consulta el numero de filas de la grilla
	return axios.get(path+'validarAccesoEmpresas', {
    		    withCredentials: true, 
    		    params: {  
    		    	idUser 	  : idUser,
    		    	idEmpresa : idEmpresa      
    		    } 
    		});
}

export function checkSMTP(email,id_empresa){
	//envia un correo electronico para verificar la conexion SMTP
	return axios({
        	    method: 'post',
        	    url: path+'checkSMTP',
        	    data: { 'email': email,'id_empresa': id_empresa },
        	    withCredentials: true
        	}); 
}