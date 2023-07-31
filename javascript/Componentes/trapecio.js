
const area=(bmenor,bmayor,altura)=>{
    return ((bmenor,bmayor)/2);
}

const perimetro=(l1,l2,l3,l4)=>{
    return parseInt(l1) + parseInt(l2)+ parseInt(l3) +parseInt(l4);
}



const trapecio=(input,submit,result,reset)=>{
    
   
    const inputTrapecio= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resulttrapecio = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputTrapecio,submitForm,resulttrapecio,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
    
    
       if(e.target===submitForm){
         
        inputTrapecio.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
                console.log(e.value)
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resulttrapecio[0].textContent=area(inputTrapecio[0].value,inputTrapecio[1].value,inputTrapecio[2].value);
        resulttrapecio[1].textContent=perimetro(inputTrapecio[3].value,inputTrapecio[4].value,inputTrapecio[5].value,inputTrapecio[6].value);


    if(e.target===resetButton){
        resulttrapecio[0].textContent=0;
        resulttrapecio[1].textContent=0;
    }
   })
   

}
    


export default trapecio;