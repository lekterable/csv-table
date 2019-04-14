import React from 'react'
import { render } from 'react-testing-library'
import { useUniqueKeys } from '../../hooks'

describe('hooks', () => {
  describe('useUniqueKeys', () => {
    const Component = ({ children, length }) => children(useUniqueKeys(length))
    const setup = props => {
      const returnVal = []
      render(
        <Component {...props}>
          {val => {
            Object.assign(returnVal, val)
            return null
          }}
        </Component>
      )
      return returnVal
    }

    it('should return an array', () => {
      const uniqueKeys = setup({ length: 10 })

      expect(Array.isArray(uniqueKeys)).toBe(true)
    })

    it('should return correct amount of keys', () => {
      const uniqueKeys = setup({ length: 12 })

      expect(uniqueKeys.length).toBe(12)
    })

    it('should return unique keys', () => {
      const uniqueKeys = setup({ length: 12 })
      const isDistinct = array => new Set(array).size === array.length

      expect(isDistinct(uniqueKeys)).toBe(true)
    })
  })
})
