import { Card } from "flowbite-react";
import { Avatar } from "flowbite-react";

import avatar_1 from "../assets/icons/avatar_1.png";
import avatar_2 from "../assets/icons/avatar_2.png";

const data = [
  {
    id: 1,
    avatar: avatar_1,
    name: "Finlay Kirk",
    job: "Web Developper",
    desc: "Teachings of the great explore of truth, the master builder of human happiness no one rejects,dislikes, or avoids pleasure  itself, pleasure itself",
  },
  {
    id: 2,
    avatar: avatar_2,
    name: "Dannette P. Cervantes",
    job: "Web Design",
    desc: "“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply  random text. It has roots”",
  },
  {
    id: 3,
    avatar: avatar_1,
    name: "Finlay Kirk",
    job: "Web Developper",
    desc: "Teachings of the great explore of truth, the master builder of human happiness no one rejects,dislikes, or avoids pleasure  itself, pleasure itself",
  },
];

const Students = () => {
  return (
    <section className="py-8">
      <div className="w-full  max-w-[1440px] mx-auto px-4">
        <h2 className=" text-[36px] md:text-[50px] mb-2 text-center font-bold">
          What student’s say
        </h2>
        <p className="text-[#8A8A8A] text-center">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <ul className="w-full mt-8 grid md:grid-cols-3 gap-x-4  gap-y-6 mx-auto">
          {data.map((d) => (
            <li key={d.id}>
              <Card className="max-w-sm p-4 mx-auto">
                <p className="font-normal text-[#ACACAC] dark:text-gray-400">
                  {d.desc}
                </p>
                <div className="flex items-center gap-x-3">
                  <Avatar img={d.avatar} />
                  <span>
                    <h4 className="font-bold">{d.name}</h4>
                    <p className="text-[#5f5f5f]">{d.job}</p>
                  </span>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Students;
