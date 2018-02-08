
var items1 = document.getElementById('items1');
var overlay1=document.getElementById('overlay1');
var items2 = document.getElementById('items2');
var overlay2=document.getElementById('overlay2');
var items3 = document.getElementById('items3');
var overlay3=document.getElementById('overlay3');
var close = document.getElementById('close');

items1.addEventListener('click', function(){
  overlay1.style.display='block';
  close1.style.display='block';
})

items2.addEventListener('click', function(){
  overlay2.style.display='block';
  close2.style.display='block';
})

items3.addEventListener('click', function(){
  overlay3.style.display='block';
  close3.style.display='block';
})

close1.addEventListener('click', function(){
  overlay1.style.display='none';
  close1.style.display='none';
})

close2.addEventListener('click', function(){
  overlay2.style.display='none';
  close2.style.display='none';
})
close3.addEventListener('click', function(){
  overlay3.style.display='none';
  close3.style.display='none';
})
