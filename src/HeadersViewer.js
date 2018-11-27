import React from 'react';
import './HeadersViewer.scss';

const HeadersViewer = ({ headers }) => {
  const headersTable = Object.keys(headers).map(key => (
    <tr key={key}>
      <td className="key">{key}</td>
      <td className="value">{headers[key]}</td>
    </tr>
  ));

  const emptyMessage = 'No data';

  return (
    <div className="HeadersViewer col mt-3 p-2">
      {headersTable.length > 0 ? <table>{headersTable}</table> : emptyMessage}
    </div>
  );
};

export default HeadersViewer;
