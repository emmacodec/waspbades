import Logo from '@/assets/Logo.jpeg';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-300 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>

            {/*three-sections of the footer*/}
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt='logo' src={Logo} />
                <p className='my-5'>Come and experience world class Gym with world class facilities, well trained gym-instructors, relaxation center, bar and restaurant. We also provide home training as well with our top-notch equipments for effective training.</p>
                <p>ⓒ Ade Gym | All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h3 className='font-bold'>Links</h3>
                <p className='my-5'>Facebook</p>
                <p className='my-5'>Twitter</p>
                <p>At Ade Gym we give you the best gym tutorials. Come and Join us NOW.....</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Social Media Handles</p>
                <p className='my-5'>Tv and Radio Platform @ CNN,FOX,VON,Ajazeera</p>
                <p>+{243}8164-060-988</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;