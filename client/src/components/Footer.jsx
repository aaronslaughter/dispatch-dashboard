import React from 'react'
import GitHubMark from '../assets/GitHub-Mark-64px.png'
import LinkedInLogo from '../assets/LI-In-Bug.png'

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/aaronslaughter/dispatch-dashboard" target="_blank" rel="noopener noreferrer"><img src={GitHubMark}/></a>
      <a href="https://www.linkedin.com/in/aaron-slaughter1/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} style={{width:64 + 'px'}}/></a>
    </footer>
  )
}
