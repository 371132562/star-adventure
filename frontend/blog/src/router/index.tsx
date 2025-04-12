import { createBrowserRouter } from 'react-router'

import Layouts from '../components/Layouts/index.tsx'
import Demo from '../pages/Demo/index.tsx'

const Router = [
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/demo',
        element: <Demo />
      }
    ]
  }
]

export default Router
