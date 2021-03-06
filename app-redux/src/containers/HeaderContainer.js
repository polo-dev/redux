import {connect} from 'react-redux';
import Header from '../components/header/Header';

const mapStateToProps = (state, ownProps) => {
  return {
    objStyle: state.objStyle
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;
