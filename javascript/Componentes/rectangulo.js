
const area=(b,h)=>{
    return b*h;
}

const perimetro=(b,h)=>{
    return 2*(parseInt(b)+parseInt(h));
}



const rectangulo=(input,submit,result,reset)=>{
    
   
    const inputrectangulo= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resultrectangulo = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputrectangulo,submitForm,resultrectangulo,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{

       if(e.target===submitForm){
        let inputValue=inputrectangulo[0].value;
        let inputValueT=inputrectangulo[1].value;
        //console.log(inputValue)
        //manejo de errores futuros
        if(inputValue<=0 || inputValueT <=0){
            alert("el numero ingresado tiene que ser mayor a 0")
           return;

        }

                

         resultrectangulo[0].textContent=area(inputValue,inputValueT);
         resultrectangulo[1].textContent=perimetro(inputValue,inputValueT);

        

    }


    if(e.target===resetButton){
        resultrectangulo[0].textContent=0;
        resultrectangulo[1].textContent=0;
    }
   })
   

}
    


export default rectangulo;