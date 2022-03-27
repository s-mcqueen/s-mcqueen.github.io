import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from '@mui/system';

const Holder = styled('div')({
    padding: 15
})

const grids = {
  'links': { x: 0, y:0, w:2, h: 2, static: true},
  'header': { x: 2, y:0, w:1, h: 2},
  'about_me': { x: 3, y:1, w:4, h: 1},
  'how_to': { x: 3, y:0, w:2, h: 1},
  'welcome': { x: 0, y:2, w:2, h: 1},
  'smiley': { x: 2, y:2, w:3, h: 2}
}

const styles = {
  'links': {
    backgroundColor: '#feff9c',
    textAlign: 'left'
  },
  'header': {
    backgroundColor: '#7afcff',
    textAlign: 'right'
  },
  'about_me': {
    backgroundColor: '#feff9c',
    textAlign: 'left'
  },
  'how_to': {
    backgroundColor: '#ff7eb9',
    textAlign: 'left'
  },
  'welcome': {
    backgroundColor: '#ff7eb9',
    textAlign: 'center'
  },
  'smiley': {
    backgroundColor: '#7afcff',
    textAlign: 'right'
  },
}

const Links = () => {
  return (
    <Holder>
      <p><a href="files/sean_mcqueen.pdf">Check out my resume</a>.</p>
      <p>Find me on <a href="https://twitter.com/seanmcque_n">Twitter</a> or <a href="https://www.linkedin.com/in/snmcqueen">LinkedIn</a>.</p>
      <p>Or email me: </p>
      <p><em>sean@mcqueen.net</em></p>
    </Holder>
  );
}

const Header = () => {
  return (
    <Holder>
      <h1>hi, I'm Sean</h1>
    </Holder>
  );
}

const AboutMe = () => {
  return (
    <Holder>
      <p>I live in New York City and I'm building something new.</p>
    </Holder>
  );
}

const HowTo = () => {
  return (
    <Holder>
      <p>(drag this around)</p>
      <p>(or resize it)</p>
    </Holder>
  );
}

const Welcome = () => {
  return (
    <Holder>
      <h3>welcome to my website</h3>
    </Holder>
  );
}

const Smiley = () => {
  return (
    <Holder>
      <h1> :)</h1>
    </Holder>
  );

}

const App = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      compactType={'vertical'}
    >
      <div key='links' style={styles['links']} data-grid={grids['links']}>
        <Links />
      </div>
      <div key='header' style={styles['header']} data-grid={grids['header']}>
        <Header />
      </div>
      <div key='about_me' style={styles['about_me']} data-grid={grids['about_me']}>
        <AboutMe />
      </div>
      <div key='how_to' style={styles['how_to']} data-grid={grids['how_to']}>
        <HowTo />
      </div>
      <div key='welcome' style={styles['welcome']} data-grid={grids['welcome']}>
        <Welcome />
      </div>
      <div key='smiley' style={styles['smiley']} data-grid={grids['smiley']}>
        <Smiley />
      </div>
    </ResponsiveGridLayout>
  );
}

export default App;
