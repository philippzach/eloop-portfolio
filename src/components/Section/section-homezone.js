import React from 'react'
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api'
import HomeZone from '../homezone.json'
import styled from '@emotion/styled'
import Icon1 from '../../images/light.svg'
import Icon2 from '../../images/speaker.svg'
import Icon3 from '../../images/phone.svg'
import styles from './section.module.css'

const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
]

const GoogleAPI = 'AIzaSyCwzljiN8CuiCLaDgpxOhJ_TQFmL45dfg8'

function renderRegions() {
  let coordinates = HomeZone.coordinates[0]
  let coordArr = []
  let polyPath = []
  coordinates.map(coordinate =>
    coordArr.push({ lat: coordinate[1], lng: coordinate[0] })
  )
  coordArr.map(region => {
    polyPath.push(region)
  })
  return polyPath
}

let style1 = {
  backgroundImage: `url(${Icon1})`,
}
let style2 = {
  backgroundImage: `url(${Icon2})`,
}
let style3 = {
  backgroundImage: `url(${Icon3})`,
}
const Paragraph = styled.p`
  line-height: 30px;
  max-width: 30em;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  /*   margin: 8em 0; */

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    /*  margin: 4em 0; */
  }
`

const Module1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 50%;
  order: 2;
  @media (min-width: 1800px) {
    flex: 50%;
    order: 2;
  }
  @media (min-width: 1000px) and (max-width: 1800px) {
    flex: 50%;
    order: 2;
  }
`
const Module2 = styled.div`
  margin: 0 auto;
  max-width: 25em;
  padding: 2em;
  @media (min-width: 1800px) {
    flex: 50%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1000px) and (max-width: 1800px) {
    flex: 50%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const MapComponent = props => (
  <FlexContainer>
    <Module1>
      <LoadScript id="script-loader" googleMapsApiKey={GoogleAPI}>
        <GoogleMap
          id="example-map"
          options={{ styles: mapStyles }}
          zoom={13}
          mapContainerStyle={{
            height: '850px',
            width: '100%',
          }}
          center={{
            lat: 48.210033,
            lng: 16.363449,
          }}
        >
          <Polygon
            onLoad={polygon => {
              console.log('polygon: ', polygon)
            }}
            paths={[renderRegions()]}
            options={{
              fillColor: '#3BD9AA',
              fillOpacity: 0.5,
              strokeColor: '#3BD9AA',
              strokeOpacity: 1,
              strokeWeight: 2,
              clickable: false,
              draggable: false,
              editable: false,
              geodesic: false,
              zIndex: 1,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </Module1>
    <Module2>
      <h2>{props.title}</h2>
      <Paragraph>{props.description}</Paragraph>
      <h3>{props.subHeading}</h3>
      <Paragraph>{props.subParagraph}</Paragraph>
      <ul className={styles.features}>
        <li style={style1} className={styles.listitems}>
          {props.claim1}
        </li>
        <li style={style2} className={styles.listitems}>
          {props.claim2}
        </li>
        <li style={style3} className={styles.listitems}>
          {props.claim3}
        </li>
      </ul>
    </Module2>
  </FlexContainer>
)

export default MapComponent
