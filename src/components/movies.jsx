import {Movie} from './movie'

function Movies (props) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie}/>
        )) : <h4>Не найдено</h4>}
    </div>
}

export {Movies}