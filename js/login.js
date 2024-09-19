document.getElementById('btn-login')
.addEventListener('click',function(event)
{
    event.preventDefault();
    const mobileInput=document.getElementById('mobile_inpt').value;
   const pinInput=document.getElementById('pass_inpt').value;
   if(mobileInput==='4' && pinInput==='1234')
   {
    console.log('your are loggged in');
    window.location.href='/homepage.html'
   }
   else{
    alert('toamr id heack hoye gese');
}
// mobileInput.value='';
// pinInput.value='';
})