var socket = io();
var messages1 = document.getElementById("messages1");
var messages2 = document.getElementById("messages2");
var messages3 = document.getElementById("messages3");
var messages4 = document.getElementById("messages4");
var messages5 = document.getElementById("messages5");
var form = document.getElementById("form");
var input = document.getElementById("input");
var lastEval;

var attributes = ["Supersmart", "Smart"];

function add_myil(number, innerHTML) {
  let myil = document.createElement("li");
  myil.setAttribute(
    "class",
    "text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
  );
  myil.setAttribute("onclick", 'check("' + number + '");');
  myil.setAttribute("zip", "listbox-option-0");
  myil.setAttribute("role", "option");

  dropdown = document.getElementById("dropdown");

  let mydiv = document.createElement("div");
  mydiv.setAttribute("class", "flex items-center");

  let myspan = document.createElement("span");
  myspan.setAttribute("class", "font-normal ml-3 block truncate");

  let myimg = document.createElement("img");
  myimg.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );
  myimg.setAttribute("alt", "");
  myimg.setAttribute("class", "flex-shrink-0 h-6 w-6 rounded-full");

  var xmlns = "http://www.w3.org/2000/svg";
  let mysvg = document.createElementNS(xmlns, "svg");
  mysvg.setAttributeNS(null, "class", "h-5 w-5");
  //mysvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  mysvg.setAttributeNS(null, "viewBox", "0 0 20 20");
  mysvg.setAttributeNS(null, "fill", "currentColor");
  mysvg.setAttributeNS(null, "aria-hidden", "true");

  let myspan2 = document.createElement("span");
  myspan2.setAttribute("id", "my-dropdown-item-" + number);
  myspan2.setAttribute(
    "class",
    "text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
  );

  let mypath = document.createElementNS(xmlns, "path");
  //mypath.setAttribute("d","M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z");
  mypath.setAttributeNS(null, "fill-rule", "evenodd");
  mypath.setAttributeNS(
    null,
    "d",
    "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  );
  mypath.setAttributeNS(null, "clip-rule", "evenodd");

  var someString55 = document.createTextNode("");
  mysvg.appendChild(someString55);
  mysvg.appendChild(mypath);

  myspan.innerHTML = innerHTML;

  mydiv.appendChild(myimg);
  var someString2 = document.createTextNode("");
  var someString3 = document.createTextNode("");
  var someString4 = document.createTextNode("");
  var someString5 = document.createTextNode("");
  mydiv.appendChild(someString2);
  mydiv.appendChild(someString3);
  mydiv.appendChild(someString4);
  mydiv.appendChild(someString5);
  mydiv.appendChild(myspan);

  var someString20 = document.createTextNode("");
  var someString21 = document.createTextNode("");
  var someString22 = document.createTextNode("");
  myspan2.appendChild(someString20);
  myspan2.appendChild(someString21);
  myspan2.appendChild(someString22);
  myspan2.appendChild(mysvg);

  var someString = document.createTextNode("");
  myil.appendChild(someString);
  myil.appendChild(mydiv);

  var someString1 = document.createTextNode("");
  myil.appendChild(someString1);
  //myil.appendChild(somestring);
  myil.appendChild(myspan2);
  dropdown.appendChild(myil);
}

add_myil("5", "Intelligent2");
add_myil("6", "Intelligent3");

//      <li onclick='check("4");' zip="listbox-option-0" class="listbox-option-0 text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"  role="option">
//        <div class="flex items-center">
//          <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
//          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
//          <span class="font-normal ml-3 block truncate"> boring </span>
//        </div>
//
//        <span id="my-dropdown-item-4" class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4" >
//          <!-- Heroicon name: solid/check -->
//          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
//          </svg>
//        </span>
//
//      </li>

//      <li id="my-dropdown-item-1" class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" role="option">
//        <div class="flex items-center">
//          <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"> --
//
//  Selected: "font-semibold", Not Selected: "font-normal"
//          <span class="font-normal ml-3 block truncate"> Intelligent </span>
//        </div>
//        </li>

form.addEventListener("submit", function (e) {
  e.preventDefault();

  test1 = "";

  for (
    var x = 0;
    x < document.querySelectorAll('[zip="listbox-option-0"]').length;
    x++
  ) {
    console.log(x);
    if (
      document.querySelectorAll('[zip="listbox-option-0"]')[x].childNodes[3]
        .style.visibility == "visible"
    ) {
      test1 =
        test1 +
        document.querySelectorAll('[zip="listbox-option-0"]')[x].childNodes[1]
          .childNodes[5].innerHTML;
    }
  }

  test1 = lastEval + test1;
  socket.emit("chat message", test1);
});

socket.on("chat message", function (msg) {
  //    var item = document.createElement('div');
  //   item.textContent = msg;
  console.log(msg.toString());
  console.log(typeof msg);
  //    console.log(msg[1]);
  if (typeof msg == "string") {
    test = JSON.parse(msg);
    messages1.textContent = test[0].toString().replaceAll(",", " ");
    messages2.textContent = test[1].toString().replaceAll(",", " ");
    messages3.textContent = test[2].toString().replaceAll(",", " ");
    messages4.textContent = test[3].toString().replaceAll(",", " ");
    messages5.textContent = test[4].toString().replaceAll(",", " ");
  }
  //console.log(test["1"])
  //    console.log(Map(msg)["1"])

  //messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

function check(param) {
  console.log("test");
  a = "my-dropdown-item-" + param;

  if (document.getElementById(a).style.visibility == "visible") {
    document.getElementById(a).style.visibility = "hidden";
  } else {
    document.getElementById(a).style.visibility = "visible";
  }
}


function show_attributes_table(){

  console.log("test");
  document.getElementById("attributes_table").style.display = "block";

  document.getElementById("person_table").style.display = "none";
  document.getElementById("summary_table").style.display = "none";

  document.getElementById("main_title").innerHTML = "Attributes";

}



function show_summary_table() {
  document.getElementById("summary_table").style.display = "block";

  document.getElementById("person_table").style.display = "none";
  document.getElementById("attributes_table").style.display = "none";

  document.getElementById("main_title").innerHTML = "Summary";
}

function show_persons_table() {
  document.getElementById("person_table").style.display = "block";
  document.getElementById("summary_table").style.display = "none";
  document.getElementById("attributes_table").style.display = "none";

  document.getElementById("main_title").innerHTML = "Evaluation";
}

function evaluate_user(test) {
  console.log("bonjour");
  lastEval = test;
  document.getElementById("popup").style.display = "block";
}

function openForm() {
  document.getElementById("loginPopup").style.display = "block";
}

function press_dropdown() {
  console.log(document.getElementById("dropdown").style.display);
  if (document.getElementById("dropdown").style.display == "block") {
    document.getElementById("dropdown").style.display = "none";
  } else {
    document.getElementById("dropdown").style.display = "block";
  }
}

function cancel() {
  document.getElementById("popup").style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  let modal = document.getElementById("loginPopup");
  if (event.target == modal) {
    closeForm();
  }
};
