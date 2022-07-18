import React, { Component,useRef,useState } from 'react';
import ReactDOM from 'react-dom/client';

/*function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

export default Car;*/



/*class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div style={{color:this.state.color}}>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.</p>
        <button
          type="button"onClick={this.changeColor}>Change color to</button><input type="color" />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);*/

function Car(){
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState(1964);
  const [color, setColor] = useState("red");
  
  return (
    <div style={{color:color}}>
      
      <h1>My {brand}</h1>
      
      <p>It is a {color} {model} from {year}.</p>
      
      {/*<button type="button"onClick={() => { setColor({inputColor}); setBrand({inputBrand}); setModel({inputModel}); setYear({inputYear}) }}>*/}
      {/*<button type="button"onClick={() => { setColor("blue"); setBrand("Mercedes"); setModel("S65 AMG"); setYear(2000) }}>
      Change car to
      </button> */}

      <br/>

      <p>
        Brand:<input type="text" onKeyPress={(e) => {if(e.key==='Enter'){setBrand(e.target.value)}} }/> <br/>
        Model:<input type="text" onKeyPress={(e) => {if(e.key==='Enter'){setModel(e.target.value)}}  }/> <br/>
        Year:<input type="number" onKeyPress={(e) => {if(e.key==='Enter'){setYear(e.target.value)}} }/> <br/>
        {/*Color:<input type="color" onChange={(e) => setColor(e.target.value)}/>*/}
        Color:<select onChange={(e) => setColor(e.target.value)}>
          <option>AliceBlue</option>
          <option>AntiqueWhite</option>
          <option>Aqua</option>
          <option>Aquamarine</option>
          <option>Azure</option>
          <option>Beige</option>
          <option>Bisque</option>
          <option>Color Mixer</option>
          <option>Color Picker</option>
          <option>Black</option>
          <option>BlanchedAlmond</option>
          <option>Blue</option>
          <option>BlueViolet</option>
          <option>Brown</option>
          <option>BurlyWood</option>
          <option>CadetBlue</option>
          <option>Chartreuse</option>
          <option>Chocolate</option>
          <option>Coral</option>
          <option>CornflowerBlue</option>
          <option>Cornsilk</option>
          <option>Crimson</option>
          <option>Cyan</option>
          <option>DarkBlue</option>
          <option>DarkCyan</option>
          <option>DarkGoldenRod</option>
          <option>DarkGray</option>
          <option>DarkGrey</option>
          <option>DarkGreen</option>
          <option>DarkKhaki</option>
          <option>DarkMagenta</option>
          <option>DarkOliveGreen</option>
          <option>DarkOrange</option>
          <option>DarkOrchid</option>
          <option>DarkRed</option>
          <option>DarkSalmon</option>
          <option>DarkSeaGreen</option>
          <option>DarkSlateBlue</option>
          <option>DarkSlateGray</option>
          <option>DarkSlateGrey</option>
          <option>DarkTurquoise</option>
          <option>DarkViolet</option>
          <option>DeepPink</option>
          <option>DeepSkyBlue</option>
          <option>DimGray</option>
          <option>DimGrey</option>
          <option>DodgerBlue</option>
          <option>FireBrick</option>
          <option>FloralWhite</option>
          <option>ForestGreen</option>
          <option>Fuchsia</option>
          <option>Gainsboro</option>
          <option>GhostWhite</option>
          <option>Gold</option>
          <option>GoldenRod</option>
          <option>Gray</option>
          <option>Grey</option>
          <option>Green</option>
          <option>GreenYellow</option>
          <option>HoneyDew</option>
          <option>HotPink</option>
          <option>IndianRed</option>
          <option>Indigo</option>
          <option>Ivory</option>
          <option>Khaki</option>
          <option>Lavender</option>
          <option>LavenderBlush</option>
          <option>LawnGreen</option>
          <option>LemonChiffon</option>
          <option>LightBlue</option>
          <option>LightCoral</option>
          <option>LightCyan</option>
          <option>LightGoldenRodYellow</option>
          <option>LightGray</option>
          <option>LightGrey</option>
          <option>LightGreen</option>
          <option>LightPink</option>
          <option>LightSalmon</option>
          <option>LightSeaGreen</option>
          <option>LightSkyBlue</option>
          <option>LightSlateGray</option>
          <option>LightSlateGrey</option>
          <option>LightSteelBlue</option>
          <option>LightYellow</option>
          <option>Lime</option>
          <option>LimeGreen</option>
          <option>Linen</option>
          <option>Magenta</option>
          <option>Maroon</option>
          <option>MediumAquaMarine</option>
          <option>MediumBlue</option>
          <option>MediumOrchid</option>
          <option>MediumPurple</option>
          <option>MediumSeaGreen</option>
          <option>MediumSlateBlue</option>
          <option>MediumSpringGreen</option>
          <option>MediumTurquoise</option>
          <option>MediumVioletRed</option>
          <option>MidnightBlue</option>
          <option>MintCream</option>
          <option>MistyRose</option>
          <option>Moccasin</option>
          <option>NavajoWhite</option>
          <option>Navy</option>
          <option>OldLace</option>
          <option>Olive</option>
          <option>OliveDrab</option>
          <option>Orange</option>
          <option>OrangeRed</option>
          <option>Orchid</option>
          <option>PaleGoldenRod</option>
          <option>PaleGreen</option>
          <option>PaleTurquoise</option>
          <option>PaleVioletRed</option>
          <option>PapayaWhip</option>
          <option>PeachPuff</option>
          <option>Peru</option>
          <option>Pink</option>
          <option>Plum</option>
          <option>PowderBlue</option>
          <option>Purple</option>
          <option>RebeccaPurple</option>
          <option>Red</option>
          <option>RosyBrown</option>
          <option>RoyalBlue</option>
          <option>SaddleBrown</option>
          <option>Salmon</option>
          <option>SandyBrown</option>
          <option>SeaGreen</option>
          <option>SeaShell</option>
          <option>Sienna</option>
          <option>Silver</option>
          <option>SkyBlue</option>
          <option>SlateBlue</option>
          <option>SlateGray</option>
          <option>SlateGrey</option>
          <option>Snow</option>
          <option>SpringGreen</option>
          <option>SteelBlue</option>
          <option>Tan</option>
          <option>Teal</option>
          <option>Thistle</option>
          <option>Tomato</option>
          <option>Turquoise</option>
          <option>Violet</option>
          <option>Wheat</option>
          <option>White</option>
          <option>WhiteSmoke</option>
          <option>Yellow</option>
          <option>YellowGreen</option>
        </select>
      </p>

    </div>
  );
}

export default Car;