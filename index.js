let form=document.getElementById("form").addEventListener("submit",display);
// above we add eventlistner to submit button
/*document.addEventListener('contextmenu', event => event.preventDefault());*/

// above eventlistner diasabled mouse right click.

let tbody=document.getElementById("table").getElementsByTagName("tbody")[0];
let details=[]; // declare a blank array to store datas


function display(){ // display function for display inputed datas in table
    event.preventDefault();
    let obj={};
    let name=document.getElementById("name").value;
    let id=document.getElementById("docID").value;
    let department=document.getElementById("dept").value;
    let exp=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("mbl").value;
     /*store all inputed values in variables*/
    

    if(name==""||id==""||department==""||exp==""||email==""||phone==""){
        alert("Input all values");
    }
     
    else{
   
        obj.name=name.toLowerCase();
        obj.id=id;
        obj.number=phone;
        obj.email=email.toLowerCase();
        obj.experiance=exp;
        obj.department=department;
        /*we store inputed datas in key value pair in obj*/
        
        details.push(obj); // we push the obj in details array for later search quaries
    
    
        let row=document.createElement("tr");// a new row created
        let data1,data2,data3,data4,data5,data6,data7,data8;
        /*in six variables we will store six tds*/
    
        data1=document.createElement("td");
        data2=document.createElement("td");
        data3=document.createElement("td");
        data4=document.createElement("td");
        data5=document.createElement("td");
        data6=document.createElement("td");
        data7=document.createElement("td");
        data8=document.createElement("td");
        /*8 table data created and stored in variables */
        
        data1.innerText=name;
        data2.innerText=id;
        data3.innerText=department;
        data4.innerText=exp;
        data5.innerText=email;
        data6.innerText=phone; 
        /* above we store inputed datas in created tds */
    
        if(exp>5){
            data7.innerText="Senior";
        }
        else if(exp<=1){
            data7.innerText="Trainee";
        }
        else if(exp>=2 && exp<=5){
            data7.innerText="Juniour";
        }
    
        data8.innerText="Delete";
        data8.style.backgroundColor="red";
        data8.addEventListener("click",deleterow);
    
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
        row.appendChild(data6);
        row.appendChild(data7);
        row.appendChild(data8);
        /*We append all tds in row*/
    
        tbody.appendChild(row);// we append row in table body
    
    }
}

function blankform(){   // when this function calls all data inside form will blank
    document.getElementById("name").value="";
    document.getElementById("docID").value="";
    document.getElementById("dept").value="";
    document.getElementById("exp").value="";
    document.getElementById("email").value="";
    document.getElementById("mbl").value="";
}
function deleterow(){ 
    event.target.parentNode.remove();
}

function search(){ // when this function calls inputed data search in details array of objects
    let searchkey=document.getElementsByClassName("search").value;
    let str="";
    let filter=document.getElementById("searchby").value;

    for(let i=0;i<details.length;i++){
        
        if(searchkey==details[i]["filter"]){
            let index=details[i];
            str+=`Name : ${index.name} ; Id : ${index.id} ; Email : ${index.email} ; Experiance : ${index.experiance} ; Number : ${index.number} ; Department : ${index.department} .      
            `;
        }
    }
    let div=document.getElementById("divv");
    div.style.display="flex";
    let p=document.getElementById("searchresult");
    p.innerText=str;
   
}
document.getElementById("closeresult").addEventListener("click",close);
 
function close(){
    let div=document.getElementById("divv");
    let p=document.getElementById("searchresult");
    p.innerText="";
    div.style.display="none";
}