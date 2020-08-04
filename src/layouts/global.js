const globalGoogleStructuredDataIOS = () => {
  let data = {
    '@context': 'http://schema.org/',
    '@type': 'SoftwareApplication',
    name: `Eloop Carsharing`,
    url: 'https://www.eloop.at',

    sameAs: [
      'http://www.facebook.com/eloop.carsharing',
      'http://instagram.com/eloop.carsharing',
      'http://www.linkedin.com/company/eloopmobi',
    ],
    operatingSystem: 'ANDROID',
    applicationCategory:
      'https://play.google.com/store/apps/details?id=com.vulog.carshare.eloop',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      ratingCount: '8864',
    },
    offers: {
      '@type': 'Offer',
      price: '0.0',
      priceCurrency: 'EUR',
    },
  }

  return JSON.stringify(data)
}
const globalGoogleStructuredDataANDROID = () => {
  let data = {
    '@context': 'http://schema.org/',
    '@type': 'SoftwareApplication',
    name: `Eloop Carsharing`,
    url: 'https://www.eloop.at',

    sameAs: [
      'http://www.facebook.com/eloop.carsharing',
      'http://instagram.com/eloop.carsharing',
      'http://www.linkedin.com/company/eloopmobi',
    ],
    operatingSystem: 'IOS',
    applicationCategory:
      'https://apps.apple.com/at/app/eloop-elektrisches-carsharing/id1465221970',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      ratingCount: '8864',
    },
    offers: {
      '@type': 'Offer',
      price: '0.0',
      priceCurrency: 'EUR',
    },
  }

  return JSON.stringify(data)
}

const globalGoogleStructuredDataORG = () => {
  let data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `Eloop Carsharing`,
    url: 'https://www.eloop.at',
    logo: 'https://www.eloop.at/eloop-logo.png',
  }

  return JSON.stringify(data)
}

export default {
  globalGoogleStructuredDataIOS,
  globalGoogleStructuredDataANDROID,
  globalGoogleStructuredDataORG,
}
