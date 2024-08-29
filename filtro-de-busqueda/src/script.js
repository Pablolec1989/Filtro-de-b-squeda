//Creo una lista de prueba (podria obtenerse de consumir una API)

const countries = [
    { name: "Argentina" },
    { name: "Bolivia" },
    { name: "Chile" },
    { name: "Paraguay" },
    { name: "Brasil" },
    { name: "Uruguay" },
    { name: "Venezuela" },
    { name: "Peru" },
    { name: "Colombia" },
    { name: "Nicaragua" },
    { name: "Estados Unidos" },
    { name: "Panama" },
    { name: "Costa Rica" }
  ];
  
  //necesito capturar los valores de las etiquetas asociadas a HTML
  
  //creo una variable que almacene el valor de entrada de lo que escribe el usuario.
  let searchInput = document.getElementById("searchInput");

  //creo una variable que almacene el valor de resultado del filtrado
  let resultsList = document.getElementById("resultsList");
  
  //creo una funcion flecha.
  
  //1.Primero detecto la letra que ingresa al input y lo guardo en una variable.
  //2.capturo el valor del input con "value".
  //3. Me aseguro de transformar a minuscula la entrada para comparar en el listado.("toLowerCase()")
  //4. Hago la comparacion de la entrada con los datos almacenados en el array. Creo un nuevo array.
    //-Vuelvo a utilizar la funcion de pasar a minuscula. 
    //-Uso el metodo filter().
    //-Le pido que me vaya devolviendo los paises que inician con la primera frase que el usuario ingreso.
    //-StartWith es un metodo que permite indicar el inicio del proceso, le pido que vaya leyendo lo que se vaya escribiendo.
  //5. Hacemos el recorrido de los paises con lo que se ingreso en el input.
  
  const handleSearch = () =>{
    const searchLowCase= searchInput.value.toLowerCase()
    const filteredCountries = countries.filter((country)=>(country.name).toLowerCase().startsWith(searchLowCase))
    
    //para limpiar los resultados uso la propiedad innerHTML que asigna un valor 
    //al contenido relacionado con la etiqueta 'ID', para este caso:
    resultsList.innerHTML=""
    
    //identifico los paises filtrados y creo un elemento de etiqueta 'li'
    filteredCountries.forEach((country)=>{
        const li = document.createElement("li")
        li.textContent = country.name;
        resultsList.append(li)});
    
  if(searchInput.value===""){
      resultsList.innerHTML="";
    }
  }
    
    searchInput.addEventListener("input", handleSearch)
  //Ejecuto la funcion cada vez que el usuario meta una letra en el input. Necesito un escuchador de eventos.