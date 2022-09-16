import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };


  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    // console.log(editorState);
  };


  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log(props);
  }
  onChange = (data) =>{
    // console.log(data.blocks);
    constructor(data.blocks)
    
  }
 
  render() {
    const { editorState } = this.state;
    // const [text, setText] = useState([]);
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          onChange={this.onChange}
          // onChange={() => this.setState({count: this.state.count + 1})}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea> */}
      </div>
    );
  }
}
