# Movie search engine 🎞

## Description

This application is a movie search engine that utilizes the collection of data avaible in IMBD's database.

## Deployment

[App Preview](https://searchimbdmovies.netlify.app/)

![App Preview Image](https://i.ibb.co/N26Lt02/movie-search-engine-preview.png)

## Technologies

- ReactJs.
- Custom Hooks.
- React hooks: useContext, useRef, useState, useEffect.
- Services: Fetch API data.
- Classless css framework.
- Scss modules.
- Debounce.

## Features

- Search and sort results by title.
- Search form validations: _Movie cannot begin with numbers_, _Cannot search empty movie_, _Write at least three characters_ (_Controlled form_).
- Cannot search twice the same movie (_useRef_).
- Responsive mobile first design (_CSS Grid Layout_).
- Transformation of the movie data obtained from the API into a more convenient format for usage within the application.
- Error management.

- Show search results automatically while typing.
- Avoid continuous fetching while typing (_Debounce_).
