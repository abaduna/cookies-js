    //CREAR COOKIE
    document.cookie = "user=Arthur; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";

    //CREAR COOKIE
    document.cookie = "user2=pruebados; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";

    document.cookie = "user3=pruebados; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";

    //MODIFICAR COOKIE
    function updateCookieValue(nombre_cookie, nuevoValor) {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(nombre_cookie + "=")) {
            console.log(`cadena`);
            console.log(document.cookie = cookie.substring(0, nombre_cookie.length + 1) + nuevoValor);
          document.cookie = cookie.substring(0, nombre_cookie.length + 1) + nuevoValor;
          break;
        }
      }
    }
    updateCookieValue("user", "Arturo es el mejor del mundo"); // Modifica el valor de la cookie "user"
    updateCookieValue("user3", "Arturo es el mejor del mundo3");

    //ACCEDER A LA COOKIE Y MOSTRAR
    function getCookieValue(nombre_cookie) {
      var cookies = document.cookie.split(";"); // Divide la cadena de cookies en un array
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim(); // Elimina los espacios en blanco al principio y al final
        if (cookie.startsWith(nombre_cookie + "=")) {
          return cookie.substring(nombre_cookie.length + 1); // Retorna el valor de la cookie

        }
      }
      return null; // Si no se encuentra la cookie, retorna null
    }
    var nombreCookie = getCookieValue("user");
    console.log(nombreCookie); // Muestra el valor de la cookie "user" en la consola

    function deleteCookie(nombre) {
        document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
      
      deleteCookie("user3"); // Elimina la cookie "nombre"git
      console.log(document.cookie.split(";"));