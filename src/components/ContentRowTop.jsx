import ContentRowMovies from './ContentRowTop/ContentRowMovies'
import LastMovieInDb from './ContentRowTop/LastMovieInDb'
import GenresInDb from './ContentRowTop/GenresInDb'

function ContentRowTop() {
    const data = [
        {
            title: 'MOVIES IN DATABASE',
            borderColor: "primary",
            number: 21,
            icon: ""
        },
        {
            title: 'TOTAL AWARDS',
            borderColor: "success",
            number: 79,
            icon: ""
        },
        {
            title: 'ACTORS QUANTITY',
            borderColor: "warning",
            number: 49,
            icon: ""
        },
        
    ];

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
                <GenresInDb />
            </div>
        </div>

		
    );
}

export default ContentRowTop;