import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <div>
          <Image
            src="/images/mhorn.png"
            alt="Profile Image"
            width={300}
            height={300}
            className="rounded-3xl"
          />
        </div>
        <div>
          <h2>Derek Myers</h2>
        </div>
        <div>
          <h3>Full-Stack Web Developer</h3>
        </div>
      </div>
    </>
  );
}
