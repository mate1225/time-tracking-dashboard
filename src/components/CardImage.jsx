export default function CardImage({ image }) {
  return (
    <section
      className="flex justify-end items-center bg-Light_red_work
 rounded-t-[0.938rem] z-[3] h-[5.38rem] overflow-hidden"
    >
      <img
        src={image}
        alt="workImage"
        className="mr-[1.094rem] mt-[-0.625rem] w-[5.5rem]"
      />
    </section>
  );
}
