
import { getProjects } from "../Api/projects";
import container from "../components/container";
import Footer from "../components/Footer";
import { useEffect, useState } from "../libs";


const HomePage = () => {

  const [projects, setproject] = useState([]);
  

useEffect(()=>{
getProjects().then(({data})=> { 
  const limitedProjects = data.slice(0, 3)
  setproject(limitedProjects)

})

},[])

   
  return /*html*/`
      ${container()}
      <h1 class="text-center">About </h1>
 <div class="w-10/12 m-auto">
      <div class="pt-3 pb-20"> 
      <div class="p-1 bg-gradient-to-r from-[#00cc99] via-[#00cc99] to-[#6600ff] " style="opacity: 1; transform: none;">
        <div class="p-7 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-dark-200">
        <div class="flex border-8 border-gray-200 dark:border-white">

        <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">

        <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">

        <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27350%27/%3e">
        </span>
        <img alt="" src="../Images/Avatar.jpg &amp;w=750&amp;q=75" decoding="async" data-nimg="intrinsic" class="object-cover" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="../Images/Avatar.jpg ">
        </span>
        </div>
        <div class="flex-1 ">
        <div class="pb-4 border-b border-gray-500">
        <h2 class="text-3xl font-bold my-3">M???t ch??t v??? t??i</h2>
        <p>Hi???n t???i, m??nh ??ang l?? sinh vi??n k?? 5 t???i tr?????ng FPT Polytechnic. M??nh b???t ?????u h???c l???p tr??nh t??? th??ng 10 n??m ngo??i v?? ph???n l???n th???i gian trong ng??y m??nh ?????u ng???i h???c code. Ngo??i vi???c h???c t???p tr??n tr?????ng th?? m??nh th?????ng xuy??n h???c th??m tr??n F8 Fullstack v?? tr??n c??c k??nh Youtube nh?? evondev, easy frontend, ...</p>

        <p class="pt-2">M??nh th???c s??? th??ch code v?? th??? th??ch b???n th??n h???c ???????c nhi???u c??i m???i v??o m???i ng??y m???i. M???c ti??u hi???n t???i c???a m??nh l?? tr??? th??nh m???t l???p tr??nh vi??n Frontend.</p>
        </div>

        <div class="py-3">
        <h1 class="text-xl font-bold capitalize my-4">Th??ng tin c?? b???n</h1>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2">

        <li><span class="w-[110px] inline-block">H???c v???n<!-- -->:</span>
        <span>FPT Polytechnic</span></li>
        <li><span class="w-[110px] inline-block">??i???n tho???i<!-- -->:</span>
        <span>0367767248</span></li>
        <li><span class="w-[110px] inline-block">Email<!-- -->:</span>
        <span>longka14pro@gmail.com</span>
        </li>
        <li><span class="w-[110px] inline-block">?????a ch???<!-- -->:
        </span>
        <span>Ch????ng M??? - H?? N???i</span>
        </li>
        <li><span class="w-[110px] inline-block">Website<!-- -->:</span>
        <span> <a class="text-decoration-none" href="https://github.com/LongThanh2409/Du_An_1.git"> Github.com/LongThanh2409 </a></span>
        </li><li><span class="w-[110px] inline-block">Ngh??? nghi???p<!-- -->:</span>
        <span>Web developer</span>
        </li></ul>
        </div>
        </div>
        </div>
        </div>
        </div>
       
        </div>
        <h1 class="text-center"> Projects </h1>
    <div class="flex flex-wrap justify-center py-12">
        
        ${projects.map((project)=>{
      return/*html*/ `
   
        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
          <div class="bg-white rounded shadow-lg hover:shadow-xl">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-700 font-bold text-lg">${project.name}</span>
                <span class="text-orange-500 font-bold">${project.date}</span>
              </div>
              <p class="text-gray-700 mt-4">${project.text}</p>
             <a href="https://github.com/LongThanh2409/Du_An_1.git"> <img src="${project.image}" alt="${project.name}" class="hover:opacity-90 cursor-pointer w-full mt-4"> </a>
              <button
                class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full mt-4 transition-colors duration-300 ease-in-out">Chi Ti???t</button>
            
            </div>
          </div>
        </div>`
          }).join(' ')}
      </div>

      ${Footer()}
       `;
}

export default HomePage;