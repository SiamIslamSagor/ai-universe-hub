const loadAi = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const allAi = data.data?.tools;
  displayAi(allAi);
  console.log(allAi);
};

const displayAi = (allAi) => {
  // get the main container
  const allAiContainer = document.getElementById("all-ai-container");
  // clear allAiContainer
  allAiContainer.innerHTML = ``;

  allAi.forEach((singleAi) => {
    // count
    let count = 1;

    // console.log(singleAi);
    // create a div
    const aiCard = document.createElement("div");
    aiCard.classList = `card w-96 bg-base-100 shadow-xl mt-4 border`;
    // set innerHTML
    aiCard.innerHTML = `
    <figure class="px-10 pt-10">
      <img
        src="${singleAi.image}"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body text-left">
      <h2 class="card-title text-3xl">Features</h2>
      
      <div id= 'feature-div'>
        <p>${count++}. ${singleAi.features[0] ? singleAi.features[0] : ""}</p>
        <p>${count++}. ${singleAi.features[1] ? singleAi.features[1] : ""}</p>
        <p>${singleAi.features[2] ? count++ : ""}${
      singleAi.features[2] ? "." : ""
    } ${singleAi.features[2] ? singleAi.features[2] : ""}</p>
      </div>

      <hr class="my-2" />
      <div class="flex justify-between items-center">
        <div>
            <div class="text-2xl font-semibold my-1">${singleAi.name}</div>
            <div><p><span><i class="fa-regular fa-calendar-days"></i></span> ${
              singleAi.published_in
            }</p></div>
        </div>
        <div onclick="handleShowDetail('${
          singleAi.id
        }')" class='bg-red-50 rounded-full'><button class="text-red-500"><i class="fa-solid fa-arrow-right p-4"></i></button></div>
      </div>
    </div>
    `;
    // append child to main container
    allAiContainer.appendChild(aiCard);
  });

  console.log(ai);
};

const handleShowDetail = async (id) => {
  // load single phone data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  const singleAiInfo = data.data;

  console.log(singleAiInfo);
  showAiDetails(singleAiInfo);
};

const showAiDetails = (singleAiInfo) => {
  const showAiDetailContainer = document.getElementById(
    "show-detail-container"
  );
  showAiDetailContainer.classList = ` flex justify-between items-center gap-8`;

  showAiDetailContainer.innerHTML = `
  <div class="bg-red-50 rounded-2xl p-8">
      <h3 id="show-ai-description" class="font-semibold text-2xl p-2">${singleAiInfo.description}</h3>
      <div class="flex justify-around p-8 gap-4">
        <div class="p-6 bg-white rounded-lg font-bold flex flex-col justify-center">
            <p class= 'text-green-400 text-center'>${singleAiInfo.pricing[0].price}</p>
            <p class= 'text-green-400 text-center'>${singleAiInfo.pricing[0].plan}</p>
        </div>
        
        <div class="p-6 bg-white rounded-lg font-bold flex flex-col justify-center">
            <p class= 'text-orange-400 text-center'>${singleAiInfo.pricing[1].price}</p>
            <p class= 'text-orange-400 text-center'>${singleAiInfo.pricing[1].plan}</p>
        </div>

        <div class="p-6 bg-white rounded-lg font-bold flex flex-col justify-center">
            <p class= 'text-red-400 text-center'>${singleAiInfo.pricing[2].price}</p>
            <p class= 'text-red-400 text-center'>${singleAiInfo.pricing[2].plan}</p>
        </div>
      </div>
      <div class="flex justify-around">
        <div>
          <h3 class="text-2xl font-semibold">Features</h3>
          <ul id="features-ul-container" class = 'p-4'>
            <li class="list-disc list-inside">${singleAiInfo.features[1].feature_name}</li>
            <li class="list-disc list-inside">${singleAiInfo.features[2].feature_name}</li>
            <li class="list-disc list-inside">${singleAiInfo.features[3].feature_name}</li>
          </ul>
    </div>
    <div>
      <h3 class="text-2xl font-semibold">Integrations</h3>
      <ul id="Integrations-ul-container" class = 'p-4'>
        <li class="list-disc list-inside">${singleAiInfo.integrations[0]}</li>
        <li class="list-disc list-inside">${singleAiInfo.integrations[1]}</li>
        <li class="list-disc list-inside">${singleAiInfo.integrations[2]}</li>
      </ul>
    </div>
  </div>
</div>


 <div>
   <div class="card card-compact w-96 h-[450px] bg-base-100 shadow-xl">
     <figure>
       <img
       class="h-64 w-96 rounded-lg"
         src="${singleAiInfo.image_link[0]}"
         alt="Shoes"
       />
     </figure>
     <div class="card-body">
       <h2 class="card-title">${singleAiInfo.input_output_examples[0].input}</h2>
       <p>${singleAiInfo.input_output_examples[0].output}</p>
     </div>
   </div>
 </div>
  `;

  ai_detail.showModal();
};

function displayFeature(featureArray) {
  const featureDiv = document.getElementById("feature-div");
  featureArray.forEach((singleFeature) => {
    const p = document.createElement("p");
    p.innerText = `
    ${singleFeature}
    `;
    featureDiv.appendChild(p);
    // return singleFeature
  });
}

function setSingleFeature() {
  const featureDiv = document.getElementById("feature-div");
}

loadAi();
