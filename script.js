function buy() {
  let name = prompt("What is your name?");
  let oatMilk = prompt("Do you drink Oat Milk?");
  if (oatMilk == "no") {
    alert(
      "Learn more about the benefits of oat milk by clicking the link on this page"
    );
  }
  if (oatMilk === "yes") {
    alert("Great " + name + ", keep it up! 👏");
  }
}
let buyButton = document.querySelector("button");
buyButton.addEventListener("click", buy);
