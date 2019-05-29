//DropDownDataImage
var DropDownNames = [
    {
      DropDown: 'MainPageDropDown1 350x456',
    },
    {
      DropDown: 'MainPageDropDown2 350x256',
    },
    {
      DropDown: 'MainPageDropDown3 350x136',
    },
    {
      DropDown: 'MainPageDropDown4 350x136',
    },
    {
      DropDown: 'MainPageDropDown5 350x216',
    },
    {
      DropDown: 'MainPageDropDown6 350x1136',
    },
    {
      DropDown: 'MainPageDropDown7 350x176',
    },
    {
      DropDown: 'MainPageDropDown8 350x416',
    },
  ]

var DropDownHeightArray =[];
DropDownNames.forEach(function(item){
DropDownHeightArray.push(parseInt(item.DropDown.slice(22),10));
});

//HeaderDataImage
var LayerNamesFromSketch = [
    {
      NormalState: 'HeaderElementNormal1 150x56',
    },
    {
      NormalState: 'HeaderElementNormal2 110x56',
    },
    {
      NormalState: 'HeaderElementNormal3 141x56',
    },
    {
      NormalState: 'HeaderElementNormal4 134x56',
    },
    {
      NormalState: 'HeaderElementNormal5 235x56',
    },
    {
      NormalState: 'HeaderElementNormal6 245x56',
    },
    {
      NormalState: 'HeaderElementNormal7 150x56',
    },
    {
      NormalState: 'HeaderElementNormal8 144x56',
    },
    {
      NormalState: 'HeaderElementNormal9 111x56',
    },
    {
      NormalState: 'HeaderElementNormal10 221x56',
    },
  ]

var WidthArray =[];
LayerNamesFromSketch.forEach(function(item){
WidthArray.push(parseInt(item.NormalState.slice(-6,-3),10));
});


//creation of object
var createTag = function(tag,classname,classname2,parent,id,text) {
 var element = document.createElement(tag);
 if(classname) {
 element.classList.add(classname);
 }
 if(classname2) {
 element.classList.add(classname2);
 }
 if(text){
 element.innerHTML = text;
 }
 if(id){  
 element.setAttribute("id", id);     
 }
 var container = document.getElementsByClassName(parent);
 container[0].appendChild(element)
};

//makeHeaderLinks
for(i=1;i<11;i++){
 createTag('div','MenuElemet','MenuElementImage'+i,'MenuGroup','item-'+i);
    var currentSelector = document.getElementById("item-"+i);
//addImage based on iterator
//    currentSelector.style.background = "url('../src/HeaderMenuItems/HeaderElementNormal"+ i +".png')";
//addWidthOfImageBasedOnDATA
    currentSelector.style.width = WidthArray[i-1]+"px";

}

//change the arrat to fit the dropdown menus
WidthArray[0] = 178 
WidthArray[5]=WidthArray[5]+150
WidthArray[7]=WidthArray[7]+83
var DropDownPosArray = WidthArray.map((elem, index) => WidthArray.slice(0,index + 1).reduce((a, b) => a + b));
console.log(DropDownPosArray);


//makeDropDownElements
for(i=1;i<10;i++){
 createTag('div','HeaderDropDownMenu',"",'HeaderDropDownGroup','DropDownItem-'+i);
    var currentSelector = document.getElementById("DropDownItem-"+i);
//addImage based on iterator
//    currentSelector.style.background = "url('../src/HeaderMenuItems/HeaderElementNormal"+ i +".png')";
//addWidthOfImageBasedOnDATA
    currentSelector.style.height = "0px";
    currentSelector.style.left = DropDownPosArray[i-1]+"px";
    currentSelector.style.background = "url('../src/HeaderMenuItems/MainPageDropDown"+ i +".png')";
}







//set an array of objects
var cardContainer = document.getElementById("Menu");
var btns = cardContainer.getElementsByClassName("MenuElemet");

var DropDownContainer = document.getElementById("HeaderDropDown");
var DropDownMenus = DropDownContainer.getElementsByClassName("HeaderDropDownMenu");

//make an array from btns collections and remove 1 element from it.
var HeaderArray = Array.from(btns);
HeaderArray.splice(6,1)

