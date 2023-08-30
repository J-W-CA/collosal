import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/Microsoft Cloud Solution Provider.svg'}
            width={1200}
            height="360"
            alt="microsoft logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
