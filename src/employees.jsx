let zak = 'Zak Ruvalvaba';
let sally = 'Sally Smith';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
// let mark = "Mark Martin"
const element = (
    <ul style= {{'color': 'blue', 'fontsize': '24px'}}>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        {/* <li>{mark}</li> */}
    </ul>
)
ReactDOM.render(element, document.getElementById('content'));