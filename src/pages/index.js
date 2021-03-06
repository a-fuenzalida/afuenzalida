import React from 'react'
import Layout from '../components/Layout/Layout'
import { Container, Title, Icon, Button } from '../components/UI'
import { Epigraph, Subtitle, Figures } from '../styles/index.styled'
import Seo from '../components/Seo'

import { homeData, socialData } from '../mock/data'

export default function Home(props) {
  return (
    <Layout actualPage={props.path}>
      <Seo />
      <Container>
        <div>
          <Epigraph>{homeData.epigraph}</Epigraph>
          <Title>{homeData.title}</Title>
          <Subtitle>{homeData.subtitle}</Subtitle>
        </div>
        <Figures>
          {
            socialData.map(social => (
              <Button key={social.title} href={social.url} target="_blank">
                <Icon name={social.icon} />
                {' ' + social.title}
              </Button>
            ))
          }
        </Figures>
      </Container>
    </Layout>
  )
}