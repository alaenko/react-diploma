import React, {Fragment} from 'react';
import TopSales from './TopSales';
import Catalog from './Catalog';

export default function Home({history, location}) {

  return (
    <Fragment>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <TopSales />
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Catalog location={location} history={history}/>
      </section>
    </Fragment>
  )
}

