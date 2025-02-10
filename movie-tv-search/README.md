# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


--------------------------------------------------------------------------------------------------------------------------------------
PROJECT DESCRIPSON

- Movie&TVSearch is a website where you can find movies and TV series.
- You can add movies and TV series to the "Favorites" and "Watched" sections or take a movie-themed quiz.
- This application uses OMDb API (The Open Movie Database) to retrive the movies and TV series to the web page. 

--------------------------------------------------------------------------------------------------------------------------------------

INSTRUCTIONS

There is four different sections: 
1 - Movie&TVSearch - which is the front page where you can find movies and TV series.
2 - Favourites - is the section where you can add your favourite movies/TV series or movies/TV series that you haven't seen yet.
3 - Watched - is a section where you can move the movies or TV series you have watched.
4 - MovieQuiz - is a section where you cant take a quiz about movies.

1. Movie&TVSearch:
- On the home page, there is a search bar where you can find movies and TV series. Once you find the movie, series, or theme you’re looking for, such as "Avengers", a selection of movies and series related to the keyword "Avengers" will appear on the site. 

Buttons:
All the movies and TV series will have "Add to Favourites" and "Add to Watched" buttons.
- If you add the movie/TV series to "Favourites" or to "Watched" sections, the button in question will be disabled and singnall that the movie/TV series have been added on either one of those sections. 


2. Favourites: 
- When you have found your favourite movies or TV series that you haven't seen yet, you can add them to the "Favourites" section.

Buttons: 
- When the movies or TV series are on the "Favourites" sections the movies/TV series will have "Add to Watched" and "Delete from Favourites" buttons. 
- If you click the "Add to Watched" button, the movie will be removed from the "Favourites" section and appear on the "Watched" section.
- If you click the "Delete from Favourites" button, the movie will be deleted form the "Favourites" section. Not from anywhere else.


3. Watched:
- If you have allready watched the movie or TV series you can add that movie/TV series to the "Watched" section.

Buttons: 
- When the movies/TV series are on the "Watched" section, they will have "Add to Favourites" and "Delete from Watched" buttons.
- If there is a good movie or TV series on your "Watched" section, you can change the movie to appear on the "Favourites" section by using the "Add to Favourites" button. You can changed the movies/TV series back and ford between the "Add to favourites" and "Add to Watched" sections as many times as you want.
- If you click the "Delete from Watched" button, the movie will be deleted or removed form the "Watched" section. Not from anywhere else.