import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Release year": "Release year",
      "Type": "Type",
      "Movie&TVSearch": "Movie&TVSearch",
      "Unfortunately, the movie or series was not found.": "Unfortunately, the movie or series was not found.",
      "Please search for another movie or series.": "Please search for another movie or series.",
      "Close me": "Close me",
      "Enter movie or series name...": "Enter movie or series name...",
      "Search": "Search",
      "Movies that you have watched": "Movies that you have watched",
      "Movies to watch": "Movies to watch",
      "Add to Favourites": "Add to Favourites",
      "Add to Watched": "Add to Watched",
      "Delete from Favourites": "Delete from Favourites",
      "Delete from Watched": "Delete from Watched",
      "No favourites added yet!": "No favourites added yet!",
      "No watched movies yet!": "No watched movies yet!",
      "Movie&TVSearch": "Movie&TVSearch",
      "Favourites": "Favourites",
      "* Favourite movies *": "* Favourite movies *",
      "Watched": "Watched",
      "* Movies that you have watched *": "* Movies that you have watched *",
      "Language": "Language"
    }
  },
  fi: {
    translation: {
      "Welcome to React": "Tervetuloa Reac:iin ja react-i18next:n",
      "Release year": "Julkaisuvuosi",
      "Type": "Tyyppi",
      "Movie&TVSearch": "Elokuva&TVHaku",
      "Unfortunately, the movie or series was not found.": "Valitettavasti elokuvaa tai sarjaa ei löytynyt",
      "Please search for another movie or series.": "Ole hyvä ja hae jotain toista elokuvaa tai sarjaa",
      "Close me": "Sulje",
      "Enter movie or series name...": "Anna elokuvan tai sarjan nimi...",
      "Search": "Haku",
      "Movies that you have watched": "Elokuvia, jotka olet katsonut",
      "Movies to watch": "Elokuvia, joita katsoa",
      "Add to Favourites": "Lisää suosikkeihin",
      "Add to Watched": "Lisää katsottuihin",
      "Delete from Favourites": "Poista suosikeista",
      "Delete from Watched": "Poista katsotuista",
      "No favourites added yet!": "Suosikkeja ei ole vielä lisätty!",
      "No watched movies yet!": "Ei vielä katsottuja elokuvia!",
      "Movie&TVSearch": "Elokuva&TVHaku",
      "Favourites": "Suosikit",
      "* Favourite movies *": "* Suosikkielokuvat *",
      "Watched": "Katsotut",
      "* Movies that you have watched *": "* Katsomasi elokuvat *",
      "Language": "Kieli"
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Release year": "Année de sortie",
      "Type": "Taper",
      "Movie&TVSearch": "Recherche de films et de séries télévisées",
      "Unfortunately, the movie or series was not found.": "Malheureusement, le film ou la série n'a pas été retrouvé.",
      "Please search for another movie or series.": "Veuillez rechercher un autre film ou une autre série.",
      "Close me": "Ferme-moi",
      "Enter movie or series name...": "Entrez le nom du film ou de la série...",
      "Search": "Recherche",
      "Movies that you have watched": "Films que vous avez regardés",
      "Movies to watch": "Films à voir",
      "Add to Favourites": "Ajouter aux favoris",
      "Add to Watched": "Ajouter aux vidéos regardées",
      "Delete from Favourites": "Supprimer des favoris",
      "Delete from Watched": "Supprimer des vidéos surveillées",
      "No favourites added yet!": "Aucun favori ajouté pour l'instant !",
      "No watched movies yet!": "Aucun film regardé pour l'instant !",
      "Movie&TVSearch": "Recherche de films et de séries télévisées",
      "Favourites": "Favoris",
      "* Favourite movies *": "* Films préférés *",
      "Watched": "Regardé",
      "* Movies that you have watched *": "* Films que vous avez regardés *",
      "Language": "Langue"
    }
  },
  es: {
    translation: {
      "Welcome to React": "Bienvenido a React y reaccionar-i18next",
      "Release year": "Año de lanzamiento",
      "Type": "Tipo",
      "Movie&TVSearch": "Búsqueda de películas y TV",
      "Unfortunately, the movie or series was not found.": "Lamentablemente no se encontró la película o serie",
      "Please search for another movie or series.": "Busque otra película o serie.",
      "Close me": "Ciérrame",
      "Enter movie or series name...": "Ingrese el nombre de la película o serie...",
      "Search": "Buscar",
      "Movies that you have watched": "Películas que has visto",
      "Movies to watch": "Películas para ver",
      "Add to Favourites": "Agregar a favoritos",
      "Add to Watched": "Agregar a Observados",
      "Delete from Favourites": "Eliminar de favoritos",
      "Delete from Watched": "Eliminar de Vigilados",
      "No favourites added yet!": "No hay favoritos añadidas todavía!",
      "No watched movies yet!": "¡Aún no has visto películas!",
      "Movie&TVSearch": "Búsqueda de películas y TV",
      "Favourites": "Favoritas",
      "* Favourite movies *": "* Películas favoritas *",
      "Watched": "Observada",
      "Movies that you have watched": "Películas que has visto",
      "Language": "Idioma"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;