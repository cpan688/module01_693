let zak = 'Zak Ruvalvaba';
let sally = 'Sally Smith';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let mark = "Mark Martin";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontsize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, mark));
ReactDOM.render(element, document.getElementById('content'));