
const volumen=(radio,altura)=>{
    return ((1/3)*Math.PI*Math.pow(radio,2)*altura).toFixed(2);
}





const cono=(input,submit,result,reset)=>{
    
   
    const inputCono= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resultCono = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputCono,submitForm,resultCono,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
    
    
       if(e.target===submitForm){
         
        inputCono.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
               // console.log(e.value)
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resultCono[0].textContent=volumen(inputCono[0].value,inputCono[1].value);
       


    if(e.target===resetButton){
        resultCono[0].textContent=0;
        
    }
   })
   

}
    


export default cono;