const inputPizza = document.getElementById("inputpizza");
const sumbitPizza = document.getElementById("sumbitPizza");
const render = document.getElementById("render");
const formInput = document.getElementById("form");

const Pizzas = [
    {
        id: 1,
        nombre: "napolitana",
        ingredientes: ["queso mozzarella", "anchoas", "orégano", "alcaparras"],
        precio: 750,
    },
    {
        id: 2,
        nombre: "cuatro estaciones",
        ingredientes: ["aceitunas negras", "alcachofas", "jamon", "champigñones", "queso mozzarella"],
        precio: 899,
    },
    {
        id: 3,
        nombre: "primavera",
        ingredientes: ["queso mozzarella", "tomates cherry","oregano", "rúcula", "prosciutto", "queso parmesano"],
        precio: 1350,
    },
    {
        id: 4,
        nombre: "margarita",
        ingredientes: ["queso mozzarella", "albahaca fresca"],
        precio: 2400,
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["queso azul", "queso gorgonzola", "queso cremoso", "queso parmesano", "oregano"],
        precio: 2100,
    },
    {
        id: 6,
        nombre: "hawaiana",
        ingredientes: ["queso mozzarella", "piña", "doble jamon"],
        precio: 700,
    },
];

const agarraPizza = () => {
    const numberValue = inputPizza.value.trim();
  
    const findPizzas = Pizzas.find((pizza) => {
      return pizza.id == numberValue;
    });
    if (isEmpty(numberValue)) {
      render.classList.add("hidden");
      showError(inputPizza, "Debe ingresar algún número.");
    } else if (!findPizzas) {
      render.classList.add("hidden");
      showError(inputPizza, "Debe ingresar un número entre 1 y 7.");
    } else if (findPizzas) {
      removeError(inputPizza);
      render.classList.remove("hidden");
      render.innerHTML = `<div>
      <h2 class="titulo-pizza">${findPizzas.nombre}</h2>
      <h3 class="precio">$${findPizzas.precio}</h3>
    </div>
    <div><i class="fa-solid fa-pizza-slice"></i></div>`;
    }
};

const isEmpty = (value) => !value.length;

const showError = (input, message) => {
    const div = input.parentElement;
    div.classList.add("error");
    const error = div.querySelector("small");
    error.textContent = message;
};
  
const removeError = (input) => {
    const div = input.parentElement;
    div.classList.remove("error");
    const error = div.querySelector("small");
    error.textContent = "";
};

formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    agarraPizza();
});


