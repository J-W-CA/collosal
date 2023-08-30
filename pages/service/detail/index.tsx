import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FiClock,
  FiCode,
  FiFigma,
  FiLayout,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'
import randomString from 'utils/randomString'

const ServiceDetail = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `How is the payment system?`,
      description: `If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.`,
    },
    {
      title: `Can I consult first?`,
      description: `Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.`,
    },
    {
      title: `What if the project stops halfway?`,
      description: `We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.`,
    },
    {
      title: `Does it include servers and domains?`,
      description: `You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.`,
    },
    {
      title: `Will I get the source code?`,
      description: `When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.`,
    },
    {
      title: `Is there a warranty?`,
      description: `1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.`,
    },
  ]
  const features: FeatureCardProps[] = [
    {
      title: '30% Efficiency Increase',
      description:
        'Increase the efficiency of your manufacturing operations and have more control over the performance of your processes and resources.',
      icon: <FiFigma />,
    },
    {
      title: '15% Project Cost Savings',
      description: `Design a number of what-if scenarios, have better insights into your projects, minimize your investment risks and save additional costs from your projects.`,
      icon: <FiClock />,
    },
    {
      title: '3,000+ Components',
      description: `Use an extensive library of 3D models with more than 1,600 robots, 70+ brands, and a wide range of conveyors, machines, resources, robot tools, factory facilities, and more.`,
      icon: <FiCode />,
    },
    {
      title: 'Improve Robot Utilization by 95%',
      description:
        'Optimize the utilization of your robots by intelligent and fast offline programming and repurpose them for most industrial processes whether its welding, processing, or spraying and eliminate the robot downtime.',
      icon: <FiTrendingUp />,
    },
    {
      title: '80% Faster Response',
      description: `Simulate your concepts within minutes and hours instead of days and weeks. Respond faster to your customers and answer their questions with visual and animated proposals.`,
      icon: <FiLayout />,
    },
    {
      title: 'Reduce Engineering Time',
      description:
        'Simulate, test, validate and deliver optimum engineering solutions by connecting your designs with PLCs, and robot controllers and save time by virtual commissioning before allocating time and costs to the physical systems.',
      icon: <FiZap />,
    },
  ]
  return (
    <PageTemplate title="Benefit - &O">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="BENEFIT"
            title="How our Customers Benefit"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge=" FEATURES"
            title="Here's what you will get when purchasing this service"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            return (
              <div key={randomString(64)} data-aos="fade-up">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isNaked={true}
                />
              </div>
            )
          })}
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium">
          {`Didn't find an answer? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline">
            <Link href={'/quote'}>Do not hesitate to ask!</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default ServiceDetail
