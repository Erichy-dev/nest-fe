import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import './index.scss';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Crm from './container/dashboards/crm/crm.tsx';

import Loader from './components/common/loader/loader.tsx';
import Login from './auth/login.tsx';
import Auth from './auth/auth.tsx';
import Orders from './container/order/orders.tsx';
import Quote from './container/quote/quote.tsx';
import Agenda from './container/agenda/agenda.tsx';
import OrderDetails from './container/order/orderDetails.tsx';
import Ecommerce from './container/dashboards/ecommerce/ecommerce.tsx';
import Createinvoice from './container/invoice/createinvoice/createinvoice.tsx';
import Invoicedetails from './container/invoice/invoicedetails/invoicedetails.tsx';
import Invoicelist from './container/invoice/invoicelist/invoicelist.tsx';
import { AuthProvider } from './contexts';
import CreateQuote from './container/quote/createQuote.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
  <BrowserRouter>
    <AuthProvider>
      <React.Suspense fallback={<Loader/>}>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
            <Route index element={<Login />} />
            <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
          </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App/>}>
            <Route index element={<Crm/>} />
            <Route path={`${import.meta.env.BASE_URL}dashboards/crm`} element={<Crm/>} />
            <Route path={`${import.meta.env.BASE_URL}management/orders`} element={<Orders/>} />
            <Route path={`${import.meta.env.BASE_URL}management/orders-detail`} element={<OrderDetails/>} />
            <Route path={`${import.meta.env.BASE_URL}management/quote`} element={<Quote/>} />
            <Route path={`${import.meta.env.BASE_URL}management/quote/new`} element={<CreateQuote/>} />
            <Route path={`${import.meta.env.BASE_URL}management/agenda`} element={<Agenda/>} />
            <Route path={`${import.meta.env.BASE_URL}dashboards/ecommerce`} element={<Ecommerce/>} />
            <Route path={`${import.meta.env.BASE_URL}invoice/create`} element={<Createinvoice/>} />
            <Route path={`${import.meta.env.BASE_URL}invoice/details`} element={<Invoicedetails/>} />
            <Route path={`${import.meta.env.BASE_URL}invoice/list`} element={<Invoicelist/>} />
         </Route>
        </Routes>
      </React.Suspense>
    </AuthProvider>
  </BrowserRouter>
</React.Fragment>
);
