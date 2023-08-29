import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

const Contact = () => {
  return (
    <PageTemplate title='Contact - Collosal'>
      <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5">
        {/* 左侧名片内容 */}
        <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
          <div className="sm:text-center lg:text-left">
            <PageSentence
              title="We love receiving messages from you, we are waiting for it."
              badge="CONTACT"
            />
          </div>
          <div className="space-y-6">
            <IconListItem
              label="Phone"
              value="+1 (828)479-5148"
              icon={<FiPhoneCall />}
            />
            <IconListItem
              label="Email"
              value="w@omnind.com"
              icon={<FiMail />}
            />
          </div>
        </aside>
        {/* 右侧填充图片的卡片 */}
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-full bg-light rounded-md p-6 md:p-9" data-aos="fade-down-left">
          {/* 这里可以添加图片或其他内容 */}
          {/* 示例： */}
          <img src="/images/Toronto.png" alt="Filler Image" className="w-full h-auto rounded-md" />
          {/* 或添加其他内容 */}
        </div>
      </section>
    </PageTemplate>
  );
}

export default Contact;






