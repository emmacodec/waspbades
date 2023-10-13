

type Props = {
    name: string;
    description: string;
    image: string;
}

const Variety = ({name, description, image}: Props) => {

const overlay = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">

        {/*overlay*/}
        <div className={overlay}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Variety;