import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { IonApp, IonPage, IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react'
// import classNames from 'classnames'

import Header from './header'
import './layout.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Global style override */
import '../styles/overrides.css'

interface LayoutProps {
  title: string
  children: ReactNode
}

export const Layout = ({ title, children }: LayoutProps) => (
  <IonApp>
    <IonPage>
      <Header siteTitle={title} />
      <IonContent className={'ion-padding'}>{children}</IonContent>
      <IonFooter data-testid="contentinfo">
        <IonToolbar>
          <IonTitle size="small">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  </IonApp>
)

export default Layout
