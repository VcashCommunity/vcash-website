import React from 'react'
import { translate } from 'react-i18next'

/** Required components. */
import SelectLanguage from './SelectLanguage.js'

@translate(['common'])
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.t = props.t
  }

  render() {
    return (
      <footer className="shadow">
        <div className="flex-sb footer wrapper">
          <div className="footer-column">
            <SelectLanguage />
          </div>
          <div className="footer-column">
            <div className="flex-center">
              <i className="material-icons md-16">copyright</i>
              <p>
                Vcash {this.t('developers')} 2013 - {new Date().getFullYear()}
              </p>
            </div>
          </div>
          <div className="footer-column">
            <div className="flex footer-icons">
              <a href="https://github.com/openvcash" target="_blank">
                <img
                  src="/static/images/iconGitHub.png"
                  height="24px"
                  width="24px"
                />
              </a>
              <a href="https://twitter.com/Vcashinfo" target="_blank">
                <img
                  src="/static/images/iconTwitter.png"
                  height="21px"
                  width="24px"
                />
              </a>
              <a href="https://gitter.im/openvcash/vcash" target="_blank">
                <img
                  src="/static/images/iconGitter.png"
                  height="24px"
                  width="24px"
                />
              </a>
              <a href="https://www.reddit.com/r/Vcash/" target="_blank">
                <img
                  src="/static/images/iconReddit.png"
                  height="24px"
                  width="24px"
                />
              </a>
              <a
                href="https://webchat.freenode.net/?channels=vcash"
                target="_blank"
              >
                <img
                  src="/static/images/iconIRC.png"
                  height="19px"
                  width="34px"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
