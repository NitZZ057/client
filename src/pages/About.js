import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <Layout title={'about us - Ecommerce App'} description={'Shopping App'}>
      <div className=' aboutus'>
        <div className='col-md-6'>
          <img src="/images/about.jpeg" alt="contsctus" width="100%"/>
        </div>
        <div className='col-md-4'>
          <p className="text-justify mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente officia saepe possimus dolores odit. Quae deserunt ab, explicabo consequuntur maiores deleniti voluptatibus soluta veniam ut esse laudantium earum eaque amet dolores tenetur corporis ipsa rerum aspernatur veritatis sequi aut. Corporis veritatis cum harum inventore totam magnam eveniet laborum ut doloremque, fuga porro voluptatibus dolor amet, blanditiis voluptates, distinctio dignissimos accusantium repellat numquam nostrum iure reprehenderit! Excepturi, quam. Nam saepe tempora, dignissimos delectus aperiam natus quas vero fuga soluta fugit id praesentium quod, esse, consequuntur facere. Rem aspernatur, doloremque sit maxime quis earum pariatur aliquam voluptate in, non alias voluptatum?</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
