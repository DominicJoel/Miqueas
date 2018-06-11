
import React, { Component } from 'react';

import firebase from 'firebase';

class AddContact extends Component{
     
  constructor( props ){
    super(props); 
    
    this.state = {
      nombre:'',
      apellido: '',
      telefono: ''
  }
  
     this.saveData = this.saveData.bind(this);
  }

  cleanData(){
    document.getElementById("nombre").value = ""; 
    document.getElementById("apellido").value = ""; 
    document.getElementById("telefono").value = ""; 
}

 saveData(){
  
  // const url = 'http://www.raydelto.org/itla/agenda/'; 
  
   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var telefono = document.getElementById ("telefono").value; 

   console.log(nombre);
   console.log(apellido);
   console.log(telefono);
  
   this.state.nombre = nombre;
   this.state.apellido = apellido;
   this.state.telefono = telefono;
   
   var newPostKey = firebase.database().ref().child('contacts').push().key;//Para obtener una llave para un post
  
   var updates = {};
   updates ['contacts/' + newPostKey] = this.state;//Lo guardamos por personas
   
   this.cleanData();
  return firebase.database().ref().update(updates);
    
 }

 render(){
   return(
       <div id="AddContact">
         <h1> Agenda </h1>
          <hr/>
            <div className="form-group row">
                <label htmlFor="example-text-input" className="col-2 col-form-label">Nombre</label>
            <div className="col-10">
                 <input required className="form-control" type="text" placeholder= "Nombre" id="nombre" />
            </div>
            </div>
            <div className="form-group row">
                  <label htmlFor="example-search-input" className="col-2 col-form-label">Apellido</label>
             <div className="col-10">
                   <input required  className="form-control" type="search" placeholder="Apellido" id="apellido" />
            </div>
            </div>
            <div className="form-group row">
                  <label htmlFor="example-email-input" className="col-2 col-form-label">Telefono</label>
            <div className="col-10">
                   <input required  className="form-control"  type="email" placeholder="Telefono" id="telefono"/>
            </div>
            </div>


            <button onClick={ this.saveData } id="save" type="button" className="btn btn-primary ">Guardar</button>

       </div>
   );
 }

}
export default AddContact