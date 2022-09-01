/*
I wanna throw up god this is awful code
- Treevore
- disc @subsonic#1351

*/

//Default Settings
var dimx = 10;
var dimy = 5;
var colourSel = 'rgb(24, 25, 28)';
let field = [];

var table = document.getElementById('t1');


//Makes Pixel

/*
class Pix {
  //Constructor
  constructor(x,y){ 
    this.x = x;
    this.y = y;
    this.colour = 'rgb(24, 25, 28)';
    
  }

  //method to recolor
  reColour(){
    this.colour = colourSel;
  }
  
}
*/


//Create Grid
/*
function setGrid(xn, yn) {

  tGrid = [];


  for (i = 0; xn > i; i++) {

    yGrid = [];

    for (j = 0; yn > j; j++) {

      yGrid.push(new Pix(i, j));

    }

    tGrid.push(yGrid);

  }

  return tGrid;
}
*/



//Sets selected color
function setSel(c){
  colourSel = c;
  console.log("color set to " + colourSel);
}

//Sets color of block
function setColor(i, j){

  
  if(document.getElementById(i + "," + j).style.backgroundColor == colourSel){
    
    document.getElementById(i + "," + j).style.backgroundColor = '#18191C';
    
    
  } else {
    document.getElementById(i + "," + j).style.backgroundColor = colourSel;
  }
  
  console.log("color set to " + colourSel);
  createOutput();
  
}

//fills table with buttons
function populateTable(x, y){
  
    
  for (let i = 0; y > i; i++) { //javascript scope sucks make sure these are 'let'
  
    let tr = document.createElement('tr');
   
      for (let j = 0; x > j; j++) {

        
        bButton = document.createElement('button'); //button is made
        bButton.id = i + "," + j;
        bButton.className = "grid";
        bButton.style.background = "rgb(24, 25, 28)";
        bButton.addEventListener("click", function(){setColor(i, j)});
        tr.appendChild(bButton);
    
            
      }
    
    table.appendChild(tr); //row to table 
   
  }
  
}




function erase(){ //it fucking erases it's not that hard

   for (let i = 0; dimy > i; i++) {
      for (let j = 0; dimx > j; j++) {
        document.getElementById(i + "," + j).style.backgroundColor = "#18191C";
      }
   }
  createOutput();
  
}





//make emoji 
function emojPrint(){
  var text = "";
   for (let i = 0; dimy > i; i++) {
      for (let j = 0; dimx > j; j++) {

        //colors??
        console.log(i + " " + j + "" + document.getElementById(i + "," + j).style.backgroundColor);

        //colors woo
        switch(document.getElementById(i + "," + j).style.backgroundColor){
          case "rgb(221, 46, 68)": //red
            text = text.concat("🟥")
            //console.log("red🟥");
            break;
          case "rgb(244, 144, 12)": //orange
            text = text.concat("🟧")
            break;
          case "rgb(253, 203, 88)": //yellow
            text = text.concat("🟨");
            break;
          case "rgb(120, 177, 89)": //greem
            text = text.concat("🟩")
            break;
          case "rgb(85, 172, 238)": //blue
            text = text.concat("🟦")
  
            break;
          case "lightblue": //light blue
            text = text.concat("⬜")
            break;
           case "rgb(170, 142, 214)": //purplw
            text = text.concat("🟪")
  
            break;
          case "rgb(24, 25, 28)": //black
            text = text.concat("⬛")
  
            break;                                                                   
       }
 
      }
      text = text.concat("\n")
   }


  console.log(text.substring(0,text.length-1));  
  return text.substring(0,text.length-1);//HAHHAHAHAHA TO GET RID OF THE EXTRA BREAK HAHHAHHA
}




//updates grid size
function sizeUpdate(){
  dimy = document.getElementById("hin").value;
  dimx = document.getElementById("win").value;

  //document.getElementsByClassName("grid").style.width = (100/dimx) + "%";
  
  document.getElementById('t1').innerHTML = ''
  populateTable(dimx, dimy);

  createOutput(); 
  
}


//fixes output
function createOutput(){
  
  output = document.getElementById("output");
  output.value = emojPrint();

  /*
  output.style.width = "1px";
  output.style.width = (25+dimx*128)+"px";
*/
  
  output.style.height = "1px";
  output.style.height = (5+output.scrollHeight)+"px"; //scale height based on inpit
  
  document.body.appendChild(output);
  
}

/*
//Gets and sets dimensions
function getDimensions(){
  
  dimx = document.getElementById('inputOne').value;

  dimy = document.getElementById('inputTwo').value;

}
*/

//Main

//field = setGrid(dimx, dimy);
//console.log(field);

//document.getElementById("hin").addEventListener("input", function(){ sizeUpdate()})

populateTable(dimx, dimy);
document.body.appendChild(document.createElement('br'));
createOutput();