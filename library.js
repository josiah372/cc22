function isTouching(c1,c2){
    if (c1.x - c2.x < c2.width/2 + c1.width/2
      && c2.x - c1.x < c2.width/2 + c1.width/2
      && c1.y - c2.y < c2.height/2 + c1.height/2
      && c2.y - c1.y < c2.height/2 + c1.height/2) {
    return true;
  }
  else {
   return false;
  }
}