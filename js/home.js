document.getElementById('add-money-btn')
.addEventListener('click',function()
{
  const addMoneyInput=document.getElementById('amount-add-input').value;
  const pinNumberInput=document.getElementById('pin-number-input').value;
  const balance=document.getElementById('balance').innerText;
  if(pinNumberInput==='1234')
  {
   const int_addMoney=parseFloat(addMoneyInput);
   const int_balance=parseFloat(balance);
   const newBalance=int_addMoney+int_balance;
   document.getElementById('balance').innerText=newBalance;
  }
  else{
    alert('error');
  }
})