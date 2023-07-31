
const volumen=(radio,altura)=>{
    return (Math.PI*Math.pow(radio,2)*altura).toFixed(2);
}





const cilindro=(input,submit,result,reset)=>{
    
   
    const inputCilindro= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resultCilindro = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputCilindro,submitForm,resultCilindro,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
    
    
       if(e.target===submitForm){
         
        inputCilindro.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
               // console.log(e.value)
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resultCilindro[0].textContent=volumen(inputCilindro[0].value,inputCilindro[1].value);
       


    if(e.target===resetButton){
        resultCilindro[0].textContent=0;
        
    }
   })
   

}
    


export default cilindro;