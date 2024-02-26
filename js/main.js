const djournal = "/asset/json/dataDaily.json";
const MContainer = document.querySelector('#homeJournal');

const getListM = () => {
      fetch(djournal)
      .then(response =>  {
            return response.json();
      }).then(responseJson => {
            console.log(responseJson);
            MContainer.innerHTML = "";
            let daily = responseJson;
            daily.forEach(item => {
                  MContainer.innerHTML += `
                  <div class="flex flex-col md:flex-row p-[20px] bg-white rounded-[20px] md:gap-x-4 gap-y-3 md:h-full h-[600px] ">
                        <div class="w-full h-full rounded-[20px] overflow-hidden">
                              <img src="${item.image}" alt="" class="w-full">
                        </div>
                        <div class="flex flex-col">
                              <h1 class="font-bold text-black text-xl">${item.title}</h1>
                              <div class="h-[187px] overflow-scroll theText">
                                    <p class="font-light text-justify text-[#393939]">${item.deskripsi}</p>
                              </div>
                        </div>
                  </div>
                  
                  `
            });

      }).catch(error => {
            console.error(error);
      })
      }

document.addEventListener('DOMContentLoaded', getListM);


const IContainer = document.querySelector('#homeGallery');

const getListI = () => {
      fetch(djournal)
      .then(response => {
            return response.json();
      }).then(responseJson => {
            console.log(responseJson);
            IContainer.innerHTML = "";
            let image = responseJson;
            image.forEach(item => {
                  IContainer.innerHTML += `
                  <img src="${item.image}" alt="" class="w-full rounded-[20px]">
                  `
            });
      }).catch(error => {
            console.error(error);
      })
}

document.addEventListener('DOMContentLoaded', getListI);


const KContainer = document.querySelector('#homeJournal-1');

const getListK = () => {
      fetch(djournal)
      .then(response =>  {
            return response.json();
      }).then(responseJson => {
            console.log(responseJson);
            KContainer.innerHTML = "";
            let daily = responseJson;
            daily.forEach(item => {
                  KContainer.innerHTML += `
                  <div class="flex flex-col md:flex-row p-[20px] bg-white rounded-[20px] md:gap-x-4 gap-y-3 md:h-full h-[600px] ">
                        <div class="w-full h-full rounded-[20px] overflow-hidden">
                              <img src="${item.image}" alt="" class="w-full">
                        </div>
                        <div class="flex flex-col">
                              <h1 class="font-bold text-black text-xl">${item.title}</h1>
                              <div class="h-full overflow-scroll theText">
                                    <p class="font-light text-justify text-[#393939]">${item.deskripsi}</p>
                              </div>
                        </div>
                  </div>
                  
                  `
            });

      }).catch(error => {
            console.error(error);
      })
      }

document.addEventListener('DOMContentLoaded', getListK);
