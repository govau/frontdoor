import AUheading from '@gov.au/headings';
import axios from 'axios';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { getSessionObject, setSessionObject } from '../utils/Browser';


const Events: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [events, setEvents] = useState<any>(null);

  const getEventCallback = useCallback(() => {
    const sessionEvents = getSessionObject('events');
    if (sessionEvents) {
      setEvents(sessionEvents);
    } else {
      setLoading(true);
      return axios.get('/api/event').then((r: any) => {
        setEvents(r.data);
        setSessionObject('events', r.data);
        setLoading(false);

        return r;
      });
    }
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
      {events && events.map((g: any, i: number) => (
        <div key={i}>
          <div className={'row margin-sm-top-05 margin-md-bottom-05 padding-sm-top-1 padding-md-top-1 padding-sm-bottom-1 padding-md-bottom-1 background-light-grey'}>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <AUheading size="md" level="3">{g.key}</AUheading>
                </div>
              </div>
              {g.events.map((e: any) => (
                <div key={e.id} className="row padding-sm-top-1 padding-sm-bottom-1 padding-md-top-1 padding-md-bottom-1">
                  <div className="col-xs-2 col-sm-2 max-width-5">
                    <AUheading size="lg" level="3" className="text-align-center">{moment(e.start.local).format('D')}</AUheading>
                  </div>
                  <div className="col-xs-10 col-sm-10">
                    <div className="row">
                      <div className="col-sm-12">
                        <a href={e.url} target="_blank" rel="external noreferrer">{e.name.text}</a>
                      </div>
                    </div>
                    <div className="row padding-sm-top-05 padding-md-top-05 text-colour-grey">
                      <div className="col-sm-12">
                        {`${e.format.shortName}, ${e.venue && e.venue.address.city}${e.onlineEvent ? '/Online' : ''}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="row margin-sm-top-1 margin-md-top-05">
        <div className="col-sm-12 text-align-right">
          <div className="padding-md-top-1">
            <a href="https://www.eventbrite.com.au/o/digital-transformation-agency-8025584572" target="_blank" rel="external noreferrer">See more events</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
