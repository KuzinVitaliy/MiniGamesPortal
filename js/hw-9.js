function ontask01() {
   const h1El = document.querySelector("h1");
   if (h1El)
      if (h1El.style.display === '')
         h1El.style.display = 'none';
      else h1El.style.display = '';
}

function ontask02() {
   const h1El = document.querySelector("p");

   if (h1El)
      h1El.style.color = 'green';

}

function ontask03() {
   const h1El = document.querySelector("h2");

   if (h1El)
      h1El.textContent = 'Привет, мир!';

}

function ontask04() {
   const h1Els = document.querySelectorAll(".description");

   for (elm of h1Els)
      elm.textContent = 'Измененный текст';

}

function ontask05() {
   const h1Els = document.querySelectorAll("p.description");

   for (elm of h1Els)
      elm.textContent = 'Новый текст';

}

let elCounter = 2;

function ontask06() {
   const listEl = document.getElementById("list");
   let newElement = document.createElement('div');
   newElement.textContent = `${elCounter} Новый элемент`;
   elCounter++;
   newElement.className = "list-item";
   listEl.appendChild(newElement)

}