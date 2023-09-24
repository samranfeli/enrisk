import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {

    const router = useRouter();

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
    

    const NavLinkclassNames = (href:string) => `py-3 px-6 transition-all lg:hover:bg-red-600 lg:hover:text-white flex items-center h-full font-semibold lg:group-hover:bg-red-600 lg:group-hover:text-white ${href === router.asPath ? "lg:bg-red-600 lg:text-white":""}`;

    return (
        <nav className="lg:flex z-10 items-stretch leading-5">
            <Link href="/" className={NavLinkclassNames("/")} >Home</Link>
            <Link href="/about" className={NavLinkclassNames("/about")} >About</Link>
            <div className="group relative">
                <Link href="/services" className={NavLinkclassNames("/services")} >Services</Link>
                <div className="lg:absolute lg:top-full lg:left-0 lg:w-56 bg-red-600 text-white lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:mt-5 lg:group-hover:mt-0 transition-all">
                    {servicesLinks.map(service => <Link key={service.title} href={service.url} className="block p-3 transition-all hover:bg-black/25" > {service.title} </Link>)}
                </div>
            </div> 
            <div className="group relative">
                <Link href="/sectors" className={NavLinkclassNames("/sectors")} >Sectors</Link>
                <div className="lg:absolute lg:top-full lg:left-0 lg:w-56 bg-red-600 text-white lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 lg:mt-5 lg:group-hover:mt-0 transition-all">
                    {sectorsLinks.map(sector => <Link key={sector.title} href={sector.url} className="block p-3 transition-all hover:bg-black/25" > {sector.title} </Link>)}
                </div>
            </div>

            
        </nav>
    )
}