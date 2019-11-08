import axios from 'axios';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import React, { useEffect, useRef, useState } from 'react';
import '../../main.scss';

const BuyerPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const directLine = useRef<DirectLine | null>(null);
  useEffect(() => {
    if (!loaded) {
      axios.get('/api/BotConnector')
        .then((r) => {
          directLine.current = new DirectLine({ token: r.data.token });
          setLoaded(true);
        });
    }
  });

  return (
    <div>
      {'Buying digital products & services'}
      {loaded && <ReactWebChat directLine={directLine.current} />}
    </div>
  );
};

export default BuyerPage;
