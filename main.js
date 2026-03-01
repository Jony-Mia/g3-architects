let btn = document.getElementById('btn');
let i = document.querySelector('#btn i');

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let phoneNumer = document.getElementById('phone-number')
let email = document.getElementById('email')
let messageTitle = document.getElementById('message-title')
let message = document.getElementById('message')
let my_modal_3 = document.getElementById('my_modal_3');

let messageList = [];

btn.onclick=()=>{
        i.classList.add('translate-x-15')
        btn.addEventListener('mouseleave',()=>{
        i.classList.remove('translate-x-15')        
        })
   if(firstName.value==='' && lastName.value==='' && phoneNumer.value==='' && email.value==='' && messageTitle.value==='' && message.value===''){
    my_modal_3.showModal()
   }
   else{

     messageList.push({firstName: firstName.value, lastName: lastName.value, phone: phoneNumer.value, email: email.value, messageTitle: messageTitle.value, message: message.value})
     firstName.value='';                    
     lastName.value='';
     phoneNumer.value='';
     email.value='';
     messageTitle.value='';
     message.value='';

    console.clear()
    console.log(messageList);
   }
    
}

document.getElementById('date').textContent=`${new Date().getFullYear()}`