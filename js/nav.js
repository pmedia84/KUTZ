const nav = () => {
    const btn = document.querySelector('.toggle-btn');
    const navlinks = document.querySelector('.nav-links');
    const navlinksfade = document.querySelectorAll('.nav-links li');

    //toggle nav bar and anitamtion

    btn.addEventListener('click', ()=>{
       
        btn.classList.toggle('toggle-btn-active',);
        navlinks.classList.toggle('nav-links-active');
        //animate links
        navlinksfade.forEach((link,index) => {
            link.style.animation = `navlinksfade 0.5s ease forwards ${index / 12 }s`;

        })
        
    });
    
}

nav();