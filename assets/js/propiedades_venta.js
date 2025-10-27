const propiedades_ventas = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banios: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banios: 1,
    costo: 1200,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banios: 3,
    costo: 4500,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa de campo con amplio jardín',
    src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Espaciosa casa de campo ideal para familias, con un gran jardín y piscina.',
    ubicacion: '890 Countryside Rd, Green Valley, CA 78901',
    habitaciones: 5,
    banios: 3,
    costo: 8500,
    smoke: false,
    pets: true
  }
];

// Seleccionamos el contenedor donde se mostrarán las propiedades
const propiedadesVentaContainer = document.querySelector("#propiedadesVentaContainer");

// Variable para ir acumulando el HTML de las tarjetas
let html = "";

// Recorremos el arreglo de propiedades en venta
for (const propiedad of propiedades_ventas) {
  // Lógica para el ícono y texto de FUMAR (smoke)
  let smokeInfo;
  if (propiedad.smoke) {
    smokeInfo = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    smokeInfo = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  }

  // Lógica para el ícono y texto de MASCOTAS (pets)
  let petsInfo;
  if (propiedad.pets) {
    petsInfo = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
  } else {
    petsInfo = `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
  }

  // Creamos el template para cada tarjeta de propiedad
  html += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedad.src}"
          class="card-img-top"
          alt="Imagen de la propiedad"
        />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.banios} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${smokeInfo}
          ${petsInfo}
        </div>
      </div>
    </div>
  `;
}

// Insertamos el HTML generado en el contenedor
propiedadesVentaContainer.innerHTML = html;