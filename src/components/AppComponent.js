import React from 'react'

const AppComponent = ({name, surname, code, title, getDetail}) => {

  return (
    <div>
      <h1>{title}</h1>
      <br/>
      <button onClick={getDetail}>GET DETAIL</button>
      <br/>
      <GetDetailComponent name={name} surname={surname} code={code}/>
    </div>
  )
};

export default AppComponent;

const GetDetailComponent = ({name, surname, code}) => {

  return <>
    <p>{name}</p>
    <br/>
    <p>{surname}</p>
    <br/>
    <p>{code}</p>
  </>
};

