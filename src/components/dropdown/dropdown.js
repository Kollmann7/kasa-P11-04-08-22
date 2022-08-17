import React, { useState, useEffect } from 'react'
import { ReactComponent as DropdownArrow } from '../../assets/dropdownArrow.svg'
import './dropdown.css'

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if (props.isOpen) {
      setIsOpen(true)
    }
  }, [props.isOpen])

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggle}>
        {props.title}
        <DropdownArrow
          className={`dropdown-toggle__arrow ${
            isOpen ? 'dropdown-toggle__arrow--open' : ''
          }`}
        />
      </button>
      <div className={`dropdown-menu ${isOpen ? 'dropdown-menu--open' : ''}`}>
        {props.list && (
          <ul>
            {props.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {props.text && <p>{props.text}</p>}
      </div>
    </div>
  )
}

export default Dropdown
