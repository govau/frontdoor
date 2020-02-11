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
          <div className="border-bottom-width-1 border-light-grey padding-bottom-1 padding-bottom-1">
            <AUheading size="md" level="2">
              What's on
          </AUheading>
          </div>
        </div>
      </div>
      {loading && (
        <div>
          Loading...
        </div>
      )}
      {events && events.map((e: any) => (
        <div key={e.id} className="row margin-top-05">
          <div className="col-sm-12">
            <div className="width-25 float-left background-dark-grey text-align-center font-weight-6 padding-top-2 padding-bottom-2 margin-right-1">
              {moment(e.start.local).format('D')}<br />
              {moment(e.start.local).format('MMMM')}
            </div>
            <div className="margin-top-05">
              <div className="width-25 float-left">{e.format.shortName}</div>
              <div className="width-25 float-left text-align-right">{`${e.venue.address.city}${e.onlineEvent ? '/Online' : ''}`}</div><br />
              <div><a href={e.url} target="_blank">{e.name.text}</a></div>
            </div>
          </div>
        </div>
      ))}
      <div className="row margin-top-05">
        <div className="col-sm-12 text-align-right">
          <div className="border-top-width-1 border-light-grey padding-top-1">
            <a href="https://www.eventbrite.com.au/o/digital-transformation-agency-8025584572" target="_blank">[TODO]See more events</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
