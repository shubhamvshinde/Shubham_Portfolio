"use client";

import CountUp from "react-countup";

const stars = [
    {
        num:1.8,
        text: "Years Of Experience",
    },
    {
        num:5,
        text: "Projects Done",
    },
    {
        num:15,
        text: "Technologies Learned",
    },
    {
        num:300,
        text: "Code Commits",
    },
]

const Stars = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stars.map((item, index) => {
                    return (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}
                        >
                            <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-3xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${
                                item.text.length < 15 ? "text-xs xl:text-2xl max-w-[100px]": "text-xs xl:text-2xl max-w-[150px]"
                            } leading-snug text-white/80`}>
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stars