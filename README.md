Frontend_eng

Write a purely front-end (react / angular / vue) JavaScript application to help you find movies!

Technical requirements:

 Outlined, readable, clean code (not 1 file), generated HTML code is structured, non-inline CSS

English language (both UI and code)

You can use external libraries (angular, react, ramda, moment, jquery, apollo,

etc.), but not the libraries that specifically hide Wikipedia requests and their processing.

 Design should be secondary, minimal (layout, margins, title highlighting, etc.)

Functional requirements:

Have a movie title search box on the UI, on enter/click of a button it requests the
search results from our graphql sandbox for TMDB:  https://tmdb.sandbox.zoosh.ie/

It displays the results and some of their data (name, category, score) in a list, titles can be clicked

By clicking on an address, the app tries to find the related English wikipedia page (with a REST request) and then displays a summary of it in a detail panel (e.g. first paragraph), along with a clickable link that opens in a new window in IMDB and wikipedia

Bonus: Dual state search engine; a “related” button next to the two links in the movie: this switches the movie list from search results to a list of related movies related to the selected movie

Levels:

A working web page

Spinner while loading data from TMDBW or wikipedia

Search for related movies

Bonus # 1: Use Material-UI library, Material-UI look

Bonus # 2: Tests
