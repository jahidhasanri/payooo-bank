document.getElementById('add-cash-out-out-btn')
.addEventListener('click',function(){
   const cashOutAmount=document.getElementById('amount-cash-aout-input').value;
   const cashOutPin=document.getElementById('pin-cash-out-input').value;
   const valueOfCash=document.getElementById('balance').innerText;
   const intcashoutamount=parseFloat(cashOutAmount);
   const intvalueofcash=parseFloat(valueOfCash);
   if(cashOutPin==='1234')
   {
    const newValue=intvalueofcash-intcashoutamount;
    document.getElementById('balance').innerText=newValue;
   }
   else{
    alert('tmr id hake hoye gese');
   }
})


document.getElementById('cash-out')
.addEventListener('click',function(){
    document.getElementById('show-cash-out-from').classList.remove('hidden');
    document.getElementById('show-add-money-from').classList.add('hidden');
})

document.getElementById('add-money')
.addEventListener('click',function(){
    document.getElementById('show-cash-out-from').classList.add('hidden');
    document.getElementById('show-add-money-from').classList.remove('hidden');
})
