
interface Props{
    text: string
}

export default function SectionH2({text}:Props){
    return(
        <h2 className="md:text-[3.5rem] text-[2.5rem] text-center font-bold font-pirata">
            {text}
        </h2>
    )
}