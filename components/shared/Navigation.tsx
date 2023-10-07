import useScrollability from "@/context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Navigation() {

    const { asPath } = useRouter();

    const context = useScrollability();

    const [isNavVisible, setNavVisible] = useState<boolean>(false);

    const isHome = asPath === '/';

    useEffect(() => {
        context.setScrollable(!isNavVisible);
    }, [isNavVisible]);

    useEffect(() => {
        setNavVisible(false);
    }, [asPath]);

    const servicesLinks = [
        {
            "title": "Project Risk Assessment and Management",
            "url": "/services/project-risk-assessment-and-management"
        },
        {
            "title": "Reliability Analysis",
            "url": "/services/reliability-analysis"
        },
        {
            "title": "Decision Analysis",
            "url": "/services/decision-analysis"
        },
        {
            "title": "Economic Evaluation of Contracts",
            "url": "/services/economic-evaluation-of-contracts"
        },
        {
            "title": "Training and Workshops",
            "url": "/services/training"
        }
    ];
    const sectorsLinks = [
        {
            "title": "Upstream Oil and Gas, Exploration and Production",
            "url": "/sectors/upstream-oil-and-gas-exploration-and-production",
        },
        {
            "title": "Midstream Oil and Gas, LNG Developments",
            "url": "/sectors/midstream-oil-and-gas-lng-developments",
        },
        {
            "title": "Downstream Oil and Gas",
            "url": "/sectors/downstream-oil-and-gas",
        },
        {
            "title": "Alternative Energies",
            "url": "/sectors/alternative-energies",
        },
        {
            "title": "Transportation Infrastructures",
            "url": "/sectors/transportation-infrastructures",
        }
    ];
    const contactLinks = [
        {
            "title": "Irvine, United States",
            "url": "/contacts/irvine-united-states",
        },
        {
            "title": "Houston, United States",
            "url": "/contacts/houston-united-states",
        },
        {
            "title": "Washington, D.C., United States",
            "url": "/contacts/washington-d-c-united-states",
        },
        {
            "title": "United Kingdom",
            "url": "/contacts/united-kingdom",
        },
        {
            "title": "Oman",
            "url": "/contacts/oman",
        },
        {
            "title": "Ecuador",
            "url": "/contacts/ecuador",
        },
        {
            "title": "Canada",
            "url": "/contacts/canada",
        }
    ]

    const navLinkClassNames = (href: string) => `block py-2 px-3 lg:py-3 lg:px-6 transition-all lg:hover:bg-red-600 lg:hover:text-white lg:flex items-center lg:h-full font-semibold lg:group-hover:bg-red-600 lg:group-hover:text-white ${href === asPath ? "lg:bg-red-600 lg:text-white" : ""} ${isHome?"lg:text-white":""}`;
    const submenuWrapperClassNames = (rightAlign: boolean = false) => `mb-4 lg:absolute lg:top-full ${rightAlign ? "lg:right-0" : "lg:left-0"} lg:w-56 lg:bg-red-600 lg:text-white lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:mt-5 lg:group-hover:mt-0 transition-all`;
    const submenuNavLinkClassName = "block pl-10 py-2 px-3 lg:py-3 lg:pl-3 transition-all hover:bg-black/25";

    const menuIconBarClassNames = "h-0.5 w-full bg-stone-600 absolute origin-left left-0 right-0 transition-all"

    return (
        <>
            <button
                type="button"
                onClick={() => { setNavVisible(prevState => !prevState) }}
                className="lg:hidden relative w-8 h-6 flex flex-col justify-center"
            >
                <div className={`${menuIconBarClassNames} top-0 ${isNavVisible ? "rotate-45" : "rotate-0"}`} />
                <div className={`h-0.5 w-full bg-stone-600 ${isNavVisible ? "opacity-0" : "opacity-100"}`} />
                <div className={`${menuIconBarClassNames} bottom-0 ${isNavVisible ? "-rotate-45" : "rotate-0"}`} />
            </button>
            <div
                className={`fixed z-10 bg-black/75 w-screen top-59 md:top-88 right-0 ${isNavVisible ? "visible opacity-100" : "invisible opacity-0"} transition-all bottom-0 lg:hidden`}
                onClick={() => { setNavVisible(false) }}
            />
            <nav className={`fixed z-20 overflow-auto lg:overflow-visible bg-white w-3/4 lg:w-auto top-59 md:top-88 right-0 ${isNavVisible ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 transition-all bottom-0 lg:bg-transparent lg:static lg:flex items-stretch leading-5`}>
                <Link href="/" className={navLinkClassNames("/")} >Home</Link>
                <Link href="/about" className={navLinkClassNames("/about")} >About</Link>
                <div className="group relative">
                    <Link href="/services" className={navLinkClassNames("/services")} >Services</Link>
                    <div className={submenuWrapperClassNames()}>
                        {servicesLinks.map(service => <Link key={service.title} href={service.url} className={submenuNavLinkClassName} > {service.title} </Link>)}
                    </div>
                </div>
                <div className="group relative">
                    <Link href="/sectors" className={navLinkClassNames("/sectors")} >Sectors</Link>
                    <div className={submenuWrapperClassNames()}>
                        {sectorsLinks.map(sector => <Link key={sector.title} href={sector.url} className={submenuNavLinkClassName} > {sector.title} </Link>)}
                    </div>
                </div>
                <div className="group relative">
                    <Link href="/contacts" className={navLinkClassNames("/contacts")} >Contact</Link>
                    <div className={submenuWrapperClassNames()}>
                        {contactLinks.map(contact => <Link key={contact.title} href={contact.url} className={submenuNavLinkClassName} > {contact.title} </Link>)}
                    </div>
                </div>


            </nav>
        </>
    )
}