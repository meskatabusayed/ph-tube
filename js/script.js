const loadCategory = async () =>{

    const response = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
    
    const data = await response.json();

    const tabsContainer = document.getElementById('tabs-container');
    data.data.forEach((category) => {
        
        const div = document.createElement("div");
        div.innerHTML = `
        <a  onclick="handleLoadVideo('${category.category_id}')"  class="tab mr-2 bg-red-100">${category.category
        }</a> 
        `;
        tabsContainer.appendChild(div);
    })
   
}



const handleLoadVideo = async (category_id) =>{
    
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    

    
    const data = await response.json();

    const allData = data.data;

    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML = " ";

    if(allData.length > 0){

    
    

    

    data.data.forEach( (videos) => {
        
        const scondTotal = videos.others.posted_date;
        const hours = Math.floor(scondTotal/3600);
        const minuites = Math.floor(scondTotal%3600/60);
        
        


       const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
        <figure class="relative h-[200px]">
            
            <img  class="h-full w-full" src =${videos?.thumbnail} />
            <div class="absolute bottom-2 right-2 bg-black text-white p-2">
            <p>${scondTotal > 0 && scondTotal < 100000 ? `${hours} hrs ${minuites}min ago `    : " "  }</p>
            </div>
            </figure>
            <div class="card-body">
            
                <div class="card-footer flex justify-between mt-8">
                    <div class="flex">
                        <div>
                            <div class="avatar">
                                <div class="w-14 rounded-full mr-4">
                                    <img src=${videos.authors[0]?.profile_picture
                                    } />
                                </div>
                            </div>
                        </div>
                        <div>
                        <h6>
                        ${videos?.title} 
                        </h6>

                        <div class="flex gap-2 items-center">
                            <small>${videos.authors .map(videos => videos.profile_name)}</small>
                            <small>${videos.authors .map(videos => videos.verified==true? `<img src="./images/fi_10629607.jpg">`: ' ' )}
                        

                        </div>

                        <h6>
                        ${videos.others?.views
                        }
                        </h6>

                        
                        </div>
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    


        
        
        `
        cardContainer.appendChild(div); 

    } )
    
   
} else{
    cardContainer.innerHTML = `

    <div class="container mx-auto my-4 w-9/12">
    <img src="./images/Icon.png"/>
    <h2>Oops!! Sorry, There is no content here</h2>
    </div>
    `
}
   
   
   
   
    
}


loadCategory();
handleLoadVideo('1000');