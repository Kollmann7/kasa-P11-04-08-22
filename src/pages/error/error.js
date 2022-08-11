import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLayout from '../../layout/headerLayout'
import './error.css'

export default class Error extends React.Component {
  render() {
    return (
      <HeaderLayout>
        <main className="error">
          <div>
            <h2>404</h2>
            <span>
              Oups! La page que vous demandez n'existe pas.
            </span>
          </div>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
      </HeaderLayout>
    )
  }
}
