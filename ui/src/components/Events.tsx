import AUheading from '@gov.au/headings';
import axios from 'axios';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';


const Events: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [events, setEvents] = useState<any>([]);

  const getEventCallback = useCallback(() => {
    setLoading(true);
    return axios.get('/api/event').then((r: any) => {
      setEvents(r.data);
      setLoading(false);

      return r;
    }, () => '');
  }, [events]);

  useEffect(() => {
    if (!loaded) {
      getEventCallback();
      setLoaded(true);
    }
  });

  return (
    <div className="padding-left-2 padding-top-1 padding-right-2 padding-bottom-1">
      <div className="row">
        <div className="col-sm-12">
          <AUheading size="md" level="2">
            What's on
          </AUheading>
        </div>
      </div>
      {loading && (
        <div>
          Loading...
        </div>
      )}
      {events && events.map((e: any) => (
        <div key={e.id} className="row margin-1">
          <div className="col-sm-3 background-dark-grey text-align-center font-weight-6 padding-top-2 padding-bottom-2">
            {moment(e.start.local).format('D')}<br/>
            {moment(e.start.local).format('MMMM')}
          </div>
          <div className="col-sm-9 margin-bottom-1">
            <div className="row">
              <div className="col-sm-2">
                {e.format.shortName}
              </div>
              <div className="col-sm-10">
                {`${e.venue.address.city}${e.onlineEvent ? '/Online' : ''}`}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <a href={e.url} target="_blank">{e.name.text}</a>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
