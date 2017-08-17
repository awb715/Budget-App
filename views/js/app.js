
//will load the proper questions on the page

var quest = ['../partials/income.hbs','../partials/state.hbs','../partials/zip.hbs','../partials/roomate.hbs'];

var iterator=0;






//creates object that gets sent to api
function Obj(name,val){
    
event.preventDefault();
   
    
      $('.form').load(quest[iterator]).addClass('animated fadeIn');
 

    if(name){
  data[name]=val;
    console.log(data);
    }
    
   iterator++;
}





var data = {
    
    
};

