const loadCategory = async () =>{

    const response = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
    
    const data = await response.json();

    const tabsContainer = document.getElementById('tabs-container');
    data.data.forEach((category) => {
        //console.log(category);
        const div = document.createElement("div");
        div.innerHTML = `
        <a  onclick="handleLoadVideo('${category.category_id}')"  class="tab mr-2 bg-red-100">${category.category
        }</a> 
        `;
        tabsContainer.appendChild(div);
    })
    //console.log(data.data);
}

const handleLoadVideo = async (category_id) =>{
    
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    
    const data = await response.json();
    

    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML = " ";

    data.data?.forEach( (videos) => {
        console.log(videos);


       const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
        <figure>
            <img src =${videos?.thumbnail} />
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
    
   
   
   
   
   
    //console.log(category_id);
}



loadCategory();
handleLoadVideo('1001');