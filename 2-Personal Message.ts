let personname : string = '';

personname = prompt ('what is your name?')|| '';

if(personname !== null && personname !==''){
    alert( `Hello ${personname}, would you like to learn some python?`);
}else{
    alert('you have to fill your name first!')
}
