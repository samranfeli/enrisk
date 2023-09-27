import Image from "next/image"

export default function Banner() {
  return (
    <section className='relative' >
      <Image
        src='/images/bg.jpg'
        alt='EnRisk'
        width={2000}
        height={300}
        className='md:home-banner-height object-cover object-center home-banner-ratio'
      />
      <div className='max-w-7xl mx-auto px-3 absolute top-20 left-0 right-0 hidden md:block'>
        <Image
          src='/images/slogan.png'
          alt='EnRisk addresses the complex challenges of its clients’ mega projects and develops strategies to manage their risks.'
          width={336}
          height={191}
        />
      </div>
    </section>
  )
}