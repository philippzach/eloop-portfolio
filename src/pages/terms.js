import React from 'react'
import { getUserLangKey } from 'ptz-i18n'
import { withPrefix } from 'gatsby'
//import Helmet from 'react-helmet'

class RedirectTerms extends React.PureComponent {
  constructor(props) {
    super(props)
    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      let utmParams = this.props.location.search.substr(1)
      if (utmParams !== '') {
        utmParams = '?' + utmParams
      }
      const langs = ['en', 'de']
      const defaultLangKey = 'de'
      const langKey = getUserLangKey(langs, defaultLangKey)
      const homeUrl = withPrefix(`/${langKey}/terms${utmParams}`)
      //homeUrl = homeUrl+"?"+utmParams;
      // I don`t think this is the best solution
      // I would like to use Gatsby Redirects like:
      // https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redirects
      // But Gatsby Redirects are static, they need to be specified at build time,
      // This redirect is dynamic, It needs to know the user browser language.
      // Any ideias? Join the issue: https://github.com/angeloocana/gatsby-starter-default-i18n/issues/4
      //window.___history.replace(homeUrl);
      //navigate(homeUrl)
      window.location.replace(homeUrl)
    }
  }

  render() {
    return <div />
  }
}

export default RedirectTerms
