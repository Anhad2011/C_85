canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
redcar_width=120;
redcar_height=70;
background_image="https://tse3.mm.bing.net/th?id=OIP.0JxM_RuTzGbcE8i0Yf0hRQHaFH&pid=Api&P=0&w=248&h=172";
redcar_image="https://tse4.mm.bing.net/th?id=OIP.dXmknSEB7kS5bSDIqk8EtwHaEK&pid=Api&P=0&w=283&h=160";
redcar_x=10;
redcar_y=10;
pinkcar_width=120;
pinkcar_height=70;
pinkcar_image="https://tse3.mm.bing.net/th?id=OIP.ggtZfJX2zFKI4OMbxNa10AHaDZ&pid=Api&P=0&w=334&h=154";
pinkcar_x=10;
pinkcar_y=110;

function add(){
 background_imgtag=new Image();
 background_imgtag.onload=uploadbackground;
 background_imgtag.src=background_image;

 redcar_imgtag=new Image();
 redcar_imgtag.onload=uploadcarred;
 redcar_imgtag.src="https://tse4.mm.bing.net/th?id=OIP.dXmknSEB7kS5bSDIqk8EtwHaEK&pid=Api&P=0&w=283&h=160";

 pinkcar_imgtag=new Image();
 pinkcar_imgtag.onload=uploadcarpink;
 pinkcar_imgtag.src="https://tse3.mm.bing.net/th?id=OIP.ggtZfJX2zFKI4OMbxNa10AHaDZ&pid=Api&P=0&w=334&h=154";
 
}

function uploadbackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadcarred(){
    ctx.drawImage(redcar_imgtag,redcar_x,redcar_y,redcar_width,redcar_height);

}

function uploadcarpink(){
    ctx.drawImage(pinkcar_imgtag,pinkcar_x,pinkcar_y,pinkcar_width,pinkcar_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
 keypressed=e.keyCode;
 console.log(keypressed);

 if (keypressed="39"){
right1();
console.log("right");
 }   


if (keypressed="37"){
    left1();
    console.log("left");
     } 
     
     if (keypressed="38"){
        up1();
        console.log("up");
         }   
         
         
         if (keypressed="40"){
            down1();
            console.log("down");
             }  
             
             if (keypressed="85"){
                up2();
                console.log("up");
                 }   

                 if (keypressed="68"){
                    down2();
                    console.log("down");
                     }   

                     if (keypressed="76"){
                        left2();
                        console.log("left");
                         }   

                         if (keypressed="84"){
                            right2();
                            console.log("right");
                             } 
                             
                             
                             function up1(){
                              if(redcar_y >= 0){
                               redcar_y=redcar_y-10;   
                               console.log("When up arrow key is pressed,x="+redcar_x+"y="+redcar_y)   ;
                               uploadbackground();
                               uploadcarred();
                              }
                  
                              }  

                              function down1(){
                                 if(redcar_y <= 500){
                                  redcar_y=redcar_y+10;   
                                  console.log("When up arrow key is pressed,x="+redcar_x+"y="+redcar_y)   ;
                                  uploadbackground();
                                  uploadcarred();
                                 }
                     
                                 }  

                                 function left1(){
                                    if(redcar_x >= 0){
                                     redcar_x=redcar_x-10;   
                                     console.log("When up arrow key is pressed,x="+redcar_x+"y="+redcar_y)   ;
                                     uploadbackground();
                                     uploadcarred();
                                    }
                        
                                    }  

                                    function right1(){
                                       if(redcar_x <=700 ){
                                        redcar_x=redcar_x+10;   
                                        console.log("When up arrow key is pressed,x="+redcar_x+"y="+redcar_y)   ;
                                        uploadbackground();
                                        uploadcarred();
                                       }
                           
                                       }  

                                       function up2(){
                                          if(pinkcar_y >= 0){
                                           pinkcar_y=pinkcar_y-10;   
                                           console.log("When u key is pressed,x="+pinkcar_x+"y="+pinkcar_y)   ;
                                           uploadbackground();
                                           uploadcarpink();
                                          }
                              
                                          }  
            
                                          function down2(){
                                             if(pinkcar_y <= 500){
                                                pinkcar_y=pinkcar_y+10;   
                                              console.log("When d key is pressed,x="+pinkcar_x+"y="+pinkcar_y)   ;
                                              uploadbackground();
                                              uploadcarpink();
                                             }
                                 
                                             }  
            
                                             function left2(){
                                                if(pinkcar_x >= 0){
                                                   pinkcar_x=pinkcar_x-10;   
                                                 console.log("When l key is pressed,x="+pinkcar_x+"y="+pinkcar_y)   ;
                                                 uploadbackground();
                                                 uploadcarred();
                                                }
                                    
                                                }  
            
                                                function right2(){
                                                   if(redcar_x <=700 ){
                                                    redcar_x=redcar_x+10;   
                                                    console.log("When r key is pressed,x="+redcar_x+"y="+redcar_y)   ;
                                                    uploadbackground();
                                                    uploadcarpink();
                                                   }
                                       
                                                   }  

            }             