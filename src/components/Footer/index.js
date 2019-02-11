import React from 'react'
import s from './style.module.scss'

export default () => {
  return (
    <footer className={s.footer}>
      <span className={s.text}>
        © {new Date().getFullYear()} built with ❤ by{' '}
      </span>
      <a className={s.link} href="https://twitter.com/wgao19">
        @wgao19
      </a>
      <a className={s.link} href="http://wgao19.cc" target="_blank">
        main site
      </a>
    </footer>
  )
}
