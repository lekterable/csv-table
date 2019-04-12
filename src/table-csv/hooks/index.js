import { useMemo } from 'react'
import uuid from 'uuid'

export const useUniqueKeys = length =>
  useMemo(() => Array.from({ length }, () => uuid.v4()), [length])
