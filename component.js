function randomRangeNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ui = {
    confirm: async (message) => createConfirm(message)
  }
  
  const createConfirm = (message) => {
    return new Promise((complete, failed)=>{
      $('#confirmMessage').text(message)
  
      $('#confirmYes').off('click');
      $('#confirmNo').off('click');
      
      $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
      $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
      
      $('.confirm').show();
    });
  }
                       
  const mostratNum = async () => {
    let number=randomRangeNumber(1, 100);
    const confirm = await ui.confirm('¿El número en el que pensaste es el siguiente ? '+" " + number);
    if(confirm){
      alert(`Tu número es el : ${number}, excelente decisión `);
    } else{
      console.log('numero', number)
    }
  }