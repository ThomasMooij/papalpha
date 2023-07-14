import aboutImage from "../assets/images/about.jpeg";

export const About = () => {

    return (
        <section className="flex flex-col">
            <div className="p-24 grid grid-cols-2">
                <acticle className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                    beatae! Doloribus fuga aperiam magni ipsum repellat voluptates
                    itaque error, atque, exercitationem fugit ab, modi ut voluptatum
                    sequi ad eum! Rerum! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Minus quia suscipit deserunt, neque nemo veniam
                    adipisci deleniti culpa dolor dolores omnis, rem veritatis assumenda
                    eaque dignissimos ut, nam debitis numquam!
                    </p>
                 <button className=" w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reservar Mesa</button>
                </acticle>
                <acticle className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover rounded-md" />
                </acticle>
            </div>
        </section>
    )
}