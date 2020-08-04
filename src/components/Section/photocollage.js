import React from 'react';
import Img from 'gatsby-image'

const Collage = ({ data }) => (
    <section className="mb4">
    <div className="cf">
        <div>
            <div className="fl w-100 w-two-thirds-ns">
                <Img fluid={data.cover1.childImageSharp.fluid} loading="lazy"/>
            </div>
            <div className="fl w-100 w-third-ns">
                <Img fluid={data.cover2.childImageSharp.fluid} loading="lazy"/>
            </div>
        </div>
        <div className="w-100 dib-ns">
            <div className="fl w-50 w-third-ns">
                <Img fluid={data.cover3.childImageSharp.fluid} loading="lazy"/>
            
            </div>
            <div className="fl w-50 w-third-ns">
                <Img fluid={data.cover4.childImageSharp.fluid} loading="lazy"/>
                
            </div>
            <div className="fl w-100 w-third-ns">
                <Img fluid={data.cover5.childImageSharp.fluid} loading="lazy"/>
                
            </div>
        </div>
    </div>
</section>
)

export default Collage;