const newElement = document.createElement("div");
newElement.innerHTML = "新しい要素";
localStorage.setItem("newElement", newElement.outerHTML);
