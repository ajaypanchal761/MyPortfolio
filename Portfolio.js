var typed =new Typed(".typing",{
    strings:["","Full Stack Java Developer","Java Developer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// const nav=document.querySelector(".nav");
//       navList=nav.querySelectorAll(".li");
//       totalNavList=navList.length;
//       for(let i=0; i<totalNavList; i++)
//       {
//         console.log(navList[i]);
//         const a=navList[i].querySelector("a");
//         a.addEventListener("click",function()
//     {
//         for(let j=0;j<totalNavList;j++)
//         {
//             navList[j].querySelector("a").clssList.remove("active");
//         }
//         this.clssList.add("active")
//     });
//       }


const navTogglerBtn =document.querySelector(".nav-toggler");
    aside=document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",() =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    }

