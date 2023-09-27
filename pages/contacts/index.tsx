import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsResult } from 'next';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../../components/contacts/Map'), {
    ssr: false
});

import Layout from '../../components/shared/Layout';
import Head from 'next/head';
import { Contact } from '@/types';

type Props = {
    contacts: Contact[]
}

const Contact: React.FC<Props> = props => {

    const { contacts } = props;

    if (!contacts?.length) {
        return null
    }

    const locations = contacts.map(contact => ({
        latitude: +contact.latitude,
        longitude: +contact.longitude,
        title: contact.title,
        url: contact.url
    }));

    const contactRowClassNames = 'flex flex-wrap mb-2 items-start';
    const contactLabelClassNames = 'grow-0 basis-32';

    return (
        <Layout>
            <Head>

                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossOrigin="" />

            </Head>

            <DynamicMap locations={locations} />

            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8 sm:text-justify'>

                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8'>contact</h1>

                <h2 className='font-semibold mb-2'>Farshad A. Sohi, PhD</h2>

                <div className={contactRowClassNames}>
                    <label className={contactLabelClassNames} >
                        Address:
                    </label>
                    <div>
                        3293 Spectrum, Irvine, CA 92618
                    </div>
                </div>
                
                <div className={contactRowClassNames}>
                    <label className={contactLabelClassNames} >
                        Tel:
                    </label>
                    <div>
                        <a className='text-sky-600' href="tel:+1-310-430-2820"> +1-310-430-2820 </a>
                    </div>
                </div>

                <div className={contactRowClassNames}>
                    <label className={contactLabelClassNames} >
                        Fax:
                    </label>
                    <div>
                        +1-310-775-4477
                    </div>
                </div>

                <div className={contactRowClassNames}>
                    <label className={contactLabelClassNames} >
                        Email:
                    </label>
                    <div>
                        <a className='text-sky-600 block' href="mailto:info@enriskconsulting.com" > info@enriskconsulting.com </a>
                        <a className='text-sky-600 block' href="mailto:farshad@enriskconsulting.com" > mailto:farshad@enriskconsulting.com </a>
                    </div>
                </div>

            </div>

        </Layout>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const ContactsData = data.contacts;

    return {
        props: { contacts: ContactsData },
    };
}



export default Contact;