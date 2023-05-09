let mouse=document.querySelector('.mouse');

let nav2=document.querySelector('.ahmed');

//console.log(label1);
mouse.onclick =function(){
    //navigation.classList.add('ahmed') 
    nav2.classList.toggle('hide') 
   
}

//form
let signin =document.getElementById('signin');
let signup =document.getElementById('signup');
//signup
let lb_fname=document.getElementById('lb_fname');
let inp_fname=document.getElementById('inp_fname');
let lb_lname=document.getElementById('lb_lname');
let inp_lname=document.getElementById('inp_lname');
let lb_gender=document.getElementById('lb_gender');
let select_gen=document.getElementById('select_gen');
let lb_pass=document.getElementById('lb_pass');
let inp_pass=document.getElementById('inp_pass');
let submit=document.getElementById('submit');


signin.onclick =function(){
    lb_fname.classList.add('hide');
    inp_fname.classList.add('hide');
    lb_lname.classList.add('hide');
    inp_lname.classList.add('hide');
    lb_gender.classList.add('hide');
    select_gen.classList.add('hide');
    lb_pass.classList.add('hide');
    inp_pass.classList.add('hide');
    submit.value ='sign in';
}
signup.onclick =function(){
    lb_fname.classList.remove('hide');
    inp_fname.classList.remove('hide');
    lb_lname.classList.remove('hide');
    inp_lname.classList.remove('hide');
    lb_gender.classList.remove('hide');
    select_gen.classList.remove('hide');
    lb_pass.classList.remove('hide');
    inp_pass.classList.remove('hide');
    submit.value ='sign up';
}

