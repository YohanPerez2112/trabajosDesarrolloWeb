const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "Laptop", desc: "16GB RAM" ,imagen:"laptop.png" ,price:"5.000.000"},
    {titulo: "Mouse", desc: "Gamer,Inalámbrico",imagen:"maus.jpg" ,price:"80.000"},
    {titulo: "disco duro", desc: "1 tb de almacenamiento",imagen:"disco.jpg" ,price:"120.000"},
    {titulo: "memoria RAM", desc: "32GB RAM",imagen:"Ram.webp" ,price:"250.000"},
    {titulo: "teclado", desc: "mecanico",imagen:"teclado.webp" ,price:"100.000"}
     
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".price").textContent = p.price;
    clon.querySelector(".product-img").src = `img/${p.imagen}`;
    clon.querySelector(".product-img").alt = p.titulo;
    contenedor.appendChild(clon);
  });
