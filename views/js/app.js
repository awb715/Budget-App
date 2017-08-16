
//will load the proper questions on the page

var quest = ['../partials/income.hbs','','',];

var iterator=0;

function change(){
        
        $('.form').load(quest[iterator]);
    };


$("#submit").click(function(){
    $('.form').load(quest[iterator]);
    iterator++;
});
    



//creates object that gets sent to api
function Obj(id,val){
event.preventDefault();
    console.log(id);
 
    
    
  data[id]=val;
    console.log(data);
    
   
}





var data = {
    
    
};

