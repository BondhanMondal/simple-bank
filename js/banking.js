//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;


    //update Deposit
    const depositCurrent = document.getElementById('deposit-total');
    //console.log(depositCurrent.innerText);
    const previousDepositAmount = depositCurrent.innerText;
    const newDepositAmount = depositInput.value;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    //const totalDeposit = parseInt(newDepositTotal);
    depositCurrent.innerText = newDepositTotal;


    //update account balance
    const accountBalance = document.getElementById('balance-total');
    const previousAccountBalanceText = accountBalance.innerText;
    const previousAccountBalance = parseFloat(previousAccountBalanceText);
    const currentAccountBalance = previousAccountBalance + parseFloat(newDepositAmount);
    accountBalance.innerText = currentAccountBalance;




    
    

    // clear the deposit input field
    depositInput.value = '';
    
});

//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
    //get Withdraw Input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);

    //set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;



    //clear withdraw input field
    withdrawInput.value = '';
})