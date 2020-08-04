import React from 'react';
import styled from '@emotion/styled';
import '../Modules/devices.min.css';
import Helmet from 'react-helmet'

const Container = styled.div`
    max-width: 420px;
    margin: 0px auto;
`
const RelativeContainer = styled.div`
    position: relative;
    padding-bottom: 218%;
    height: 0px;
`
const Iframe = styled.iframe`
    position: absolute;
    top: -2px;
    left: -1px;
    width: 101%;
    height: 101%;
`
const Zoom = styled.div`
zoom: .5;
@media (max-width: 425px) {
    zoom: .4;
}
@media (max-width: 375px) {
    zoom: .3;
} 
`

var ScreenMockContent  = () => (
    <Zoom className="marvel-device iphone-x">
    <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
    </div>
    <div className="top-bar"></div>
    <div className="sleep"></div>
    <div className="bottom-bar"></div>
    <div className="volume"></div>
    <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
    </div>
    <div className="inner-shadow"></div>
    <div className="screen">
        <Container>
            <RelativeContainer id="player">
            <Helmet>
            <script type='text/javascript'>
            {`
                var initiateYoutubeVideo = false;

                document.addEventListener ('scroll',function () {
                    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
                        if(!initiateYoutubeVideo && window.navigator.userAgent.indexOf('Lighthouse') == -1 && window.navigator.userAgent.indexOf('Speed Insights') == -1 && window.navigator.userAgent.indexOf('Google-Mobile') == -1 && window.navigator.userAgent.indexOf('Googlebot') == -1) {
                              initiateYoutubeVideo = true;
                              var player = document.getElementById('player');
                              player.innerHTML = '<Iframe width="375px" height="817.5px" title="Eloop App Demo - Electric Car Sharing Vienna Youtube" frameborder="0" allowfullscreen="" allow="autoplay" src="https://www.youtube.com/embed/-_3FZKMeoe4?mute=1&autoplay=1&loop=1&playlist=-_3FZKMeoe4&color=white"></Iframe>';

                        }
                    }
            })`}
            </script>
            </Helmet>
        </RelativeContainer>
        </Container>
    </div>
    </Zoom>
)

export default ScreenMockContent

