import pic from "./assets/speaker_pic.png"
import Image from "next/image";

const imgStyle = {
    height: '80%',
    width: '80%',
}

export const headings = ["Registrations", "Bootcamp 1", "Bootcamp 2" ,"Bootcamp 3" , "Makeathon " , "results" , "afterparty"];
export const dt = ["Join us on February 23rd at LP-101 for an electrifying speaker session with Mr. Vishwa Mohan, Chief Information Officer at Physics Wallah! With 14 years of industry experience, Mr. Vishwa Mohan will reveal exclusive insights and cutting-edge strategies for becoming a top 1% software engineer.Whether you're a coding guru or just starting out, this session promises to fuel your passion and equip you with the skills to thrive.Don't miss this chance to learn from a tech titan! Save the date and unlock your full potential with Mr. Vishwa Mohan and the Microsoft Learn Student Chapter. See you there!", ];
export const img = [<Image src={pic} style={imgStyle} />, undefined];