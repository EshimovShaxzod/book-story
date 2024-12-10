import { Card } from "flowbite-react";
import Teacher_1 from "../assets/images/teacher_1.png";
import Teacher_2 from "../assets/images/teacher_2.png";
import { Facebook, Instagram } from "lucide-react";

const data = [
  {
    imgURL: Teacher_1,
    name: "Matthew E. McNatt",
    job: "Professor @George Brown College",
    desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
  },
  {
    imgURL: Teacher_2,
    name: "Cynthia A. Nelson",
    job: "Professor @George Brown College",
    desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
  },
  {
    imgURL: Teacher_1,
    name: "Matthew E. McNatt",
    job: "Professor @George Brown College",
    desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
  },
];
const Teachers = () => {
  return (
    <section className="py-8">
      <div className="w-full  max-w-[1440px] mx-auto px-4">
        <h2 className="text-[36px]  md:text-[50px] mb-2 text-center font-bold">
          Our Tracks
        </h2>
        <p className="text-[#8A8A8A] text-center">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <ul className="w-full mt-8 grid md:grid-cols-3 gap-x-4  gap-y-6 mx-auto">
          {data.map((d) => (
            <li className="w-full max-w-[490px] mx-auto">
              <Card
                className="w-full cursor-pointer hover:shadow-xl"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={d.imgURL}
              >
                <div>
                  <h3 className="text-[20px]">{d.name}</h3>
                  <b className="text-[#868686]">{d.job}</b>
                  <p className="text-[#ACACAC] mt-4">{d.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[16px] font-bold text-[#FF7426] dark:text-white">
                    Engineering physics
                  </span>
                  <div className="flex items-center gap-x-4">
                    <Instagram className="hover:text-[#FF7426]" />
                    <Facebook className="hover:text-[#FF7426]" />
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Teachers;
