
const area=(num)=>{
    return parseInt( Math.pow(num,2));
}

const perimetro=(num)=>{
    return parseInt(num*4);
}



const cuadrado=(input,submit,result,reset)=>{
    
   
    const inputCuadrado= document.querySelector(input);
    const submitForm=document.querySelector(submit);
    const resultCuadrado = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputCuadrado,submitForm,resultCuadrado,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{

       if(e.target===submitForm){
        let inputValue=inputCuadrado.value;
        //console.log(inputValue)
        //manejo de errores futuros
        if(inputValue<=0 ){
            alert("el numero ingresado tiene que ser mayor a 0")
           return;

        }

                

         resultCuadrado[0].textContent=area(inputValue);
         resultCuadrado[1].textContent=perimetro(inputValue);

        

    }


    if(e.target===resetButton){
        resultCuadrado[0].textContent=0;
        resultCuadrado[1].textContent=0;
    }
   })
   

}
    


export default cuadrado;