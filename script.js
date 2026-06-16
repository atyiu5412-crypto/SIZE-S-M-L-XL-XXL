const chestInput = document.getElementById("chest");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function() {
    const size = Number(chestInput.value);
    let mySize = "";

  if (size < 36) {
        mySize = "S";
    } else if (size <= 40) {
        mySize = "M";
    } else if (size <= 44) {
        mySize = "L";
    } else if (size <= 48) {
        mySize = "XL";
    } else {
        mySize = "XXL"; 
    }

    
    console.log("รอบอกคือ: " + size + " นิ้ว -> ได้ไซส์: " + mySize);

    result.innerText = "ไซส์ของคุณคือ: " + mySize;
});