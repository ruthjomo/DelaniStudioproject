 $(document).ready(function(){
     $(".design").click(function(){
         $("#design-p").toggle();
             $("#design").toggle();
        
     });
     $(".development").click(function(){
         $("#development-p").toggle();
             $("#development").toggle();
     });
     $(".product").click(function(){
         $("#product-p").toggle();
             $("#product").toggle();
     }); 
     $(".black-studio").mouseOver(function(){
         $("#studio").show();
     }).mouseOut(function(){
         $("#studio").hide();
     });
    
        

    
        
        
     });                               

 

     