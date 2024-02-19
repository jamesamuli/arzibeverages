import undraw_beer from "../../assets/images/undraw_beer_xg5f.png";
import winAndWater from "../../assets/images/winW.png";
import tour from "../../assets/images/tour.png";
import p1 from "../../assets/images/p1.png";
import p4 from "../../assets/images/p4.png";
import ceo from "../../assets/images/ceo.jpeg";
import cto from "../../assets/images/cto.jpeg";
import pm from "../../assets/images/yan.jpeg"
import {MdPlace} from 'react-icons/md'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

export default function Landing() {
    return <>
        <div id='arzi' className='min-h-screen'>
            <div className="font-Nunito flex items-center justify-center m-3 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex overflow-hidden h-[400px] items-center justify-center">
                        <img
                            src={tour}
                            alt="win and water"
                            className="h-[400px] rotate-45 font-extrabold"
                        />
                    </div>
                    <div className="font-Nunito m-7">
                        <h2 className="text-start text-3xl md:text-5xl p-7 font-extrabold text-sky-500">
                            Engagement.
                        </h2>
                        <p className="text-xl">
                            Fin 2024, <strong>Arzi</strong> lancera la fondation Arzi: une
                            organisation sans but lucratif qui sera axée sur la Formation
                            Professionelle des communautés, Assistance aux personnes
                            vulnerables, Soutient par bourse d'Excellence aux meilleurs élèves
                            finalistes entrant à l'université.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="mx-5 md:mx-10 p-7 flex flex-col justify-center">
                        <h1 className="font-Nunito text-start font-extrabold text-sky-500 text-3xl md:text-5xl my-7">
                            Vision Arzi
                        </h1>
                        <ul className="text-lg font-Nunito">
                            <li className="my-3 p-3 border outline-none shadow-lg rounded-lg hover:shadow-xl hover:ease-in-out duration-300">
                                Fournir une eau de Qualité à +15Millions de population de Kinshasa et ses environs.
                            </li>
                            <li className="my-3 p-3 border outline-none shadow-lg rounded-lg hover:shadow-xl hover:ease-in-out duration-300">
                                Devenir leader National dans le breuvage(Eau,Vin,Jus,etc...)
                            </li>
                            <li className="my-3 p-3 border outline-none shadow-lg rounded-lg hover:shadow-xl hover:ease-in-out duration-300">
                                Accompagner la Vision de la Republique en industrualisant la partie Est de Kinshasa.
                            </li>
                        </ul>
                    </div>
                    <div className="m-2 p-10  md:flex md:items-center md:justify-center md:visible hidden">
                        <img src={undraw_beer} alt="undraw_beer" />
                    </div>
                </div>
            </div>
        </div>
        <div id="produits" className="py-10 bg-white mt-5">
            <div className="container mx-auto px-6 md:px-12 lg:px-8 font-Nunito">
                <div className="mb-12 text-center flex flex-col justify-center">
                    <h1 className="font-bold text-sky-500 text-3xl md:text-5xl">
                        Produits Arzi
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-10 pt-5">
                        <div>
                            <img src={p1} alt="aquakin" className="w-40 m-7" />
                        </div>
                        <div>
                            <img src={p4} alt="affection" className="w-40 m-7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="team" className="py-5 bg-white mt-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-8 font-Nunito">
                <div className="mb-7 text-center">
                    <h1 className="font-bold text-sky-500 text-3xl md:text-5xl">
                        Notre Equipe
                    </h1>
                    <p className="lg:w-8/12 lg:mx-auto my-4">
                        Une equipe des jeunes entrepreneurs Congolais investies de tout coeur afin
                        d'aller au bout de la vision de ARZI.
                    </p>
                </div>
                <div className="py-20 gap-28 grid md:gap-12 md:grid-cols-3">
                    <div className="border-t-4 spae-y-8 group text-center">
                        <div className="w-32 h-32 overflow-hidden -mt-16 mx-auto rounded-[2rem] rotate-45 my-5">
                            <img
                                src={ceo}
                                alt="ceo"
                                loading="lazy"
                                width="640"
                                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300"
                            />
                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">
                                Pascal Afazali
                            </h5>
                            <span className=" text-sm text-gray-500">CEO Fondateur</span>
                        </div>
                    </div>
                    <div className="border-t-4 spae-y-8 group text-center">
                        <div className="w-32 h-32 overflow-hidden -mt-16 mx-auto rounded-[2rem] rotate-45 my-5">
                            <img
                                src={pm}
                                alt="ceo"
                                loading="lazy"
                                width="640"
                                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"
                            />
                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">
                                Yannick Kubuya
                            </h5>
                            <span className=" text-sm text-gray-500">Project Manager</span>
                        </div>
                    </div>
                    <div className="border-t-4 spae-y-8 group text-center">
                        <div className="w-32 h-32 overflow-hidden -mt-16 mx-auto rounded-[2rem] rotate-45 my-5">
                            <img
                                src={cto}
                                alt="ceo"
                                loading="lazy"
                                width="640"
                                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"
                            />
                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">
                                Destin Kifende
                            </h5>
                            <span className=" text-sm text-gray-500">Technical Manager</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contacts" className="min-h-screen my-5 py-10 w-full bg-gray-100 flex flex-col items-center justify-center">
            <div className="font-Nunito text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-sky-500">
                    Contactez-nous
                </h2>
                <p>
                    Contactez-nous
                </p>
            </div>
            <div className="flex items-center justify-center my-6 font-Nunito">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className=" bg-white w-[350px] p-10 my-7 flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                        <span className="text-4xl text-sky-500">
                            <MdOutlineAlternateEmail />
                        </span>
                        <h2 className="m-3 text-2xl font-semibold">
                            Email
                        </h2>
                        <p>
                            arzi@arzibeverage.com
                        </p>
                    </div>
                    <div className=" bg-white w-[350px] p-10 my-7  flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                        <span className="text-4xl  text-sky-500">
                            <MdPlace />
                        </span>
                        <h2 className="m-3 text-2xl font-semibold">
                            Adresse
                        </h2>
                        <p>
                            RDC Kinshasa, Commune de N'Sele, <br /> Quartier Kindobo, Avenue Bashengezi.
                        </p>
                    </div>
                    <div className=" bg-white w-[350px] p-10 my-7 flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                        <span className="text-4xl  text-sky-500">
                            <BsFillTelephoneFill />
                        </span>
                        <h2 className="m-3 text-2xl font-semibold">
                            WhatsApp
                        </h2>
                        <p>
                            +243 (0) 840 146 739 <br /> +243 (0) 998 215 728
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}