import React from "react";
import {Movies} from '../components/movies';
import {Preloader} from '../components/preloader';
import {Search} from '../components/search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading:  true,
    }

    componentDidMount () {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch( (err) => {
                console.log(err);
                this.setState({loading: false})
            })
    }

    componentDidUpdate () {

    }

    searchMovie = (film,tip) => {
        this.setState({loading: true});
        console.log(film);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${film}${tip}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch( (err) => {
            console.log(err);
            this.setState({loading: false})
        })  
    }

    render () {
        const {movies, loading} = this.state;

        return <main className="container content">
            <Search searchMovie={this.searchMovie}/>
                {loading ? (
                     <Preloader />
                ) : (
                <Movies movies={movies}/>
                )}
        </main>
    }
}

export {Main}