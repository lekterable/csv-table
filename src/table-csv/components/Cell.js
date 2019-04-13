import React, { useContext, useEffect, useState } from 'react'
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
  const handleFocus = ref => ref && ref.focus()
  const handleChange = e => setContent(e.target.value)
  const submitContent = () => {
    dispatch({ type: 'UPDATE_CONTENT', content, rowIndex, colIndex })
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
    <th className="table__cell table__cell--head">
      <EditableField
        value={content}
        submitContent={submitContent}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        toggleMode={toggleMode}
        editMode={editMode}
      />
    </th>
  ) : (
    <td className="table__cell">
      <EditableField
        value={content}
        submitContent={submitContent}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        toggleMode={toggleMode}
        editMode={editMode}
      />
    </td>
  )
}
