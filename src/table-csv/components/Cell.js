import React, { useState } from 'react'

export default ({ header, value }) => {
  const [content, setContent] = useState(value)
  const [editMode, setEditMode] = useState(false)
  const toggleMode = () => setEditMode(mode => !mode)
  const handleFocus = ref => ref && ref.focus()
  const handleChange = e => setContent(e.target.value)

  return header ? (
    <th>
      {editMode ? (
        <input
          type="text"
          value={content}
          onBlur={toggleMode}
          onChange={handleChange}
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
          onBlur={toggleMode}
          onChange={handleChange}
          ref={handleFocus}
        />
      ) : (
        <div onClick={toggleMode}>{content}</div>
      )}
    </td>
  )
}
