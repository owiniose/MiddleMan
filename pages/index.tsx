  import Head from 'next/head';
  import Image from 'next/image';
  import Header from '../components/Header';
  import Banner from '../components/Banner';
  import { InferGetStaticPropsType } from 'next';
  import SmallCard from '../components/SmallCard';
  import MediumCard from '../components/MediumCard';
  import LargeCard from '../components/LargeCard';
  import Footer from '../components/Footer';





  export async function getStaticProps() {
  
    
    type ExploreData = {
      img: string
      location: string
      distance: string
    }
    type CardsData = {
      img: string
      title: string
    }

    const res = await fetch('https://links.papareact.com/pyp')
    const exploreData: ExploreData[] = await res.json()

    const des = await fetch('https://links.papareact.com/zp1')
    const cardsData: CardsData[] = await des.json()


    return{
      props:{
        exploreData,
        cardsData
      },
    }

    }
    
  
  const Home = ( {exploreData, cardsData}: InferGetStaticPropsType<typeof getStaticProps> ) => {
    return (


      <div className="">
        <Head>
          <title>MiddleMan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>
      <Banner/>
        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          <section>
              <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

              {/* Pull data from server */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              xl:grid-cols-4'>
              {exploreData.map(({img, location, distance})=>(
                <SmallCard 
                key={img}
                  img={img}
                location={location} 
                distance={distance} />
              ))} 
              </div>
           </section>
           <section>
             <h2 className='text-4xl font-semibold py-8 '>
               Live Anywhere
             </h2>
             <div className='flex  space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
             {cardsData?.map(({img, title})=>(
               <MediumCard
               key={img} 
               img={img} 
               title={title} />
             ))}
             </div>
           </section>

           <LargeCard 
           img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
           buttonText="Get Inspired" 
           description="Wishlists curated by AirBnB"  />


        </main> 

        <Footer/>


      </div>
    )
  }

  export default Home


