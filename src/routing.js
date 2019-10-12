import { generatePath } from 'react-router'

const getRoute= (pattern) => {
  return {
    pattern,
    path: (...params) => generatePath(pattern, ...params)
  }
}

export const HomePage = getRoute('/')
export const SelectPage = getRoute('/select')
export const SpacePage = getRoute('/space/:id/:tab(stats|aggregated)?')
export const EditPage =  getRoute('/edit/:id')


