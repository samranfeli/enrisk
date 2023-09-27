import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../../components/contacts/Map'), {
    ssr: false
});

import Layout from '../../components/shared/Layout';
import Head from 'next/head';
import { Contact } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
    contact?: Contact
}

const Contact: React.FC<Props> = props => {

    const { contact } = props;

    const [mapLoading, setMapLoading] = useState(false);

    if (!contact) {
        return null;
    }

    const { address, agentName, email, latitude, longitude, tel, title, fax, resumeUrl } = contact;

    useEffect(() => {
        setMapLoading(true);
        setTimeout(() => {
            setMapLoading(false);
        }, 200);
    }, [latitude, longitude]);

    const contactRowClassNames = 'flex flex-wrap mb-2 items-start';
    const contactLabelClassNames = 'grow-0 basis-32';

    return (
        <Layout>
            <Head>

                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossOrigin=""
                />

            </Head>

            <DynamicMap locations={[{ latitude: +latitude, longitude: +longitude, title: title }]} loading={mapLoading} />

            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8 sm:text-justify'>

                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8'>{title}</h1>

                <h2 className='font-semibold mb-2'>{resumeUrl ? <a className='text-sky-600' href={resumeUrl} download >{agentName}</a> : agentName}</h2>

                <div className={contactRowClassNames}>
                    <label className={contactLabelClassNames} >
                        Address:
                    </label>
                    <div>
                        {address}
                    </div>
                </div>
                
                <div className={contactRowClassNames}>
                    <label className={contactLabelClassNames} >
                        Tel:
                    </label>
                    <div>
                        <a className='text-sky-600' href={`tel:${tel}`}>{tel}</a>

                    </div>
                </div>

                {!!fax && (
                    <div className={contactRowClassNames}>
                        <label className={contactLabelClassNames} >
                            Fax:
                        </label>
                        <div>
                            {fax}
                        </div>
                    </div>
                )}

                <div className={contactRowClassNames}>
                    <label className={contactLabelClassNames} >
                        Email:
                    </label>
                    <div>
                        {email.split(',').map(emailItem => <a key={emailItem} className='text-sky-600 block' href={`mailto:${emailItem}`} >{emailItem}</a>)}
                    </div>
                </div>

                {!!resumeUrl && (
                    <div className={contactRowClassNames}>
                        <label className={contactLabelClassNames} >
                            Fax:
                        </label>
                        <a href={resumeUrl} download className='bg-sky-600 text-white px-6 py-1'>
                            Resume
                        </a>
                    </div>
                )}                

            </div>

        </Layout>
    )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    return {
        paths: [
            { params: { url: 'irvine-united-states' } },
            { params: { url: 'houston-united-states' } },
            { params: { url: 'washington-d-c-united-states' } },
            { params: { url: 'united-kingdom' } },
            { params: { url: 'oman' } },
            { params: { url: 'ecuador' } },
            { params: { url: 'canada' } }
        ],
        fallback: false
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ url: string }>): Promise<GetStaticPropsResult<Props>> {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const contactData = data.contacts;

    const contact = contactData.find((contact: Contact) => contact.url === '/contacts/' + params!.url);

    return {
        props: { contact: contact },
    };

}


export default Contact;
