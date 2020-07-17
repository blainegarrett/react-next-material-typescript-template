import React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

interface IndexProps { greeting: string }

const IndexContent: React.FC<IndexProps> = (props) => {
  const { greeting } = props;

  return (
    <div>
      <h1>
        {greeting}
        {publicRuntimeConfig.greeting_emoji}
        !
      </h1>
    </div>
  );
};

export default IndexContent;
