import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../components/shared/Layout';
import { Sector } from '@/types';

type Props = {
    sectors: Sector[]
}

const Sectors: React.FC<Props> = props => {

    const { sectors } = props;

    return (
        <Layout>
            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8'>
                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8 text-center'>Sectors</h1>
                <div className="sm:flex flex-wrap">
                    {sectors.map(sector => (
                        <div className="p-3 shrink-0 sm:basis-1/2 lg:basis-1/3" key={sector.title}>
                            <Link href={sector.url} className="relative block group overflow-hidden box-shadow">
                                <Image 
                                    src={sector.thumbnailUrl} 
                                    alt={sector.title} 
                                    width={300} 
                                    height={100}
                                    className="mb-2 w-full scale-100 group-hover:scale-105 transition-all duration-300 ease-in-out"
                                />
                                <h3 className="font-semibold text-amber-500 absolute bottom-0 left-0 right-0 p-3 pt-20 bg-gradient-to-t from-black to-transparent">
                                    {sector.title}
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const sectorsData = data.sectors;

    return {
        props: { sectors: sectorsData },
    };

}

export default Sectors;