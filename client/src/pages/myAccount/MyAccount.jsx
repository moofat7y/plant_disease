import React from 'react'
import images from '../../assets/images';
import MyAccountRow from '../../components/myAccount/MyAccountRow';
import Section from '../../components/section/Section';

const detectionHistory =
{
    "16/1/2023": [
        {
            image: images.main.unhealth_apple_1,
            percent: "91",
        },
        {
            image: images.main.unhealth_apples_1,
            percent: "71",
        }
    ],"1/2/2023": [
        {
            image: images.main.unhealth_apple_1,
            percent: "91",
        },
        {
            image: images.main.unhealth_leave_2,
            percent: "95",
        }
    ],
    "13/2/2023": [
        {
            image: images.main.unhealth_apples_1,
            percent: "71",
        }
    ],
};
const MyAccount = () => {
  return (
    <div className='my-account'>
        <Section className={"py-5"} containerClassName={"container"}>
            <h1 className='fs-3 text-capitalize text-primary mt-4'>welcome Amr Jamal</h1>
            <div className="py-3">
                {
                    Object.entries(detectionHistory).map((item, index) => <MyAccountRow key={index} item={item} />)
                }
            </div>
        </Section>
    </div>
  )
}

export default MyAccount
