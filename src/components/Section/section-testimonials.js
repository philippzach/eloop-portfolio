import React from 'react'
import styled from '@emotion/styled'
import Slide from '../SliderComponent/slider'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Container = styled.div`
  position: relative;
  z-index: 0;
`
const ButtonLeft = styled.button`
  position: absolute;
  z-index: 100;
  top: 35%;

  background: white;
  border-radius: 100%;
  padding: 1em;
  box-shadow: rgba(35, 35, 35, 0.08) 0 11px 22px 0;
  border: none;
  transition: ease-in 100ms;
  &:hover {
    transform: translateY(4px);
  }
  @media (max-width: 500px) {
    display: none;
  }
`
const ButtonRight = styled.button`
  position: absolute;
  z-index: 100;
  top: 35%;
  right: 0;

  background: white;
  border-radius: 100%;
  padding: 1em;
  box-shadow: rgba(35, 35, 35, 0.08) 0 11px 22px 0;
  border: none;
  transition: ease-in 100ms;
  &:hover {
    transform: translateY(4px);
  }
  @media (max-width: 500px) {
    display: none;
  }
`

class testimonials extends React.Component {
  items = [1, 2, 3, 4]
  state = { currentIndex: 0 }
  handleOnDragStart = e => e.preventDefault()
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
  render() {
    const { currentIndex } = this.state
    return (
      <Container>
        <ButtonLeft onClick={() => this.slidePrev()}><svg  height="15px" viewBox="0 0 451.847 451.847" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m97.141 225.92c0-8.095 3.091-16.192 9.259-22.366l194.289-194.284c12.359-12.359 32.397-12.359 44.751 0 12.354 12.354 12.354 32.388 0 44.748l-171.915 171.902 171.903 171.909c12.354 12.354 12.354 32.391 0 44.744-12.354 12.365-32.386 12.365-44.745 0l-194.29-194.281c-6.167-6.177-9.252-14.274-9.252-22.372z"/></svg></ButtonLeft>
        <AliceCarousel
          mouseDragEnabled
          duration={400}
          buttonsDisabled={true}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        >
          <Slide
            data={this.props.data.testimonial1.childImageSharp.fluid}
            title="Perfekt für Wochenend-Ausflüge"
            description="Ich nutze die Eloop-Autos immer am Wochenende, um mit meiner Familie ins Grüne zu Fahren. Mit der Reichweite hatten wir bisher nie ein Problem und genug Platz für vier Leute plus Ausrüstung gibt es auch."
            name="Werner (46), aus Wien"
            onDragStart={this.handleOnDragStart}
            className="yours-custom-class"
          />
          <Slide
            data={this.props.data.testimonial2.childImageSharp.fluid}
            title="Als Transport zum Shopping Center"
            description="Ohne Auto sind Großeinkäufe oder Transporte schwierig zu organisieren. Auch wenn es nicht oft vorkommt, will ich nicht 1 Woche voraus planen müssen, um das Auto meiner Eltern leihen zu können. In diesen Fällen verwende ich den Eloop BMW i3."
            name="Alex (23), aus Wien"
            onDragStart={this.handleOnDragStart}
            className="yours-custom-class"
          />
          <Slide
            data={this.props.data.testimonial3.childImageSharp.fluid}
            title="Familien-Besuch"
            description="Zur Großtante meiner Frau fahren wir öfters mit einem Eloop. Der Bauernhof ist öffentlich nicht erreichbar und ein Taxi vom Bahnhof würde uns im Endeffekt dasselbe kosten."
            name="Christian (51), aus Wien"
            onDragStart={this.handleOnDragStart}
            className="yours-custom-class"
          />
          <Slide
            data={this.props.data.testimonial4.childImageSharp.fluid}
            title="Mehrere Stops auf einmal erledigen"
            description="Ich verwende Eloop, wenn ich beruflich viele Termine an verschiedenen Standorten habe. Das kommt ein paar Mal im Monat vor und dann miete ich mir meistens ein Eloop – Auto zum Tagestarif."
            name="Franziska (27), aus Wien"
            onDragStart={this.handleOnDragStart}
            className="yours-custom-class"
          />
          <Slide
            data={this.props.data.testimonial5.childImageSharp.fluid}
            title="Raus aus der Stadt"
            description="Wir versuchen uns einmal im Monat zu treffen und wenn wir etwas außerhalb von Wien unternehmen, nehmen wir uns ein Eloop-Auto. Wir sind dann mobil und unabhängig von Abfahrtszeiten, so bleiben wir spontan während unserem Trip."
            name="Klara, Max, Steffi, Samir (25), aus Wien"
            onDragStart={this.handleOnDragStart}
            className="yours-custom-class"
          />
        </AliceCarousel>
        <ButtonRight onClick={() => this.slideNext()}>
          <svg
            x="0px"
            y="0px"
            width="15px"
            height="15px"
            viewBox="0 0 451.846 451.847"
          >
            <g>
              <path
                d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </ButtonRight>
      </Container>
    )
  }
}

export default testimonials
