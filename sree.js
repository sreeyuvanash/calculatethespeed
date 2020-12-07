
function colide(block,block2) {

    if(block.x - block2.x <block.width/2 + block2.width/2 && (block2.x-block.x) < block.width/2+block2.width/2 &&(block.y-block2.y) <block.height/2+block2.height/2 && (block2.y-block.y) < block.height/2+block2.height/2){
      
      block.velocityX=0;
      var deformation=0.5*weight*speed*speed/22500;
  
      if(deformation>180){
  
          block.shapeColor="red";
  
      }
      if(deformation<180&& deformation>100){
  
        block.shapeColor="yellow";
  
  
      }
      if(deformation<100){
  
        block.shapeColor="green";
  
  
      }
      
      return true;
        }else return false;
    
  }