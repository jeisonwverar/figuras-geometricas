
const area=(bmenor,bmayor,altura)=>{
    return ((bmenor,bmayor)/2);
}

const perimetro=(l1,l2,l3,l4)=>{
    return parseInt(l1) + parseInt(l2)+ parseInt(l3) +parseInt(l4);
}



const trapecio=(input,submit,result,reset)=>{
    
   
    const inputtrapecio= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resulttrapecio = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputtrapecio,submitForm,resulttrapecio,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
    e.preventDefault();
    
       if(e.target===submitForm){
         
        inputtrapecio.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
                console.log(e.value)
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resulttrapecio[0].textContent=area(inputtrapecio[0].value,inputtrapecio[1].value,inputtrapecio[2].value);
        resulttrapecio[1].textContent=perimetro(inputtrapecio[3].value,inputtrapecio[4].value,inputtrapecio[5].value,inputtrapecio[6].value);


    if(e.target===resetButton){
        resulttrapecio[0].textContent=0;
        resulttrapecio[1].textContent=0;
    }
   })
   

}
    


export default trapecio;