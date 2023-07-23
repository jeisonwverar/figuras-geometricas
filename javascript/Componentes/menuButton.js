

const menuButton=(button,nav)=>{

    const buttonMenu = document.querySelector(button);
    const navMenu = document.querySelector(nav);
    //console.log(buttonMenu,navMenu)
    
    buttonMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
    })

}


export default menuButton;