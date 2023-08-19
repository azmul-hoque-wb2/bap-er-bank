// step-1: add event handler to the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    // step-2: get the withdraw amount form withdraw input field 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldAmountString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawFieldAmountString);

     // step-7: clear the input field 
     withdrawField.value = '';
    // validation 
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a valid number');
        return;
    }

    // step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    // step-6: get the previous balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    // validation 
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank etho taka nai')
        return;
    }

    // step-4: calculate total withdreaw total amount 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step-5: set total withdraw total amount 
    withdrawTotalElement.innerText = currentWithdrawTotal;

    console.log(previousBalanceTotal);
    const newBlanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBlanceTotal;

})