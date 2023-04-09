function fetchdata(){
    fetch(' http://localhost:8000/jobs')
    .then(response => response.json())
     // .then((jobs)=>
        .then(data=>data.forEach(person=>loadData(person)))
      .then(data =>console.log(data))
          
        
     }
    
    
    fetchdata();


    function loadData(x) {
     const card = document.createElement('div')
     card.innerHTML = `
     <div class="card" style="width: 18rem;">
     <img src=${x.image} class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${x.job_title}</h5>
           <h6>${x.job_description}</h6>
           <h6>${x.job_location}</h6>
           <h6>${x.job_type}</h6>
           <a href="#" class="btn btn-primary">View job</a>
           <a href="#" class="btn btn-primary">Delete</a>
           
 
        </div>
        </div>
        `
      
        document.getElementById('list').appendChild(card)
    };
    const myButton = document.getElementById("btn");
    myButton.addEventListener("click", function() {
    console.log("Button clicked!");
     });


     var elem= document.getElementById("demo");

     elem.addEventListener("mouseover", function(){
        elem.innerHTML = "Hello world";
     })



               
      
                
      
          
        
        
            
      
    
       
        

    
    
    








