import React from 'react'
import { isAndroid, isIOS, isBrowser } from 'react-device-detect'

class Register extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log(this.props.location)
    // Skip build, OS only
    if (typeof window !== 'undefined') {
      const RedirectPathContent = () => {
        var utmParams = window.location.search.substr(1)
        var userLang = navigator.language || navigator.userLanguage
        let returnLink =
          'https://registration.vulog.center/register/fleet_CAROO-ATVIE'
        if (userLang.includes('de')) {
          returnLink = returnLink + '?lang=de&' + utmParams
        } else {
          returnLink = returnLink + '?lang=en&' + utmParams
        }
        if (isAndroid) {
          return returnLink
        } else if (isIOS) {
          return returnLink
        } else if (isBrowser) {
          return returnLink
        }
      }
      const PXContent = () => {
        if (isAndroid) {
          return '<img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=PageView" height="1" width="1" style="display:none"/><img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=RegisterNowAndroid" height="1" width="1" style="display:none"/>'
        } else if (isIOS) {
          return '<img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=PageView" height="1" width="1" style="display:none"/><img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=RegisterNowIOS" height="1" width="1" style="display:none"/>'
        } else if (isBrowser) {
          return '<img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=PageView" height="1" width="1" style="display:none"/><img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=RegisterNowDesktop" height="1" width="1" style="display:none"/>'
        }
      }
      window.document.write(PXContent())
      setTimeout(function() {
        window.location.replace(RedirectPathContent())
      }, 1900)
      //navigate();
    }
  }

  render() {
    return <div />
  }
}

export default Register
