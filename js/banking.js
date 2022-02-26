//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const depositCurrent = document.getElementById('deposit-total');
    depositCurrent.innerText = depositAmount;

    // clear the deposit input field
    depositInput.value = '';
    
})