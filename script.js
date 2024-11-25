

let defaultInput = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n"
const editorStyle = {
  width: "70vw", height: "100px", backgroundColor: "lightblue"
}
const previewStyle = {
  width: "70vw", border: "1px solid black", backgroundColor: "lightblue"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultInput
    };
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <div>
          <h2 style={{textAlign: "center"}}>Editor</h2>
          <textarea onChange={this.handleChange} id="editor" value={this.state.input} style={editorStyle}></textarea>
       </div>
        <div>
          <h2 style={{textAlign: "center"}}>Preview</h2>
          <div dangerouslySetInnerHTML={{__html: marked.parse(this.state.input)}} id="preview" style={previewStyle}></div> 
        </div>
       </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('body'))