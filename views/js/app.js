
//will load the proper questions on the page

var quest = ['../partials/income.hbs','../partials/state.hbs','',];

var iterator=0;






//creates object that gets sent to api
function Obj(id,val){
    
event.preventDefault();
   
    
      $('.form').load(quest[iterator]);
 

    if(id){
  data[id]=val;
    console.log(data);
    }
    
   iterator++;
}





var data = {
    
    
};

