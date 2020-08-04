import React, { Component } from 'react'
import { Location } from '@reach/router'

import { Link } from 'gatsby'
import styles from './navigation.module.css'
import './languageswitcher.css'
import Logo from './logo.js'

import './mobile.css'
import Burger from './mobilemenu-off.svg'
import Appstore from '../Header/appstore.svg'
import Playstore from '../Header/playstore.svg'

class Navigation extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sidebarOpen: false,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  handleMouseDown(e) {
    this.toggleMenu()
    console.log('clicked')
  }
  toggleMenu() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  render() {
    const locationProps = this.props.location
    function generateLink(initialLink) {
      if (locationProps === undefined) {
        return initialLink
      } else {
        let res = initialLink.concat(locationProps)
        return res
      }
    }
    return (
      <main>
        <nav className={styles.navbar}>
          <Logo lang="en" location={this.props.location} />
          <ul className={styles.navlist}>
            <li className={styles.navlink}>
              <Link
                id="menu-faq"
                className={styles.links}
                to={generateLink('/en/aboutus')}
                activeClassName={styles.activenav}
              >
                <span className={styles.spanner}>Vision</span>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link
                id="menu-faq"
                className={styles.links}
                to={generateLink('/en/pricing')}
                activeClassName={styles.activenav}
              >
                <span className={styles.spanner}>Pricing</span>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link
                id="menu-faq"
                className={styles.links}
                to={generateLink('/en/homezone')}
                activeClassName={styles.activenav}
              >
                <span className={styles.spanner}>Homezone</span>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link
                id="menu-contact"
                className={styles.links}
                to={generateLink('/en/contact')}
                activeClassName={styles.activenav}
              >
                <span className={styles.spanner}>Contact</span>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link
                id="menu-faq"
                className={styles.links}
                to={generateLink('/en/frequently-asked-questions')}
                activeClassName={styles.activenav}
              >
                <span className={styles.spanner}>FAQ</span>
              </Link>
            </li>
            <li className={styles.navlink}>
              <Link
                id="menu-contact"
                className={styles.links}
                to={generateLink('/en/blog')}
                activeClassName={styles.activenav}
                getProps={({ isPartiallyCurrent }) =>
                  isPartiallyCurrent ? { className: 'activenav links' } : null
                }
              >
                <span className={styles.spanner}>Blog</span>
              </Link>
            </li>
            <div class="sl-nav">
              <ul>
                <li>
                  <Location>
                    {({ location }) => {
                      let Url = location.pathname.substring(3)
                      if (Url.includes('blog'))
                        return (
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                            }}
                            to="/en/blog"
                          >
                            <i class="sl-flag flag-usa">
                              <div id="germany" />
                            </i>
                          </Link>
                        )
                      else
                        return (
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                            }}
                            to={generateLink(
                              '/en' + location.pathname.substring(3)
                            )}
                          >
                            <i class="sl-flag flag-usa">
                              <div id="germany" />
                            </i>
                          </Link>
                        )
                    }}
                  </Location>{' '}
                  |{' '}
                  <Location>
                    {({ location }) => {
                      let Url = location.pathname.substring(3)
                      if (Url.includes('blog'))
                        return (
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                            }}
                            to="/de/blog"
                          >
                            <i class="sl-flag flag-de">
                              <div id="germany" />
                            </i>
                          </Link>
                        )
                      else
                        return (
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                            }}
                            to={generateLink(
                              '/de' + location.pathname.substring(3)
                            )}
                          >
                            <i class="sl-flag flag-de">
                              <div id="germany" />
                            </i>
                          </Link>
                        )
                    }}
                  </Location>
                </li>
              </ul>
            </div>
          </ul>
          <div
            role="button"
            className={styles.mobileburger}
            onClick={() => this.handleMouseDown()}
          >
            <img src={Burger} alt="burger menu" style={{ display: 'flex' }} loading="lazy"/>
          </div>
        </nav>
        <div
          id="MobileMenu"
          className={'menu' + this.state.sidebarOpen}
          onClick={() => this.handleMouseDown()}
        >
          <div className="mobile-menu-links">
            <Link
              id="mobile-menu-faq"
              to={generateLink('/en/aboutus')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h4 className="mobile-menu-link">Our Vision</h4>
            </Link>
            <Link
              id="mobile-menu-faq"
              to={generateLink('/en/pricing')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h4 className="mobile-menu-link">Pricing</h4>
            </Link>
            <Link
              id="mobile-menu-faq"
              to={generateLink('/en/frequently-asked-questions')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h4 className="mobile-menu-link">FAQ</h4>
            </Link>
            <Link
              id="mobile-menu-contact"
              to={generateLink('/en/contact')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h4 className="mobile-menu-link">Contact</h4>
            </Link>
            <Link
              id="mobile-menu-blog"
              to={generateLink('/en/blog')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h4 className="mobile-menu-link">Blog</h4>
            </Link>
          </div>
          <div>
            <ul className="language-list">
              <li className="language-mobile">
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  to={generateLink('/de/')}
                >
                  <i class="sl-flag flag-de">
                    <div id="germany" />
                  </i>{' '}
                  <span class="active">Deutsch</span>
                </Link>
              </li>
              <li className="language-mobile">
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  to={generateLink('/en/')}
                >
                  <i class="sl-flag flag-usa">
                    <div id="germany" />
                  </i>{' '}
                  <span>Englisch</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="appcontainer">
            <a
              id="cta-appstore"
              href="itms-apps://apps.apple.com/us/app/eloop-elektrisches-carsharing/id1465221970?ls=1s"
            >
              <img
                className="installbutton"
                src={Appstore}
                alt="Download Eloop App on Apple Appstore"
                loading="lazy"
              />
            </a>
            <a
              id="cta-playstore"
              href="https://play.google.com/store/apps/details?id=com.vulog.carshare.eloop"
            >
              <img
                className="installbutton"
                src={Playstore}
                alt="Download Eloop App on Google Playstore"
                loading="lazy"
              />
            </a>
          </div>
          <div
            className="flexcontainer fix-mobile"
            style={{ marginTop: '1.8em' }}
          >
            <div>
              <p style={{ textAlign: 'center' }}>
                © 2019 Caroo Mobility GmbH | All Rights reserved
              </p>
            </div>
            <div>
              <a id="social-twitter" href="https://twitter.com/eloop_mobi">
                <svg
                  title="Twitter Link"
                  alt="twitter eloop profile"
                  viewBox="0 0 30 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  className="icons"
                >
                  <path d="m29.55 2.85c-.841 1.224-1.848 2.26-3.004 3.106l-.036.025q.018.262.018.787c-.004 1.736-.264 3.41-.745 4.987l.032-.122c-.534 1.773-1.272 3.32-2.206 4.724l.04-.065c-.989 1.509-2.132 2.808-3.435 3.927l-.024.02c-1.372 1.153-2.978 2.083-4.73 2.704l-.108.033c-1.765.648-3.803 1.022-5.928 1.022-.045 0-.09 0-.134 0h.007c-.038 0-.082 0-.127 0-3.41 0-6.584-1.015-9.234-2.76l.063.039c.419.048.904.075 1.396.075h.07-.004c.037 0 .082.001.126.001 2.807 0 5.386-.975 7.417-2.606l-.023.018c-2.639-.05-4.861-1.777-5.65-4.157l-.012-.043c.342.057.738.091 1.141.094h.003c.567 0 1.116-.075 1.637-.216l-.044.01c-1.412-.284-2.615-1.034-3.47-2.08l-.008-.011c-.858-1.011-1.379-2.331-1.379-3.773 0-.028 0-.056.001-.084v.004-.075c.788.452 1.726.732 2.727.768h.011c-.822-.553-1.487-1.279-1.953-2.129l-.016-.031c-.46-.835-.731-1.83-.731-2.889 0-1.126.306-2.18.84-3.084l-.015.028c1.5 1.839 3.337 3.341 5.425 4.427l.095.045c2.022 1.067 4.402 1.743 6.927 1.864l.038.001c-.093-.415-.147-.892-.149-1.382v-.001c.004-3.345 2.717-6.055 6.062-6.055 1.74 0 3.309.733 4.415 1.908l.003.003c1.448-.284 2.735-.792 3.893-1.492l-.053.03c-.455 1.431-1.4 2.596-2.635 3.323l-.028.015c1.294-.148 2.475-.479 3.569-.967l-.077.031z" />
                </svg>
              </a>
              <a
                id="social-linkedin"
                href="https://linkedin.com/company/eloopmobi"
              >
                <svg
                  title="Linkedin Link"
                  alt="linkedin eloop profile"
                  viewBox="0 0 25 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  className="icons"
                >
                  <path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z" />
                </svg>
              </a>
              <a
                id="social-facebook"
                href="https://www.facebook.com/eloop.mobi/"
              >
                <svg
                  title="Facebook Link"
                  alt="facebook eloop profile"
                  viewBox="0 0 12 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  className="icons"
                >
                  <path d="m12.462.173v3.808h-2.265c-.079-.011-.171-.017-.264-.017-.542 0-1.036.203-1.411.538l.002-.002c-.275.384-.439.863-.439 1.381 0 .062.002.124.007.185v-.008 2.726h4.229l-.56 4.27h-3.663v10.946h-4.417v-10.947h-3.68v-4.269h3.68v-3.145c-.007-.102-.011-.222-.011-.342 0-1.478.575-2.822 1.513-3.82l-.003.003c.972-.92 2.288-1.485 3.735-1.485.09 0 .18.002.27.007h-.013c.118-.002.256-.003.395-.003 1.02 0 2.025.064 3.011.188l-.117-.012z" />
                </svg>
              </a>
              <a
                id="social-instagram"
                href="https://www.instagram.com/eloop.mobi/"
              >
                <svg
                  title="Instagram Link"
                  alt="instagram eloop profile"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  className="icons"
                >
                  <path d="m16 12v-.001c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4c1.104 0 2.104-.448 2.828-1.171.723-.701 1.172-1.682 1.172-2.768 0-.021 0-.042-.001-.063v.003zm2.16 0c-.012 3.379-2.754 6.114-6.135 6.114-3.388 0-6.135-2.747-6.135-6.135s2.747-6.135 6.135-6.135c1.694 0 3.228.687 4.338 1.797 1.109 1.08 1.798 2.587 1.798 4.256 0 .036 0 .073-.001.109v-.005zm1.687-6.406v.002c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44c.398 0 .758.161 1.018.422.256.251.415.601.415.988v.029-.001zm-7.84-3.44-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014c-1.044.425-1.857 1.237-2.272 2.254l-.01.027c-.119.318-.219.695-.284 1.083l-.005.037c-.082.469-.14 1.024-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649.008 1.195-.008 1.195 0 1.649.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043c.425 1.044 1.237 1.857 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024 1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014c1.044-.425 1.857-1.237 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649-.008-1.195.008-1.195 0-1.649-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073c-.07-.425-.17-.802-.303-1.163l.014.043c-.425-1.044-1.237-1.857-2.254-2.272l-.027-.01c-.318-.119-.695-.219-1.083-.284l-.037-.005c-.469-.082-1.024-.14-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zm11.993 9.846q0 3.578-.08 4.953c.005.101.009.219.009.337 0 3.667-2.973 6.64-6.64 6.64-.119 0-.237-.003-.354-.009l.016.001q-1.375.08-4.953.08t-4.953-.08c-.101.005-.219.009-.337.009-3.667 0-6.64-2.973-6.64-6.64 0-.119.003-.237.009-.354l-.001.016q-.08-1.375-.08-4.953t.08-4.953c-.005-.101-.009-.219-.009-.337 0-3.667 2.973-6.64 6.64-6.64.119 0 .237.003.354.009l-.016-.001q1.375-.08 4.953-.08t4.953.08c.101-.005.219-.009.337-.009 3.667 0 6.64 2.973 6.64 6.64 0 .119-.003.237-.009.354l.001-.016q.08 1.374.08 4.953z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Navigation

/*
 
*/
