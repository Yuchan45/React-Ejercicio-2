import '../assets/css/Table.css'


function TableRows(props) {
    return (
        props.movies.map((movie, i) => 
            <tr key={"row-" + i}>
                <td>{movie.title}</td>
                <td>{movie.duration}</td>
                <td>{movie.rating}</td>
                <td>
                    <ul>
                        { movie.genres.map(genre => 
                            <li>{genre}</li>
                        ) }
                    </ul>
                </td>
                <td>{movie.awards}</td>
            </tr> 
        )
    );
}

export default TableRows;