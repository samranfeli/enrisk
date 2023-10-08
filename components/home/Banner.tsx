import Link from "next/link"

export default function Banner() {
  return (
    <section className='relative  bg-[url("/images/bg.jpg")] bg-cover bg-center' >
      <div className='max-w-7xl mx-auto px-3 text-white flex flex-col justify-end md:justify-center h-screen'>

        <div className="max-w-xl py-3">
          <span className="inline-block bg-cyan-950/40 px-4 py-1 border-l-4 border-amber-500">Industrial Risk Management</span>
          <h2 className="text-4xl md:text-6xl font-bold my-3 md:my-4">Risk Based  Decision Anlysis</h2>
          <p className="text-lg mb-4 lg:mb-6">EnRisk addresses the complex challenges of its clients’ mega projects and develops strategies to manage their risks.</p>
          <Link href={'/services'} className="btn red-btn block md:inline-block mb-14 lg:mb-3" >
            Explore More
          </Link>
        </div>

      </div>
    </section>
  )
}