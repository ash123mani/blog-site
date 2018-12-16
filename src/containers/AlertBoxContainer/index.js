import { connect } from 'react-redux';

import AlertBox from '../../component/AlertBox';

import { removeError } from '../../redux/actions/errorActions';

const mapStateToProps = state => {
  return {
    errorMessage: state.errorReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeError: () => dispatch(removeError())
  };
};

const AlertBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertBox);

export default AlertBoxContainer;
