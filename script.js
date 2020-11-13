var add = document.querySelector('#add');
var inputing = document.querySelector('.inputing');


add.addEventListener('click', (e) =>{ 
    if(inputing.value === ""){
        e.preventDefault();
        alert("Please enter list")
    }else if(inputing.value.length < 3){
        e.preventDefault();
        alert("Mininum charcters of 3");
    }else if(inputing.value.length > 25){
        e.preventDefault();
        alert("Maximum charcters of 25");
    }
    else{

    // creating li tag
    var two = document.querySelector('.two');
    var list = document.createElement("li");
    list.setAttribute("id", "list")
    
    two.appendChild(list);

    //creating input
    var inputList = document.createElement("input");
    inputList.setAttribute("id", "input_list");

    list.appendChild(inputList);

    //creating edit button
    //var editButton = document.createElement("button");
    //editButton.setAttribute("class", "edit");
    //editButton.innerHTML = "EDIT";
    //list.appendChild(editButton);

    //creating delete button
    var deleteButton = document.createElement("button");
    
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = "DELETE"
    

    list.appendChild(deleteButton);

    //console.log(content);
    let content = inputing.value;
    inputing.value = "";
    inputList.value = content;

    

    deleteButton.addEventListener('click', () =>{
        two.removeChild(list);
        //list.style.display = "none";
    })
}    
})




