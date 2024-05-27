export function displayDialogue(text, onDisplaEnd){
    const diagueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    diagueUI.style.display = "block";

    let index = 0;
    let currentText = "";

    const intervalRef = setInterval(() => {
        if(index < text.length){
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }
        clearInterval(intervalRef);
    }, 5);

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick(){
        onDisplaEnd();
        diagueUI.style.display = "none";
        diague.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtnClick);
    }

    closeBtn.addEventListener("click", onCloseBtnClick);
}


export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
      k.camScale(k.vec2(1));
    } else {
      k.camScale(k.vec2(1.5));
    }
  }