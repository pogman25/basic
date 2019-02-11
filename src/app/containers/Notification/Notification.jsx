import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';
import { getError, getSuccess } from '../App/selectors';
import { hideSuccess, hideError } from '../App/duck';

const mapStateToProps = state => ({
  errorLog: getError(state),
  successLog: getSuccess(state),
});

const mapDispatchToProps = {
  hideError,
  hideSuccess,
};

class Notification extends Component {
  notiRef = React.createRef();

  componentDidUpdate(prevProps) {
    const { errorLog, successLog, hideError, hideSuccess } = this.props;
    const notification = this.notiRef.current;

    if (prevProps.errorLog !== errorLog && !!errorLog) {
      notification.addNotification({
        message: errorLog,
        level: 'error',
        onRemove: () => hideError(),
      });
    }

    if (prevProps.successLog !== successLog && !!successLog) {
      notification.addNotification({
        message: successLog,
        level: 'success',
        onRemove: () => hideSuccess(),
      });
    }
  }

  render() {
    return <NotificationSystem ref={this.notiRef} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);
