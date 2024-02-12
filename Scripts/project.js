displayProjects();
displayTags();

function displayProjects()
{
  let projectElement = document.querySelector(".main_container");
  if(!projectElement){return;}
  

  
  
  let innerHTML='';
  

  projects.forEach(item=>{
    innerHTML+=`<div class="project_container">
    <div class="title_container">${item.title}</div>
    <div class="porject_info">${item.info}</div>
    <div class="skills"> Related Tags : ${item.skills}</div> 
</div>
    `

    projectElement.innerHTML=innerHTML;

  });
}


function displayTags(itemId)
{
  let skillElement = document.querySelector(".tags");
  if(!skillElement){return;}
  skillElement.innerHTML= `<span >${itemId}</span>`

  // skillHTML='';

  // projects.forEach(i=>
  //   {
  //     if(i.id === itemId)
  //      {
  //       i.skills.forEach(j=>{
  //       skillHTML+= `<span >${i.skills}</span>`
  //       skillElement.innerHTML=skillHTML
  //    })

  //       i.skills;
  //      }
  //   })
  
    

}