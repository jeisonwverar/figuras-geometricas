
const volumen=(num)=>{
    return( (4/3)*Math.PI* Math.pow(num,3)).toFixed(2);
}





const esfera=(input,submit,result,reset)=>{
    
   
    const inputEsfera= document.querySelector(input);
    const submitForm=document.querySelector(submit);
    const resultEsfera = document.querySelector(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputEsfera,submitForm,resultEsfera,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{

       if(e.target===submitForm){
        let inputValue=inputEsfera.value;
        //console.log(inputValue)
        //manejo de errores futuros
        if(inputValue<=0 ){
            alert("el numero ingresado tiene que ser mayor a 0")
           return;

        }

                

         resultEsfera.textContent=volumen(inputValue);
         

        

    }


    if(e.target===resetButton){
        resultEsfera.textContent=0;
        
    }
   })
   

}
    


export default esfera;