const menuPizzas = ["Margarita", "Pepperoni", "Cuatro Quesos", "Vegetariana"];
const pedidos = [];
let continuar = true;

function mostrarMenu() {
  let mensaje = "--- Menú de Pizzas ---\n";
  for (let i = 0; i < menuPizzas.length; i++) {
    mensaje += `${i + 1}. ${menuPizzas[i]}\n`;
  }
  console.log(mensaje);
  alert(mensaje);
}

function agregarPizzaAlMenu() {
  let nuevaPizza = prompt("Ingrese el nombre de la nueva pizza:");
  if (!nuevaPizza) {
    alert("No ingresó un nombre válido.");
    return;
  }
  menuPizzas.push(nuevaPizza);
  alert(`¡Pizza ${nuevaPizza} agregada al menú!`);
}

function realizarPedido() {
  let nombre = prompt("Ingrese su nombre:");
  let pizza = prompt("Ingrese el tipo de pizza:");
  let cantidad = Number(prompt("Ingrese la cantidad de pizzas:"));

  if (!nombre || !pizza || isNaN(cantidad) || cantidad <= 0) {
    alert("Datos inválidos. Intente nuevamente.");
    return;
  }

  const pedido = {
    nombre: nombre,
    pizza: pizza,
    cantidad: cantidad,
  };

  pedidos.push(pedido);
  let mensaje = `Pedido realizado:\nCliente: ${nombre}\nPizza: ${pizza}\nCantidad: ${cantidad}`;
  console.log(mensaje);
  alert(mensaje);
}

function verPedidos() {
  if (pedidos.length === 0) {
    alert("No hay pedidos realizados aún.");
    return;
  }

  let mensaje = "--- Lista de Pedidos ---\n";
  pedidos.forEach((pedido, index) => {
    mensaje += `${index + 1}. Cliente: ${pedido.nombre} | Pizza: ${
      pedido.pizza
    } | Cantidad: ${pedido.cantidad}\n`;
  });
  console.log(mensaje);
  alert(mensaje);
}

function buscarPedido() {
  let nombreBuscado = prompt(
    "Ingrese el nombre del cliente para buscar su pedido:"
  );
  const encontrado = pedidos.find(
    (pedido) => pedido.nombre.toLowerCase() === nombreBuscado.toLowerCase()
  );

  if (encontrado) {
    let mensaje = `Pedido encontrado:\nCliente: ${encontrado.nombre}\nPizza: ${encontrado.pizza}\nCantidad: ${encontrado.cantidad}`;
    console.log(mensaje);
    alert(mensaje);
  } else {
    alert("No se encontró ningún pedido para ese nombre.");
  }
}

while (continuar) {
  let opcion = Number(
    prompt(
      "Bienvenido a la Pizzería JS 🍕\nSeleccione una opción:\n1- Ver menú\n2- Hacer un pedido\n3- Ver pedidos\n4- Buscar pedido por nombre\n5- Agregar pizza al menú\n0- Salir"
    )
  );

  switch (opcion) {
    case 1:
      mostrarMenu();
      break;
    case 2:
      realizarPedido();
      break;
    case 3:
      verPedidos();
      break;
    case 4:
      buscarPedido();
      break;
    case 5:
      agregarPizzaAlMenu();
      break;
    case 0:
      continuar = false;
      alert("¡Gracias por usar el simulador!");
      break;
    default:
      alert("Opción inválida. Intente nuevamente.");
      break;
  }
}
