import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useState } from "react"
import { Emotion } from "../components/Emotion"
import { EmotionNested } from "../components/EmotionNested"
import { Module } from "../components/Module"
import { Styled } from "../components/Styled"
import { ThemeProvider } from "@emotion/react"
import { StylNested } from "../components/StyledNested"


const theme = {
  backgroundColor: 'green',
  color: 'blue'
}

const Home: NextPage = () => {
  const [randomValue, setRandomValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <button onClick={() => setRandomValue(Math.random())}>
          Force Rerender
        </button>
        {new Array(1000).fill(null).map((__, i) => (
          <Fragment key={i + 'cc'}>
            <div>
              <Emotion />
            </div>
            {/* <EmotionStyled key={i + "StyledEmotion"}>
            Emotion Styled
          </EmotionStyled> */}
            {/* <Styled key={i + "StyledComponents"}>Styled Components</Styled> */}
            {/* <div className={emotionCSS} key={i + "CSS"}>
            CSS
          </div> */}
          </Fragment>
        ))}
      </div>
    </ThemeProvider>
  )
}

export default Home
