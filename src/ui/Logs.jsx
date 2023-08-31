import React from 'react';
import { Log } from '../app-ui/main';
import { connect } from 'react-redux';

/**
 * Уведомления
 * @return {JSX.Element}
 */
function Logs ({ alerts = [], removeAlert = null }) {
  return (
    <div>
      <h3>Log</h3>

      {!!alerts.length && (
        <>
          {alerts.map((alert) => (
            <Log key={alert.id} doc={alert} onClick={() => removeAlert(alert.id)} />
          ))}
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeAlert: (id) => dispatch({ type: 'ALERT_REMOVE', id })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs)
