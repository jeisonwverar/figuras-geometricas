
const area=(num)=>{
    return( Math.PI* Math.pow(num,2)).toFixed(2);
}

const perimetro=(num)=>{
    return (2*Math.PI*num).toFixed(2);
}



const ciruculo=(input,submit,result,reset)=>{
    
   
    const inputCirculo= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resultCirculo = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputCirculo,submitForm,resultCirculo,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{

       if(e.target===submitForm){
        let inputValue=inputCirculo[0].value;
        //console.log(inputValue)
        //manejo de errores futuros
        if(inputValue<=0 ){
            alert("el numero ingresado tiene que ser mayor a 0")
           return;

        }

                

         resultCirculo[0].textContent=area(inputValue);
         resultCirculo[1].textContent=perimetro(inputValue);

        

    }


    if(e.target===resetButton){
        resultCirculo[0].textContent=0;
        resultCirculo[1].textContent=0;
    }
   })
   

}
    


export default ciruculo;