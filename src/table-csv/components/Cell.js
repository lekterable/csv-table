import React, { useContext, useState } from 'react'
import { ContentContext } from '../contexts'

export default ({ header, value, rowIndex, colIndex }) => {
  const [, dispatch] = useContext(ContentContext)
  const [content, setContent] = useState(value)
  const [editMode, setEditMode] = useState(false)
  const toggleMode = () => setEditMode(mode => !mode)
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

  return header ? (
    <th>
      {editMode ? (
        <input
          type="text"
          value={content}
          onBlur={submitContent}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={handleFocus}
        />
      ) : (
        <div onClick={toggleMode}>{content}</div>
      )}
    </th>
  ) : (
    <td>
      {editMode ? (
        <input
          type="text"
          value={content}
          onBlur={submitContent}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={handleFocus}
        />
      ) : (
        <div onClick={toggleMode}>{content}</div>
      )}
    </td>
  )
}
