"use client";
import { Button, Card, TextInput } from "flowbite-react";
import HeroImg from '../assets/images/hero-illus.png'

export function Hero() {
  return (
    <section className="bg-[#FDF8EE] pt-20">
      <div className="w-full  max-w-[1440px] mx-auto">
        <div className="w-full md:flex gap-x-12 justify-between">
          <Card className="border-none shadow-none w-full max-w-[590px] bg-inherit">
            <h5 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              The <strong className="text-[#FF7426]">Smart</strong> <br />
              Choice For <strong className="text-[#FF7426]">Future</strong>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>
            <div className="w-full max-w-[568px] h-[50px] flex items-center p-4 bg-white rounded-full">
              <TextInput
              className="w-full"
                id="email1"
                type="email"
                placeholder="name@gmail.com"
                required
              />
            <Button  className="rounded-md">
              Continiue
            </Button>
            </div>
          </Card>
          <div className="w-full max-w-[500px] mx-auto md:max-w-[700px] px-4">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
