let addbtn = document.getElementById('addbtn');
let clearbtn = document.getElementById('clearbtn');
let mylist = document.getElementbyID('mylist');

var todolistarray = [];

var clearlist = function(){
 todolistarray = function()
todolistarray = []
localStorage.removeItem('mylist');
mylist.innerHTML = '';
 }

clearbtn.addEventListener('click',clearlist);
