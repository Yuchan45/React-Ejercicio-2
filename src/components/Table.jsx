import '../assets/css/Table.css'


function Table(props) {
    return (
        <table className="table">
            <tr className="titles">
                <th className="title-bold">Title</th>
                <th className="title-bold">Duration</th>
                <th className="title-bold">Rating</th>
                <th className="title-bold">Genre</th>
                <th className="title-bold">Awards</th>
            </tr>
            
            { props.children }
        </table>
    );
}

export default Table;