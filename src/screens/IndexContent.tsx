import React from 'react';

interface IndexProps { greeting: string }

const IndexContent: React.FC<IndexProps> = (props) => {
  const { greeting } = props;

  return (
    <div>
      <h1>
        {greeting}
        👋
        !
      </h1>
    </div>
  );
};

export default IndexContent;
