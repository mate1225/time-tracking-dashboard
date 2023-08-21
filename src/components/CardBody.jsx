import AggregateCount from "./AggregateCount";
import BigHourCount from "./BigHourCount";
import CardHeader from "./CardHeader";

export default function CardBody(props) {
  const { title, interval, currentTime, time } = props;

  return (
    <section
      className="bg-Dark_blue rounded-[0.938rem] px-[1.5rem] 
py-[1.75rem] mt-[-1.875rem] z-10 hover:bg-hover_color cursor-pointer"
    >
      <section className="flex justify-between flex-col">
        <CardHeader title={title} />
        <div
          className="flex items-center justify-between xl:flex-col 
    xl:items-start xl:justify-normal xl:mt-6 "
        >
          <BigHourCount currentTime={currentTime} />
          <AggregateCount interval={interval} time={time} />
        </div>
      </section>
    </section>
  );
}
