import React from 'react'

export const Header = (props) => {
  return (
   <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row m-auto">
          <i className="fa fa-bolt fa-2x text-warning mr-2" />
          <div className="text-light h2">{props.title}</div>
        </div>
      </div>
    </nav>
  );
}
