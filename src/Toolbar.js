import React from 'react';

const Toolbar = ({ handleFormat, handleInsertImage, handleInsertLink, handleInsertUrl }) => {
  return (
    <div className="toolbar">
      <button onClick={() => handleFormat('**', '**')}>Bold</button>
      <button onClick={() => handleFormat('*', '*')}>Italic</button>
      <button onClick={() => handleFormat('`', '`')}>Code</button>
      <button onClick={() => handleFormat('~~', '~~')}>Strikethrough</button>
      <button onClick={() => handleFormat('# ', '\n')}>Heading 1</button>
      <button onClick={() => handleFormat('## ', '\n')}>Heading 2</button>
      <button onClick={() => handleFormat('- ', '\n')}>List item</button>
      <button onClick={handleInsertImage}>Insert Image</button>
      <button onClick={handleInsertLink}>Create Link</button>
      <button onClick={handleInsertUrl}>Insert URL</button>
    </div>
  );
};

export default Toolbar;
