import _ from "lodash";
import "./style.css";
import Archer from "./img/archer_background.jpg";
import helloWorld from "./anotherFile";

const component = () => {
    console.log(helloWorld)
    const element = document.createElement("div");  
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add("hello");

    // line break
    element.appendChild(document.createElement("br"));
    
    // add image
    const archer = new Image();
    archer.src = Archer;
    archer.classList.add("image");
    element.appendChild(archer);
  
    return element;
}
  
document.body.appendChild(component());