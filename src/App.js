import React from "react";
import Button from '@mui/material/Button';
import { Responsive, WidthProvider } from "react-grid-layout";


// const EmailButton = () => {
//   const email = 'sean@mcqueen.net';

//   const handleClick = () => {
//     navigator.clipboard.writeText(email)
//   };

//   return (
//     <>
//       <Button variant="contained" onClick={handleClick}>email me</Button>
//     </>
//   );
// }

function App() {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const stickyColors = [
    '#ff7eb9',
    '#7afcff',
    '#feff9c',
  ]

  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      margin={[40, 40]}
    >
      <div style={{
        backgroundColor: stickyColors[Math.floor(Math.random() * stickyColors.length)],
        padding: 15,
        textAlign: 'right',
      }} key="a" data-grid={{ x: 0, y:0, w:1, h: 1.5}}>
        <h1>hi, I'm Sean</h1>
      </div>
      <div style={{
        backgroundColor: stickyColors[Math.floor(Math.random() * stickyColors.length)],
        padding: 15,
        textAlign: 'right',
      }} key="b" data-grid={{ x: 1, y:0, w:4, h: 1}}>
        <p>I live in New York City and I'm building something new.</p>
      </div>
      <div style={{
        backgroundColor: stickyColors[Math.floor(Math.random() * stickyColors.length)],
        padding: 15,
        textAlign: 'left',
      }} key="c" data-grid={{ x: 5, y:0, w:2, h: 1}}>
        <p>
            <a href="files/sean_mcqueen.pdf">Check out my resume</a>,
            or find me on <a href="https://twitter.com/seanmcque_n">Twitter</a> and <a href="https://www.linkedin.com/in/snmcqueen">LinkedIn</a>.
        </p>
        <p>
            <em>Or contact me directly: sean@mcqueen.net</em>
        </p>
      </div>
      <div style={{
        backgroundColor: stickyColors[Math.floor(Math.random() * stickyColors.length)],
        padding: 15,
        textAlign: 'left',
      }} key="d" data-grid={{ x: 1, y:2, w:1.5, h: 1}}>
        <p>(drag this around)</p>
      </div>
      <div style={{
        backgroundColor: stickyColors[Math.floor(Math.random() * stickyColors.length)],
        padding: 15,
        textAlign: 'center',
      }} key="e" data-grid={{ x: 2.5, y:4, w:2, h: 2}}>
        <h3>welcome to my website</h3>
      </div>
      <div style={{
        backgroundColor: stickyColors[Math.floor(Math.random() * stickyColors.length)],
        padding: 15,
        textAlign: 'right',
      }} key="f" data-grid={{ x: 4.5, y:4, w:3, h: 1}}>
        <h1> :)</h1>
      </div>

    </ResponsiveGridLayout>
  );

}


export default App;
