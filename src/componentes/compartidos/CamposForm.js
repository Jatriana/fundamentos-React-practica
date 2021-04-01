import React from 'react';
import classNames from 'classnames';

import './CamposForm.css'

function CamposForm({ className, label, ...props }) {
  return (
  <div
    className={classNames(
      'campoForm',
      { 'campoForm--focused': false },
      className
    )}
  >
    <label className="campoForm-label">
      <span>{label}</span>
      <input className="campoForm-input" autoComplete="off" {...props}></input>-
    </label>
  </div>
  )
}
export default CamposForm;
