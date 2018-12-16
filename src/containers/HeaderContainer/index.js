import { connect } from 'react-redux';
import Header from './../../component/Home/Header';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.userReducer.isAuthenticated,
    user: state.userReducer.user
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  null
)(Header);

export default HeaderContainer;
