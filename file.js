function DeliteRowFunction(r){
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("Table").deleteRow(i);
}


function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("Table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


// alert('Я javaScript'); 
// let messege;
// messege = 'hello';
// alert(messege);


// let message = 'hello';
// alert(message);

// let user = 'pasha';
// let age = 'stariy';
// let message = 'hello stariy';
// alert(user,age,message);
// alert(age);
// alert(message);


// const myBirthday = '30.06.2000';
// alert(myBirthday);


// let admin;
// let name = 'Джон';
// admin = name;
// alert (admin);


// let age = prompt('сколько сантиметров?', 10000000000000 );
// alert(`У тебе ${age} см`); 

// let IsBoss = confirm("ТЫ здесь пикапер?");
// alert (IsBoss);


// let name = prompt('Как тебя зовут?');
// alert(`тебя зовут ${name}`);


// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// // a = 2 b = 2 c = 2 d = 1;

// let a = 2;
// let x = 1 + (a*=2);
// // a = 4 x = 5

// let a = +prompt("первое число?", 1);
// let b = =prompt("второе число?", 2);
// alert(a+b); // 3

// let a = prompt("первое число?", 1);
// let b = prompt("Второе число", 2);
// alert (a+b); //12

 // пример применения терарного символа '?'
//  let result = условие ? значение1 : значение2;
//  let accessAllowed = (age > 18) ? true : false;

// let question = prompt("какоеофициальное название JavaScript?");
// if(question == 'ECMAScript'){
//     alert('Верно');
// }else{
//     alert('Не знаете? ECMAScript!');
// }
// let numbers = prompt("введите число");
// if(numbers > 0) {
//     alert(1);
// }else if(numbers<0){
//     alert(-1);
// }else if(numbers===0){
//     alert(0);
// }else{
//     alert('Вы не ввели число');
// }
//  result = (a + b < 4) ? 'malo':  'mnogo';
// let message = (login == 'сотрудник') ? 'привет':
// (login == 'Директор') ? 'Здравствуйте' : 
// (login == '') ? 'нет логина':
// '" "';
// alert(message);


// let age = prompt('введите число');
// if (age >= 14 && age <= 90){
//     alert('переменная age находится в диапазоне между 14 и 90 включительно.');
// }else{
//     alert('переменная age не находится в диапазоне между 14 и 90 включительно.');
// }

// let age = prompt('введите число');
// if(!(age>=14 && age <= 90)){
//     alert('НЕ находится в диапазоне 14 и 90 включительно.')
// }

// let age = prompt('введите число');
// if((age>=14 || age <= 90)){
//     alert('НЕ находится в диапазоне 14 и 90 включительно.')
// }

// let message = prompt('Кто ты?');
// if(message == 'Админ'){
//     let password = prompt('введите пароль');
//     if(password == 'Я главный'){
//         alert('Здравствуйте!')
//     }else if (password === '' || password === null ){
//         alert('отменено');
//     }else{
//         alert('неверный пароль');
//     }
// }else if (message === '' || message === null ) {
//     alert('отменено');
// }else{
//     alert('blnt yf [eq z sdc yt pdfk');
// }
    // function InsertRowFunction(){
    //     let table = document.getElementById("Table");
        
    //     let row = table.insertRow(4);
    //     let cell1 = row.insertCell(0);
    //     let cell2 = row.insertCell(1);
    //     let cell3 = row.insertCell(2);
    //     let cell4 = row.insertCell(3);
    //     cell1.innerHTML =  "4";
    //     cell2.innerHTML = "заголовок 4";
    //     cell3.innerHTML = "Описание 4";
    //     cell4.innerHTML = "Удалить";
    // }
    
    // var Delete = function(){
    //     this.delete = function(r){
    //         var i = r.parentNode.parentNode.rowIndex;
    //         this.document.getElementById("Table").deleteRow(i);
    //     }
    // }
    //  const a = document.querySelector('.a');
    //  a.onclick = function () {
    //     deleteRow(a);
    //  }
    // function DeliteRowFunction(){
    // var table = document.getElementById("Tbody");
    // var len = document.getElementById("tr") 
	// 	var row = table.deleteRow(len);
	
	// }

    

    //   this.insertButtons = function() {
    //     // Создаём первую кнопку:
    //     inElement = DOC.createElement("P");
    //     inElement.className = "d-butts";
         
    //     button = DOC.createElement("BUTTON");                   
    //     button.onclick = this.delRow;
                                     
    //     butText = DOC.createTextNode("удалить");
    //     button.appendChild(butText);    
    //     // Добавляем её в DOM:      
    //     inElement.appendChild(button);
    //   }

        
       

