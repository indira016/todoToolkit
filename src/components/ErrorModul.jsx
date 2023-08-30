import React, { Fragment } from 'react'
import Card from './ui/Card'
import classes from './ErrorModul.module.css'
import Button from './ui/Button'

const ErrorModul = (props) => {

  return (
    <Fragment >
      <div className={classes.backdrop} onClick={props.onClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={classes.content}>
          <p>{props.messege}</p>
        </main>
        <footer className={classes.actions} >
          <Button onClick={props.onClick}>OK</Button>
        </footer>
      </Card>
    </Fragment>
  )
}


export default ErrorModul