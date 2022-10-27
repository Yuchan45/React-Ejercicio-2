import propTypes from 'prop-types';

function ContentRowMovies(props) {

    return (
        props.data.map((element, i) => 
            <div className="col-md-4 mb-4" key={"card-" + i}>
                <div className={"card border-left-" + element.borderColor + " shadow h-100 py-2"}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{ element.title }</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{ element.number }</div>
                            </div>
                            <div className="col-auto">
                                <i className={element.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )     
    );
}

ContentRowMovies.propTypes = {
    title: propTypes.string,
    borderColor: propTypes.oneOf(['primary', 'success', 'warning']).isRequired,
    number: propTypes.number.isRequired,
    icon: propTypes.oneOf(['fas fa-film fa-2x text-gray-300', 'fas fa-award fa-2x text-gray-300', 'fas fa-user fa-2x text-gray-300']).isRequired
};

ContentRowMovies.defaultProps = {
    title: 'Sin titulo',
    borderColor: 'warning',
    number: 0,
    icon: 'fas fa-film fa-2x text-gray-300'
};

export default ContentRowMovies;