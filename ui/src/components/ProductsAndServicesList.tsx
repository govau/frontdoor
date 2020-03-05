import AUheading from '@gov.au/headings';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

interface IProductsAndServicesListProps {
  itemSelectedFunc?: (item: any) => void;
  userType: string;
}

interface IProductsAndServicesList {
  group: string;
  terms: string[];
}

const ProductsAndServicesList: React.FC<IProductsAndServicesListProps> = ({ itemSelectedFunc, userType }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [productsAndServices, setProductsAndServices] = useState<IProductsAndServicesList[]>();


  const getProductsAndServices = useCallback(() => {
    setLoading(true);
    return axios.get(`/${userType}/products-and-services.json`).then((r: any) => {
      setProductsAndServices(r.data);
      setLoading(false);

      return r;
    });
  }, [productsAndServices]);

  useEffect(() => {
    if (!loaded) {
      getProductsAndServices();
      setLoaded(true);
    }
  });

  const onClick = (e: any) => {
    e.preventDefault();
    if (itemSelectedFunc) {
      itemSelectedFunc(e.target.innerText);
    }
  };

  const chunk = (array: any[], chunkSize: number) => {
    const results = [];
    const size = Math.ceil(array.length / chunkSize);

    while (array.length) {
      results.push(array.splice(0, size));
    }

    return results;
  };

  return (
    <div className="padding-md-1">
      <div className="row">
        <div className="col-sm-12 margin-sm-bottom-1 margin-md-bottom-1">
          <AUheading size="md" level="2">Products and services</AUheading>
        </div>
      </div>
      {loading && (
        <div className="row">
          <div className="col-sm-12 margin-sm-bottom-1 margin-md-bottom-1">
            Loading...
          </div>
        </div>
      )}
      {!loading && productsAndServices && (
        <div className="row">
          {chunk(productsAndServices.sort((a, b) => a.group.localeCompare(b.group)), 3).map((c, i) => (
            <div key={i} className="col-sm-4">
              {c.map((d) => (
                <React.Fragment key={d.group}>
                  <div className="margin-sm-top-1 margin-md-top-1 font-weight-7">{d.group}</div>
                  <div>
                    {d.terms.map((t: string) => (
                      <React.Fragment key={`${d.group}${t}`}>
                        <a href="" onClick={(e) => onClick(e)}>{t}</a><br />
                      </React.Fragment>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsAndServicesList;
