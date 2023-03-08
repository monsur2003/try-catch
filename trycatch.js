document.getElementById("try").addEventListener("click", function () {
  const inputValue = document.getElementById("input-field").value;
  const inputNum = parseInt(inputValue);
  try {
    const age = inputNum;
    if (isNaN(age)) {
      throw "please input a Number";
    } else if (age < 18) {
      throw "bacca kacca not allowed";
    } else if (age > 30) {
      throw "murubbira aykane aysen na ";
    }
    document.getElementById("errorText").innerHTML = "";
  } catch (err) {
    console.log("ERROR", err);
    const errorText = document.getElementById("errorText");
    errorText.innerText = err;
  } finally {
  }
});
