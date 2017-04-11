import {connect} from 'react-redux';
import ColorList from '../components/list/ColorList';

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeColor: (col) => dispatch({
      type: 'CHANGE_COLOR',
      col
    })
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList);

export default ListContainer;
