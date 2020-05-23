import { connect } from 'react-redux';
import Dashboard from './component';
import {getMovies} from '../../actions/movies';

const mapStateToProps = (state) => ({
    allMovies: state.allMovies,
})

const mapDispatchToProps = (dispatch) => ({
    getMovies: (pageNo) => dispatch(getMovies(pageNo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);