
const area=(dmenor=0,dmayor=0)=>{

    return (dmenor*dmayor)/2;
}

const perimetro=(l1=0)=>{
    return 4*parseInt(l1);
}



const Rombo=(input,submit,result,reset)=>{
    
   
    const inputRombo= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resultRombo = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



  //  console.log(inputRombo,submitForm,resultRombo,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
   
   
     //   console.log(e.target)
       if(e.target===submitForm){
       // console.log(e.target)
        inputRombo.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
              
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resultRombo[0].textContent=area(inputRombo[0].value,inputRombo[1].value);
        resultRombo[1].textContent=perimetro(inputRombo[2].value);


    if(e.target===resetButton){
        resultRombo[0].textContent=0;
        resultRombo[1].textContent=0;
    }
   })
   

}
    


export default Rombo;