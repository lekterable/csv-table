import React from 'react'

export default ({
  value = '',
  submitContent,
  onChange,
  onKeyDown,
  toggleMode,
  editMode
}) => {
  return editMode ? (
    <input
      data-testid="editable-field-input"
      type="text"
      className="editable-field editable-field--input"
      readOnly={!onChange}
      value={value}
      onBlur={submitContent}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoFocus
      size={value.length + 1}
    />
  ) : (
    <div
      data-testid="editable-field-display"
      className="editable-field"
      onClick={toggleMode}
    >
      {value}
    </div>
  )
}
