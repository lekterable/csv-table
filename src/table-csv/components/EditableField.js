import React from 'react'

export default ({
  value,
  submitContent,
  onChange,
  onKeyDown,
  onFocus,
  toggleMode,
  editMode
}) => {
  return editMode ? (
    <input
      type="text"
      className="editable-field editable-field--input"
      value={value}
      onBlur={submitContent}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={onFocus}
      size={value.length + 1}
    />
  ) : (
    <div className="editable-field" onClick={toggleMode}>
      {value}
    </div>
  )
}
