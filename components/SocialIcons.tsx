import React from 'react'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

const SocialIcons = () => {
  return (
    <React.Fragment>
      <div className="social-icons">
        <a
          rel="me"
          href="mailto:ed_f_souza@hotmail.com"
          className="button-icon"
          target="_blank"
          title="mail: ed_f_souza@hotmail.com"
        >
          <MailIcon />
        </a>
        <a
          rel="me"
          href="https://www.linkedin.com/in/edson-souza-99205535"
          className="button-icon"
          target="_blank"
          title="linkedin: edson-souza-99205535"
        >
          <LinkedInIcon />
        </a>
        <a
          rel="me"
          href="https://github.com/edscaylart"
          className="button-icon"
          target="_blank"
          title="github: edscaylart"
        >
          <GitHubIcon />
        </a>
        <a
          rel="me"
          href="https://twitter.com/edscaylart"
          className="button-icon"
          target="_blank"
          title="twitter: @edscaylart"
        >
          <TwitterIcon />
        </a>
      </div>
      <style jsx>{`
        .social-icons {
          display: block;
          margin-top: 15px;
        }
        .button-icon {
          display: inline-block;
          margin-right: .8em;
          color: #bebebe;
          line-height: 1;
        }
      `}</style>
    </React.Fragment>
  )
}

export default SocialIcons
