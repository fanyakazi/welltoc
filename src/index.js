import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Buttock from './butt';

   ReactDOM.render(<Buttock>ToDo List:</Buttock>,document.getElementById('styl'));
  var done=6;
  var node=[];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
     window.lista = JSON.parse(xhttp.responseText); let lista=window.lista
	for(let i=0;i<=6;i++) { 
	node[i]=React.createElement('ul',{id:'ul'+lista[i].id},'Zadanie '+lista[i].id, React.createElement('li',null,lista[i].title),React.createElement('li',null,'Ukończone: ',React.createElement('input',{type:'checkbox',defaultChecked:lista[i].completed,onChange:changer,value:lista[i].id})),React.createElement('button',{onClick:usunR,value:lista[i].id},'usuń'));}
	let ins = React.createElement('div',{id:'tasklist'},node[0],node[1],node[2],node[3],node[4],node[5],node[6]);
	ReactDOM.render(ins,document.getElementById('root')); 
	ReactDOM.render(React.createElement('button',{onClick:dodaj},'pobierz nowe zadanie'),document.getElementById('bot')); 
    }
  };
	xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send(); 
  function usunR(event) {let find=document.getElementById('ul'+event.currentTarget.value); if (find.getElementsByTagName('input')[0].checked) find.parentNode.removeChild(find);}
  function changer(e) {let klucz=e.currentTarget.value; window.change(klucz); }
 // function usun(id) {let find=document.getElementById('ul'+id); if (find.getElementsByTagName('input')[0].checked) find.parentNode.removeChild(find);}
  function dodaj() { let tasklist=document.getElementById("tasklist"); let lista=window.lista;
   let limit = tasklist.getElementsByTagName('ul').length; if(limit<10&&done<lista.length) { done++;
   let nowy = document.createElement('ul'); 
   nowy.id='ul'+lista[done].id; 
   let checked = lista[done].completed?'checked':'';
   // eslint-disable-next-line
   nowy.innerHTML="Zadanie "+lista[done].id+"<li>"+lista[done].title+"</li>"+"<li>Ukończone: <input type=checkbox onchange=change("+lista[done].id+") "
				  +checked+"></li><button onclick=usun("+lista[done].id+")>usuń</button>";
   tasklist.appendChild(nowy);   } else alert('Nie można pobrać więcej zadań');}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
