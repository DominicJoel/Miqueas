
import React, { Component } from 'react';

//firebase
import firebase from 'firebase';

class ShowContact extends Component{
   
   constructor( props ){
     super(props); 
     
     this.state = {
        contacts : []
     }

   }
   componentWillMount(){
    let res = [];
    var that = this;


         var query = firebase.database().ref('contacts').orderByKey();
                query.once("value")
                    .then(function(snapshot) {
                        snapshot.forEach(function(childSnapshot) {
                                
                         // key will be "ada" the first time and "alan" the second time
                         var key = [childSnapshot.key];
                           // childData will be the actual contents of the child
                           var childData = childSnapshot.val();
                               res.push(childData);
                           //   console.log (childData.tituloPrincipal);
                              console.log(key);
                               console.log(childData);
                              });         
                             }).then( function() {
                                   that.setState({
                                    contacts : res
                                     })
                                }).catch(error => {
                                    console.error(error);
                                })//Fin del then sin functtion
 }


 render(){
    

  const data = this.state.contacts.map((name, key ) => { //Constante para renderizar los datos en la vista 
     // console.log(name);
     return(
         
         <tbody>
                 <tr>
                 <th scope="row">{key+1}</th>
                 <td> {name.nombre} </td>
                 <td> {name.apellido} </td>
                 <td> {name.telefono} </td>
             </tr>  
     </tbody>
  )

 })//Fin de la constante

   return(
       <div id="ShowContact">
            <h1> Lista de Contactos </h1>
                <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Telefono</th>
                                </tr>
                            </thead>       
                                  {data} 
                        </table>   
          </div>
   );
 }

}
export default ShowContact