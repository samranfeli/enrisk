import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsResult } from 'next';

import Layout from '@/components/shared/Layout';
import ServicesSection from '@/components/home/ServicesSection';
import SectorsSection from '@/components/home/SectorsSection';
import { Service, Sector } from '@/types';
import Banner from '@/components/home/Banner';
import Intro from '@/components/home/Intro';
import IconsSection from '@/components/home/IconsSection';

type Props = {
  services: Service[];
  sectors: Sector[];
}

const Home: React.FC<Props> = props => {

  const {sectors, services} = props;
  
  return (
    <Layout>
      
      <Banner />

      <ServicesSection services={services} />
      
      <IconsSection />

      <Intro />

      <SectorsSection sectors={sectors} />

    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  const servicesData = data.services;
  const sectorsData = data.sectors;

  return {
    props: { services: servicesData, sectors: sectorsData },
  };

}

export default Home;