



function GenresInDb(props) {

    return (
        <>
        { props.genres.map((genre, i) => 
            <div className="col-lg-6 mb-4" key={"genre-card-" + i}>
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        { genre }
                    </div>
                </div>
            </div>
        ) }
        </>
    );
}

export default GenresInDb;