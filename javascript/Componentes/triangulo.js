
const area=(b,h)=>{
    return (b*h)/2;
}

const perimetro=(l1,l2,l3)=>{
    return parseInt(l1) + parseInt(l2)+ parseInt(l3);
}



const triangulo=(input,submit,result,reset)=>{
    
   
    const inputtriangulo= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resulttriangulo = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputtriangulo,submitForm,resulttriangulo,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
    e.preventDefault();
    
       if(e.target===submitForm){
         
        inputtriangulo.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
                console.log(e.value)
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resulttriangulo[0].textContent=area(inputtriangulo[0].value,inputtriangulo[1].value);
        resulttriangulo[1].textContent=perimetro(inputtriangulo[2].value,inputtriangulo[3].value,inputtriangulo[4].value);


    if(e.target===resetButton){
        resulttriangulo[0].textContent=0;
        resulttriangulo[1].textContent=0;
    }
   })
   

}
    


export default triangulo;