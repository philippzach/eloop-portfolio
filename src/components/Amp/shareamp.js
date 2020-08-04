  import React from 'react';
  import styled from '@emotion/styled';
  import '../share.css';

  const Sticky = styled.div`
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  `

  const Share = ({data}) => (
      <Sticky>
        <amp-social-share type="facebook"
            data-param-app_id="254325784911610"
            width="36px"
            height="36px"
            data-param-url={data}
            data-param-attribution="AMPhtml"
            />
        <amp-social-share type="linkedin"
            width="36px"
            height="36px"
            
            data-param-url={data}
            />
         <amp-social-share type="twitter"
            width="36px"
            height="36px" 
            
            data-param-url={data}
            />
        <amp-social-share type="whatsapp"
            width="36px"
            height="36px" 
            
            data-param-url={data}
            />
        <amp-social-share type="sms"
            width="36px"
            height="36px" 
            
            data-param-url={data}
            />
        
        <amp-social-share type="email"
            width="36px"
            height="36px" 
            
            data-param-url={data}
            />
      </Sticky>
  )

  export default Share;

