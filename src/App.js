import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import Toolbar from './Toolbar';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleFormat = (startTag, endTag) => {
    const textArea = textAreaRef.current;
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    const selectedText = textArea.value.substring(startPos, endPos);
    const formattedText = `${startTag}${selectedText}${endTag}`;
    const newText = textArea.value.substring(0, startPos) + formattedText + textArea.value.substring(endPos);
    setMarkdown(newText);
    textArea.focus();
    textArea.setSelectionRange(startPos + startTag.length, startPos + startTag.length + selectedText.length);
  };

  const handleInsertImage = () => {
    const textArea = textAreaRef.current;
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      const imageMarkdown = `![Image Alt Text](${imageUrl})`;
      const caretPosition = textArea.selectionStart;
      const newText = textArea.value.substring(0, caretPosition) + imageMarkdown + textArea.value.substring(caretPosition);
      setMarkdown(newText);
      textArea.focus();
      textArea.setSelectionRange(caretPosition + imageMarkdown.length, caretPosition + imageMarkdown.length);
    }
  };

  const handleInsertLink = () => {
    const textArea = textAreaRef.current;
    const linkText = prompt('Enter link text:');
    if (linkText) {
      const linkUrl = prompt('Enter link URL:');
      if (linkUrl) {
        const linkMarkdown = `[${linkText}](${linkUrl})`;
        const caretPosition = textArea.selectionStart;
        const newText = textArea.value.substring(0, caretPosition) + linkMarkdown + textArea.value.substring(caretPosition);
        setMarkdown(newText);
        textArea.focus();
        textArea.setSelectionRange(caretPosition + linkMarkdown.length, caretPosition + linkMarkdown.length);
      }
    }
  };

  const handleInsertUrl = () => {
    const textArea = textAreaRef.current;
    const url = prompt('Enter URL:');
    if (url) {
      const urlMarkdown = `<${url}>`;
      const caretPosition = textArea.selectionStart;
      const newText = textArea.value.substring(0, caretPosition) + urlMarkdown + textArea.value.substring(caretPosition);
      setMarkdown(newText);
      textArea.focus();
      textArea.setSelectionRange(caretPosition + urlMarkdown.length, caretPosition + urlMarkdown.length);
    }
  };

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <Toolbar
        handleFormat={handleFormat}
        handleInsertImage={handleInsertImage}
        handleInsertLink={handleInsertLink}
        handleInsertUrl={handleInsertUrl}
      />
      <div className="input-container">
        <textarea
          ref={textAreaRef}
          value={markdown}
          onChange={handleChange}
          rows={10}
          cols={50}
          placeholder="Enter your Markdown here"
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div className="preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
