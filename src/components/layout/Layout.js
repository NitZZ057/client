import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

function Layout(porps) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={porps.description} />
        <meta name="keywords" content={porps.keywords} />
        <meta name="author" content={porps.author} />
        <title>{porps.title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '70vh' }}>
        <Toaster toastOptions={{

          duration: 5000,
        }} />
        {porps.children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Ecommerce App',
  description: 'Shopping App',
  keywords: 'Ecommerce, shop, watch',
  author: 'Nitzz'
}

export default Layout

