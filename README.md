# ZoneApp

## Instalation

* Make sure you have node.js installed on your machine.
* First run `npm install -g @angular/cli` to install Angular CLI globally.
* Then run `npm i` to install all project (Zone App) dependencies. 

## Demo
hosted on Firebase: https://zone-app-da2dd.firebaseapp.com/dashboard

## Development server

Run `npm start` for a dev server. Then navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## General Notes about created solution

* App is created using Angular 2+ framework
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.
* Graphical elements were imported from Angular Material + some custom styling has beed applied
* App was tested on Windows 10 operating system
* npm -v  returns `4.1.2`

## Implementation details

* To maintain app state - ngrx & angular store (same idea as Redux) are used. 
* The above approach requires to handle asynchronous data somehow
* App is divided into components to keep the whole solution relatively clean
* First / initial place where data is loaded is `dashboard-routing.module.ts` where two resolvers are calling API: `MovieListResolver` (1st page of movies, action `LOAD_MOVIES`) & `GenreListResolver` (all genres, action `LOAD_GENRES`)
* Retrieved data (movies & genres) updates application store (with `LOAD_MOVIES` & `LOAD_GENRES` actions) and `dashboard.component.ts` subscribes to application store changes - in `ngOnInit` method. 
* Then all the consecutive data loads (next pages with movies) happen inside `dashboard.component.ts` - method `loadMoreMovies` updates application store with next pages of movies (action `LOAD_MOVIES`)
* All the data (for filters and for movie list) from dashboard component is pushed to it's child components  using angular one way databinding - `@Input()` in child components. To see how data is pushed to the children from dashhboard component level, check `dashboard.component.html` 
* Filtering happens in two components `movie-list-rating-filter` & `movie-list-genre-filter`. When changing those filters, application store is updated using two actions `UPDATE_GENRE_FILTER` & `UPDATE_RATING_FILTER` 
* After above filter changes - dashboard component (subscribed to whole application store, so also to filter changes) filters the whole data set of movies against most recent filter values
* I left all the components inside `dashboard` component because there is no need to generate more folder hierarchies at this stage

## Implemented features

* List of now playing movies sorted by popularity
* Loading of movies poster images
* Basic responsiveness (based on window size) 
* Basic filtering - genre & rating
* Basic "load more" functionality (manual action required each time) - loading consecutive pages of data.
* Tooltip for titles (useful for those longer ones).


## Known issues

* No autocomplete in genre filter - easy to fix
* Select dropdown is a bit bugged (you need to change focus (with mouse click) to something else in certain cases to be able to open dropdown again)
* Range filter animation is not working properly - dragging needs to be fixed
* Because of very short time to write this app - I had to sacrifice something and there are no tests :D (I know...).
* Sometimes (with picked certain filter values) "load more" doesn't really do anything (from the user perspective) since loaded dataset is immediately filtered. It could be fixed based on further requirements.
* Some parts of code could be easily refactored to a cleaner state. Focused on delivering maximum functionality in few hours I had.
* Some types & variables have a bt misleading names, should be refactored with top priority.

## Unclear

* Since `Movies` is a paged resource (I couldn't find a way to load everything with one API call), filtering movies on front-end is a bit problematic
