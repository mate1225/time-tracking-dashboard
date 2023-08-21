export default function CardWrapper(props) {
  return (
    <section className="grid max-h-[18.2rem] xl:w-[15.9rem] ">
      {props.children}
    </section>
  );
}
