import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from '@mui/system';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './App.css';

import photo from './public/sean.jpg';


const Holder = styled('div')({
  padding: 15
})

const App = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  return (
    <div className="Container">
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        compactType={'vertical'}
        resizeHandles={[]}
      >
        <div className="ContentBox" key='links' data-grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}>
          <Holder>
            <p><a href="files/sean_mcqueen.pdf">Check out my resume</a>.</p>
            <p>Find me on <a href="https://twitter.com/seanmcque_n">Twitter</a> or <a href="https://www.linkedin.com/in/snmcqueen">LinkedIn</a>.</p>
            <p>Or email me: </p>
            <p><em>sean@mcqueen.net</em></p>
          </Holder>
        </div>
        <div className="ContentBox" key='header' style={{ textAlign: 'right' }} data-grid={{ x: 2, y: 0, w: 1, h: 2 }}>
          <Holder>
            <h1>hi, I'm Sean</h1>
          </Holder>
        </div>
        <div className="ContentBox" key='about_me' data-grid={{ x: 3, y: 1, w: 4, h: 1 }}>
          <Holder>
            <p>I live in New York City and I'm building something new.</p>
          </Holder>
        </div>
        <div className="ContentBox" key='how_to' data-grid={{ x: 3, y: 0, w: 2, h: 1 }}>
          <Holder>
            <p>(drag this box around)</p>
          </Holder>
        </div>
        <div className="ContentBox" key='welcome' style={{ textAlign: 'center' }} data-grid={{ x: 0, y: 2, w: 2, h: 1 }}>
          <Holder>
            <h3>welcome to my website</h3>
          </Holder>
        </div>
        <div className="ContentBox PhotoOfMe" key='smiley' data-grid={{ x: 2, y: 2, w: 3, h: 2 }}>
          <img className="Photo" src={photo} />
        </div>
      </ResponsiveGridLayout >
    </div >
  );
}

export default App;
