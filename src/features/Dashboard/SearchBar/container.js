import { connect } from 'react-redux';
import SearchBar from './component';

const mapStateToProps = (state) => ({
    allLanguages: state.allLanguages,
    allMovies: state.allMovies
})

export default connect(mapStateToProps, {})(SearchBar);
