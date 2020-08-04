import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    
    RedditShareButton,
    EmailShareButton,
  } from 'react-share';
  import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    
    RedditIcon,
    EmailIcon,
  } from 'react-share';
  import styled from '@emotion/styled';
  import './share.css';

  const Sticky = styled.div`
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  `

  const Share = ({data}) => (
      <Sticky>
        <FacebookShareButton url={data}>
            <FacebookIcon size={36} />
        </FacebookShareButton>
        <LinkedinShareButton url={data}>
            <LinkedinIcon size={36} />
        </LinkedinShareButton>
        <TwitterShareButton url={data}>
            <TwitterIcon size={36} />
        </TwitterShareButton>
        <WhatsappShareButton url={data}>
            <WhatsappIcon size={36} />
        </WhatsappShareButton>
        <TelegramShareButton url={data}>
            <TelegramIcon size={36} />
        </TelegramShareButton>
        {/* <PinterestShareButton url={data}>
            <PinterestIcon size={36} />
        </PinterestShareButton> */}
        <RedditShareButton url={data}>
            <RedditIcon size={36} />
        </RedditShareButton>
        <EmailShareButton url={data}>
            <EmailIcon size={36} />
        </EmailShareButton>
      </Sticky>
  )

  export default Share;
