import React, { useContext, useEffect, useState } from 'react'
import { updateContent } from '../actions'
import { ContentContext, ModeContext } from '../contexts'
import EditableField from './EditableField'

export default ({ header, value, rowIndex, colIndex }) => {
  const { isEditable } = useContext(ModeContext)
  const [, dispatch] = useContext(ContentContext)
  const [content, setContent] = useState(value)
  const [editMode, setEditMode] = useState(false)
  const toggleMode = () => {
    if (!isEditable) return
    setEditMode(mode => !mode)
  }
  const handleChange = e => setContent(e.target.value)
  const submitContent = () => {
    dispatch(updateContent(content, rowIndex, colIndex))
    toggleMode()
  }
  const handleKeyDown = e => {
    if (e.key === 'Enter') return submitContent()
    else if (e.key === 'Escape') {
      toggleMode()
      return setContent(value)
    }
  }

  useEffect(() => {
    setContent(value)
  }, [value])

  return header ? (
    <th
      data-testid="table-header-cell"
      className="table__cell table__cell--head"
    >
      <EditableField
        value={content}
        submitContent={submitContent}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        toggleMode={toggleMode}
        editMode={editMode}
      />
    </th>
  ) : (
    <td data-testid="table-cell" className="table__cell">
      <EditableField
        value={content}
        submitContent={submitContent}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        toggleMode={toggleMode}
        editMode={editMode}
      />
    </td>
  )
}
