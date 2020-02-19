import AUheading from '@gov.au/headings';
import axios from 'axios';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';


const Events: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [events, setEvents] = useState<any>(null);

  const getEventCallback = useCallback(() => {
    setLoading(true);
    return axios.get('/api/event').then((r: any) => {
      setEvents(r.data);
      setLoading(false);

      return r;
    });
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
      {events && events.map((e: any, i: number) => (
        <div key={e.id} className={`row padding-sm-bottom-1 padding-md-top-05 padding-md-bottom-05 background-${i % 2 === 0 ? 'light-grey' : 'white'}`}>
          <div className="col-sm-12">
            <div className="row margin-sm-top-05 margin-md-top-05">
              <div className="col-sm-12">
                <AUheading size="sm" level="3">
                  <a href={e.url} target="_blank">{e.name.text}</a>
                </AUheading>
              </div>
            </div>
            <div className="row margin-sm-top-05 margin-md-top-05">
              <div className="col-sm-12 font-style-italic">{e.format.shortName}</div>
            </div>
            <div className="row margin-sm-top-05 margin-md-top-05 margin-md-bottom-1">
              <div className="col-xs-6 col-sm-6">
                {moment(e.start.local).format('D')} {moment(e.start.local).format('MMMM')}  {moment(e.start.local).format('YYYY')}
              </div>
              <div className="col-xs-6 col-sm-6">
                {`${e.venue.address.city}${e.onlineEvent ? '/Online' : ''}`}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="row margin-sm-top-1 margin-md-top-05">
        <div className="col-sm-12 text-align-right">
          <div className="padding-md-top-1">
            <a href="https://www.eventbrite.com.au/o/digital-transformation-agency-8025584572" target="_blank">[TODO]See more events</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
