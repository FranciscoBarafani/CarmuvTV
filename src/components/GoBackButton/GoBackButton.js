import React from 'react'
import { LeftOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

export default function GoBackButton() {
  return (
    <Link to="/">
      <LeftOutlined />
      Volver atrás
    </Link>
  )
}