//Loop through the buttons and add the active class to the current/clicked row element
var HeaderDropDownAction = function () {
for (var i = 0; i < HeaderArray.length; i++) {
HeaderArray[i].addEventListener("mouseover", function() {
  this.classList.add("active");
  var iterator = this.getAttribute("Id").slice(-1);
  console.log(iterator);
  DropDownMenus[iterator-2].style.height = DropDownHeightArray[iterator-2]+"px";
    if(this.classList == "MenuElemet active"){
    }
    else {
//   
}
})
HeaderArray[i].addEventListener("mouseout", function(){
    this.classList.remove("active");
    
    var iterator = this.getAttribute("Id").slice(-1);
    DropDownMenus[iterator-2].style.height = "0px";
    
}
)
}
}

HeaderDropDownAction();




//
////create row items and embed resolution specific image
//var createRows = function(imageRes) {
//for(i=1;i<9;i++){
//    createTag('div','row','column','row-'+i);
//    var currentSelector = document.getElementById("row-"+i);
////addImage based on iterator
//    currentSelector.style.background = "url('../images/Card-"+imageRes+"-Normal-"+ i +".png')";
//}
//}
//
//var cardContainer = document.getElementById("container");
//var btns = cardContainer.getElementsByClassName("row");
//
//// Loop through the buttons and add the active class to the current/clicked row element
//
//var rowAction = function (imageRes) {
//for (var i = 0; i < btns.length; i++) {
//btns[i].addEventListener("click", function() {
//  this.classList.toggle("active");
//    if(this.classList == "row active"){
//    this.style.background = "url('../images/Card-"+imageRes+"-Expanded-"+ this.getAttribute("id").slice(-1) +".png')";
//    }
//    else {
//    this.style.background = "url('../images/Card-"+imageRes+"-Normal-"+ this.getAttribute("id").slice(-1) +".png')";    
//}
//}
//)
//}
//}





////imageResolutions
//var desktopM = window.matchMedia("(min-width:1366px)")
//var desktopL =  window.matchMedia("(min-width:1920px)")
//
////creation of object
//var createTag = function(tag,classname,parent,id,text) {
// var element = document.createElement(tag);
// if(classname) {
// element.classList.add(classname);
// }
// if(text){
// element.innerHTML = text;
// }
// if(id){  
// element.setAttribute("id", id);     
// }
// var container = document.getElementsByClassName(parent);
// container[0].appendChild(element)
//};
//
////create row items and embed resolution specific image
//var createRows = function(imageRes) {
//for(i=1;i<9;i++){
//    createTag('div','row','column','row-'+i);
//    var currentSelector = document.getElementById("row-"+i);
////addImage based on iterator
//    currentSelector.style.background = "url('../images/Card-"+imageRes+"-Normal-"+ i +".png')";
//}
//}

//var cardContainer = document.getElementById("container");
//var btns = cardContainer.getElementsByClassName("row");
//
//// Loop through the buttons and add the active class to the current/clicked row element
//
//var rowAction = function (imageRes) {
//for (var i = 0; i < btns.length; i++) {
//btns[i].addEventListener("click", function() {
//  this.classList.toggle("active");
//    if(this.classList == "row active"){
//    this.style.background = "url('../images/Card-"+imageRes+"-Expanded-"+ this.getAttribute("id").slice(-1) +".png')";
//    }
//    else {
//    this.style.background = "url('../images/Card-"+imageRes+"-Normal-"+ this.getAttribute("id").slice(-1) +".png')";    
//}
//}
//)
//}
//}

////check screensize and generate appropriate image
//if(desktopL.matches){
//   createRows(1920);
//   rowAction(1920);
//}
//else if(desktopM.matches){
//   createRows(1366);
//   rowAction(1366);
//}
//else {
//    createRows(1024);
//    rowAction(1024);
//}
//
//
//createTag('div','days','column','day');
//createTag('div','month','column','month');
//var dayTag = document.getElementById("day");
//var monthTag = document.getElementById("month");
//cardContainer.insertBefore(dayTag,cardContainer.children[0]);
//
//cardContainer.insertBefore(monthTag,cardContainer.children[5]);
////need to fallback to previous image. 
