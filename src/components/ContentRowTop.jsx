import ContentRowMovies from './ContentRowTop/ContentRowMovies'
import LastMovieInDb from './ContentRowTop/LastMovieInDb'
import GenresInDb from './ContentRowTop/GenresInDb'

function ContentRowTop() {
    const data = [
        {
            title: '',
            borderColor: "primary",
            number: 21,
            icon: "fas fa-film fa-2x text-gray-300"
        },
        {
            title: 'TOTAL AWARDS',
            borderColor: "success",
            number: 79,
            icon: "fas fa-award fa-2x text-gray-300"
        },
        {
            title: 'ACTORS QUANTITY',
            borderColor: "warning",
            number: 49,
            icon: "fas fa-user fa-2x text-gray-300"
        },
    ];

    const genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical'];

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="row">
                <ContentRowMovies data={data} />
            </div>

            <div className="row">
                <LastMovieInDb />
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <GenresInDb genres={genres} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

		
    );
}

export default ContentRowTop;