
const volumen=(largo,ancho,altura)=>{
    return largo*ancho*altura;
}





const Paralelepipedo=(input,submit,result,reset)=>{
    
   
    const inputParalelepipedo= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resultParalelepipedo = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputParalelepipedo,submitForm,resultParalelepipedo,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
    
    
       if(e.target===submitForm){
         
        inputParalelepipedo.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
               // console.log(e.value)
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resultParalelepipedo[0].textContent=volumen(inputParalelepipedo[0].value,inputParalelepipedo[1].value,inputParalelepipedo[2].value);
       


    if(e.target===resetButton){
        resultParalelepipedo[0].textContent=0;
        
    }
   })
   

}
    


export default Paralelepipedo;