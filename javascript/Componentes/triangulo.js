
const area=(b,h)=>{
    return (b*h)/2;
}

const perimetro=(l1,l2,l3)=>{
    return parseInt(l1) + parseInt(l2)+ parseInt(l3);
}



const triangulo=(input,submit,result,reset)=>{
    
   
    const inputTriangulo= document.querySelectorAll(input);
    const submitForm=document.querySelector(submit);
    const resulttriangulo = document.querySelectorAll(result);
    const resetButton=document.querySelector(reset);

    



    //console.log(inputTriangulo,submitForm,resulttriangulo,resetButton);

    //evento click

   document.addEventListener('click',(e)=>{
    
    
       if(e.target===submitForm){
         
        inputTriangulo.forEach((e)=>{
                
             if( e.value <= 0){
                 alert("el numero ingresado tiene que ser mayor a 0")
                return;
             }
               
            })
            //console.log(inputValue)
            //manejo de errores futuros   
            
        }
        resulttriangulo[0].textContent=area(inputTriangulo[0].value,inputTriangulo[1].value);
        resulttriangulo[1].textContent=perimetro(inputTriangulo[2].value,inputTriangulo[3].value,inputTriangulo[4].value);


    if(e.target===resetButton){
        resulttriangulo[0].textContent=0;
        resulttriangulo[1].textContent=0;
    }
   })
   

}
    


export default triangulo;