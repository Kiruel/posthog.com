import React from 'react'
import Layout from 'components/Layout'
import { SEO } from 'components/seo'
import { AboutHero } from 'components/About/AboutHero'
import { AboutAnchorScrollNavbar } from 'components/About/AboutAnchorScrollNavbar'
import { AboutStory } from 'components/About/AboutStory'
import { AboutTransparency } from 'components/About/AboutTransparency'

const AboutPage = () => {
    return (
        <Layout>
            <SEO
                title="About PostHog"
                description="PostHog is building the world's first open source Product OS."
                image={`/og-images/about.jpeg`}
            />

            <AboutHero />
            <AboutAnchorScrollNavbar />
            <AboutStory />
            <AboutTransparency />
        </Layout>
    )
}

export default AboutPage
