import React from 'react';
import ReactDOM from 'react-dom';



function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://cdn.icon-icons.com/images/icon-icons.svg'
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


const element =<div>
  <div>{getGreeting(user)}</div>
  <img src={user.avatarUrl} />
  </div>;
ReactDOM.render(
  element,
  document.getElementById('root')
);