import Image from "next/image";
import { size } from "zod";
import Paragraph from "@/components/Paragraph";


export default function Home() {
    return (
        <div className="flex flex-col items-center gap-10 min-h-screen p-8 sm:p-20">
            <h1 className="text-4xl font-heading font-bold">
                About Me: Ethan Nguyen-Huu
            </h1>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-20">
                <Image
                src="/Profile_Photo.png"
                alt="Ethan Nguyen-Huu's Photo"
                width={200}
                height={200}
                className="rounded-full"
                />
                <div className="border-2 border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-800">
                    <h2 className="text-2x1 font-bold mb-2">Some of my Hobbies</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Soccer</li>
                        <li>Volleyball</li>
                        <li>Roblox</li>
                        <li>Anime</li>
                        <li>CS 🧐🤓</li>
                    </ul>
                </div>
            </div>
            <div>
                <Paragraph>
                    <div className="flex items-center gap-10">
                    <span>
                    Hi!!!!! 
                    </span>
                    <Image
                    src="/cat.png"
                    alt="Cute Cat Icon"
                    width={100}
                    height={50}
                    className="rounded-full"
                    />
                    My name is Ethan Nguyen-Huu. I'm a CSES Developer for Runway Avenue!
                    </div>
                </Paragraph>
                <Paragraph>
                    I'm an undergraduate freshman at UCSD. I am majoring in <strong><u>Artificial Intelligence</u></strong> and I'm interested in <strong><u>Machine Learning</u>.</strong>
                </Paragraph>
                <Paragraph>
                    <div className="flex items-center gap-4">
                    <span>I am also intrigued by <strong>Control Theory</strong>, <i>but</i> I'm not sure if it will be pursued in my academic endeavors</span>
                    <Image
                    src="/nerd.png"
                    alt="Nerd Photo"
                    width={50}
                    height={50}
                    className="rounded-full"
                    />.
                    </div>
                </Paragraph>
                <Paragraph>
                    I'm excited to learn more about web development as the year goes on. I'm very new to it. <small>Like I lowkey <small>need <small>help and supervision type-new...</small></small></small>
                </Paragraph>
            </div>
        </div>

    );
}
