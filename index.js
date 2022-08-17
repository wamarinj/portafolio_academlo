function handleToogleClick() {
    const navBar = document.getElementById('navBar')
    const classes = navBar.classList
    let isActive = false
    for(i=0; i< classes.length; i++){
        if(classes[i] === 'active')
        {
          isActive  = true
        }
    }

    if(isActive){
        navBar.classList.remove('active')
    }else{
        navBar.classList.add('active')
    }
}

function closeNav(){
    navBar.classList.remove('active')
}