import React from 'react';
import styled from '@emotion/styled';
import stylesheet from './intro.module.css';
import Icon1 from '../../images/icon1.svg';
import Icon2 from '../../images/icon2.svg';
import Icon3 from '../../images/icon3.svg';

let styles = {
    marginTop: "1em",
}
let desktopmargin = {
        margin: "0 1em 0"
}
const Paragraph = styled.p`
    line-height: 30px;
`

const Intro = () => (
    <section className={stylesheet.maxwidth}>
        <div className={stylesheet.white}>
            <h2 style={{ marginBottom: '3rem' }}>How it works</h2>
            <div className={stylesheet.containerintro}>
            <div style={desktopmargin}>
            <img src={Icon1} title="" alt="" loading="lazy" />
            <h3 style={styles}>1. Get the App</h3>
            <Paragraph>Download the app on your smart device. Registration takes only a few minutes. </Paragraph>
            </div>
            <div style={desktopmargin}>
            <img src={Icon2} title="" alt="" loading="lazy" />
            <h3 style={styles}>2. Locate your E-Car</h3>
            <Paragraph>Using the app, locate your electric vehicle. Parking and energy costs are included in the price. {/* If you drive often, you can choose premium and get even cheaper from A to B. */}</Paragraph>
            </div>
            <div style={desktopmargin}>
            <img src={Icon3} title="" alt="" loading="lazy" />
            <h3 style={styles}>3. Finish your Trip</h3>
            <Paragraph>When you reach your destination simply find an empty parking spot and leave your Eloop car there. Finish the trip within the app and you're done!</Paragraph>
            </div>
            </div>
        </div>
    </section>
)

export default Intro;