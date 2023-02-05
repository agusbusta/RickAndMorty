import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
        <span className={style.footerText}>Created by Agustin Bustamante | © Copyright 2023 <a href='https://github.com/agusbusta'>
            <i class="fa-brands fa-github"></i></a><a href='https://www.linkedin.com/in/agusbusta/'>
                <i class="fa-brands fa-linkedin">
                    </i>
                    </a>
    </span>
    </div>
  )
}

export default Footer