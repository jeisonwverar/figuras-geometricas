
const volumen=(num)=>{
    return Math.pow(num,3);
}





const cubo=(input,submit,result,reset)=>{
    
   
    const inputCubo= document.querySelector(input);
    const submitForm=document.querySelector(submit);
    const resultCubo = document.querySelector(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputCubo,submitForm,resultCubo,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{

       if(e.target===submitForm){
        let inputValue=inputCubo.value;
        //console.log(inputValue)
        //manejo de errores futuros
        if(inputValue<=0 ){
            alert("el numero ingresado tiene que ser mayor a 0")
           return;

        }

                

         resultCubo.textContent=volumen(inputValue);
         

        

    }


    if(e.target===resetButton){
        resultCubo.textContent=0;
        
    }
   })
   

}
    


export default cubo;