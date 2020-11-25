import React from 'react'
// import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { styles } from '../theme/styles'



const NavItem = ({ text, setSection }) => {
  const classes = makeStyles(styles)()
  //   const handleSectionClick = (e) => {
  //   e.preventDefault()
  //   setKeyword(e.target.value)
  // }
  return <Button onClick={() => setSection(text.toLowerCase())} className={classes.navItem} value={text.toLowerCase()}>{text}</Button>
}

const NavBarContent = ({ sections, setSection }) => {
  const classes = makeStyles(styles)()
  // return only the section
  // let sections = articles.filter((value, index, article) => article.indexOf(value) === index)
  // another sexy way of doing this
  // let unique = [
  //   ...new Set(articles.map((article) => article.section))
  // ]

  return (
    <div className={classes.navMenu}>
      <Divider orientation='vertical' flexItem />
      {sections &&
        sections.map((section, i) => (
          <React.Fragment>
            <NavItem key={i} text={section} setSection={setSection} />
            <Divider orientation='vertical' flexItem />
          </React.Fragment>
        ))}
    </div>
  )
}

export default NavBarContent
