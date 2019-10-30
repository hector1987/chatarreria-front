//llamamos la conexion
var connection = require('../bd/bd');  
//creamos un objeto para ir almacenando todo lo que necesitemos
var CustomerModel = {};

//obtenemos todos los usuarios
CustomerModel.getCustomers = function(userData, callback) {    
    if (connection) {
        var searchWord   = userData.searchWord;
        var showRecords  = userData.showRecords; 
        var offsetRecord = userData.offsetRecord;       
        connection.query('SELECT R.id,R.id_tipo_documento,DT.nombre AS tipo_documento,R.documento,R.nombre_comercial,R.razon_social,R.direccion,R.telefono '
                        +' FROM customers AS R  '                       
                        +' INNER JOIN document_types AS DT ON (DT.id = R.id_tipo_documento) WHERE '
                        +' R.documento LIKE \'%'+searchWord+'%\' '
                        +' OR R.nombre_comercial LIKE \'%'+searchWord+'%\' '
                        +' OR R.razon_social LIKE \'%'+searchWord+'%\' '                        
                        +' OR R.direccion LIKE \'%'+searchWord+'%\' '
                        +' OR R.telefono LIKE \'%'+searchWord+'%\' '
                        +' ORDER BY R.id LIMIT '+offsetRecord+','+showRecords, function(error, rows) {
            if (error) {
                 callback(null, {
                    "msg": "error",
                    "detail": error.code
                });
            } else {
                callback(null, rows);
            }
        });
    }
}

//obtenemos todos los usuarios
CustomerModel.getCustomersReport = function(userData, callback) {    
    if (connection) {
        var searchWord   = userData.searchWord;
       // var showRecords  = userData.showRecords; 
        //var offsetRecord = userData.offsetRecord;       
        connection.query('SELECT * FROM customers WHERE '
                        +' documento LIKE \'%'+searchWord+'%\' '
                        +' OR nombre_comercial LIKE \'%'+searchWord+'%\' '
                        +' OR razon_social LIKE \'%'+searchWord+'%\' '                        
                        +' OR direccion LIKE \'%'+searchWord+'%\' '
                        +' OR telefono LIKE \'%'+searchWord+'%\' '
                        +' ORDER BY id', function(error, rows) {
            if (error) {
                 callback(null, {
                    "msg": "error",
                    "detail": error.code
                });
            } else {
                callback(null, rows);
            }
        });
    }
}

//obtenemos la cuenta de los tipos de compra
CustomerModel.getCustomersRows = function(userData, callback) {
    if (connection) {
        var searchWord   = userData.searchWord;          
        connection.query('SELECT COUNT(R.id) AS total '
                        +' FROM customers AS R  '                       
                        +' INNER JOIN document_types AS DT ON (DT.id = R.id_tipo_documento) WHERE '
                        +' R.documento LIKE \'%'+searchWord+'%\' '
                        +' OR R.nombre_comercial LIKE \'%'+searchWord+'%\' '
                        +' OR R.razon_social LIKE \'%'+searchWord+'%\' '                        
                        +' OR R.direccion LIKE \'%'+searchWord+'%\' '
                        +' OR R.telefono LIKE \'%'+searchWord+'%\' ', function(error, rows) {
            if (error) {
                 callback(null, {
                    "msg": "error",
                    "detail": error.code
                });
            } else {
                callback(null, rows);
            }
        });
    }
}

//almacenar un usuario
CustomerModel.insertCustomer = function(userData, callback) {
    if (connection) {               
        connection.query('INSERT INTO customers SET ?', userData, function(error, result) {
            if (error) {
                callback(null, {
                    "msg": "error",
                    "detail": error.code
                });
            } else {
                //devolvemos la última id insertada
                var id = result.insertId;
                callback(null, {
                    "insertId": id
                });                 
            }
        });
    }
}

//actualizar un usuario
CustomerModel.updateCustomer = function(userData, callback) {     
    if (connection) { 
        var sql = 'UPDATE customers SET id_tipo_documento = ' + connection.escape(userData.id_tipo_documento) + 
               ', documento = ' + connection.escape(userData.documento) + 
               ', nombre_comercial = ' + connection.escape(userData.nombre_comercial) + 
               ', razon_social = ' + connection.escape(userData.razon_social) + 
               ', direccion = ' + connection.escape(userData.direccion) + 
               ', telefono = ' + connection.escape(userData.telefono) +               
               ' WHERE id = ' + connection.escape(userData.id);        

        connection.query(sql, function(error, result) {            
            if (error) {
                callback(null, {
                    "msg": "error",
                    "detail": error.code
                });
            } else {
                //devolvemos la última id insertada
                callback(null, {
                    "msg": "success"
                });
            }            
        });
    }
}

//eliminar un usuario pasando la id a eliminar
CustomerModel.deleteCustomer = function(id, callback) {    
    if (connection) {
        var sqlExists = 'SELECT COUNT(*) AS cuenta FROM customers WHERE id = ' + connection.escape(id);
        connection.query(sqlExists, function(err, row) {       
            //si existe la id del usuario a eliminar  
            if (row[0].cuenta > 0) {
                var sql = 'DELETE FROM customers WHERE id = ' + connection.escape(id);                
                connection.query(sql, function(error, result) {
                    if (error) {
                        callback(null, {
                            "msg": "error",
                            "detail": error.code
                        });
                    } else {
                        //devolvemos la última id insertada
                        callback(null, {
                            "msg": "success"
                        });
                    }
                });
            } else {
                callback(null, {
                    "msg": "notExist"
                });
            }
        });
    }
}

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = CustomerModel;