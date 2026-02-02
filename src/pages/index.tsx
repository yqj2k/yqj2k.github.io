import * as React from 'react';

import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col justify-center'>
            <div className='text-sm text-gray-800'>
              <p className='mt-2'>hi! - i&#39;m Sam. welcome my website </p>
              <p className='mt-4'>
                i&#39;m an avid learner interested in all problems tech. I&#39;m
                looking for opportunities in tech to impact many people
                technically, experientially, and influentially. Here&#39;s my{' '}
                <PrimaryLink
                  className='font-bold'
                  href='https://linkedin.com/in/sam-qj-ip'
                >
                  LinkedIn
                </PrimaryLink>{' '}
              </p>
              <p className='mt-4'>
                i currently work at Remitly as an engineer on the{' '}
                <PrimaryLink
                  className='font-bold'
                  href='https://news.remitly.com/company-and-product-news/remitly-launches-international-business-payments/'
                >
                  new business send product
                </PrimaryLink>{' '}
                that launched last year. I&#39;m the sole engineer responsible
                for design and development of risk requirements (KYC, KYB,
                Watchlist) in new country launches.
              </p>
              <p className='mt-4'>
                previously, i worked at Coinbase on the International team
                focusing on initiatives to grow the user base specifically in
                Canada, including wider payment acceptance, campaigns, and
                online/in-person marketing initiatives. i also worked on the{' '}
                <PrimaryLink
                  className='font-bold'
                  href='https://docs.cloud.coinbase.com/exchange/docs/welcome'
                >
                  Coinbase Exchange
                </PrimaryLink>{' '}
                focusing on load-testing exchange services, cost optimization of
                infrastructure, and release engineering of exchange services.
              </p>
              <p className='mt-4'>
                earlier in my career, i interned at multiple different companies
                including Microsoft, Workday, and SAP. i enjoyed exploring and
                learning how different engineering job functions work within
                broader organizations.
              </p>
              <p className='mt-4'>
                outside of work, i enjoy collaborative sports (volleyball,
                badminton) recreationally and competitively. i also enjoy
                successfully convincing and planning 4+ group trips!
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
