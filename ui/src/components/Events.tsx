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
    <>
      {loading && (
        <div>
          Loading...
        </div>
      )}
      <div className="row">
        <div className="col-xs-12">
          <AUheading size="md" level="1">
            What's on
          </AUheading>
        </div>
      </div>
      {events && events.map((e: any) => (
        <div key={e.id} className="row margin-1">
          <div className="col-xs-2 background-dark-grey text-align-center font-weight-6 padding-1">
            {moment(e.start.local).format('D')}<br/>
            {moment(e.start.local).format('MMMM')}
          </div>
          <div className="col-xs-10 margin-top-1 margin-bottom-1">
            <div className="row">
              <div className="col-xs-2">
                {e.format.shortName}
              </div>
              <div className="col-xs-10">
                {`${e.venue.address.city}${e.onlineEvent ? '/Online' : ''}`}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a href={e.url} target="_blank">{e.name.text}</a>
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default Events;
