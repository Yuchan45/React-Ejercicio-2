import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Table from "./Table";
import TableRows from "./TableRows";


function ContentWrapper() {

    const movies = [
        {
            title: "Naruto: The last",
            duration: 180,
            rating: 8,
            genres: ['Animation', 'Action'],
            awards: 2
        },
        {
            title: "Bleach: Sennen sensou",
            duration: 140,
            rating: 7,
            genres: ['Animation', 'Shonen'],
            awards: 1
        },
        {
            title: "One Piece: Red The film",
            duration: 180,
            rating: 10,
            genres: ['Animation', 'Pirates', 'Comedy'],
            awards: 5
        },

    ];

    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">
                <TopBar />
                <ContentRowTop />
            </div>

            <Table>
                <TableRows movies={movies}/>
            </Table>
            

            <Footer />
        </div>

		
    );
}

export default ContentWrapper;