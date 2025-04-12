// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useRoutes } from 'react-router'

import Layouts from '@/components/Layouts'
import Demo from '@/pages/Demo'

function App() {
  return useRoutes([
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
  ])
}

export default App
