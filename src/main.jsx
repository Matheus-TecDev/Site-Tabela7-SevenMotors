import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import App from './App'
import 'antd/dist/reset.css' // ou 'antd/dist/antd.css', conforme seu setup

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        cssVar: true,   // ativa CSS Variables
        hashed: false   // desliga as hashes das classes
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
