//import
import React, { useState } from "react";
import "./App.css";
import profile_picture from "./assets/images/image-jeremy.png";
import workImage from "./assets/images/icon-work.svg";
import playImage from "./assets/images/icon-play.svg";
import StudyImage from "./assets/images/icon-study.svg";
import ExerciseImage from "./assets/images/icon-exercise.svg";
import SocialImage from "./assets/images/icon-social.svg";
import Self_careImage from "./assets/images/icon-self-care.svg";
import data from "./assets/data.json";
import BigHourCount from "./components/BigHourCount";
import CardBody from "./components/CardBody";
import CardImage from "./components/CardImage";
import CardWrapper from "./components/CardWrapper";
//data selectors
const Work = data[0].timeframes;
const Play = data[1].timeframes;
const Study = data[2].timeframes;
const Exercise = data[3].timeframes;
const Social = data[4].timeframes;
const Self_Care = data[5].timeframes;

function App() {
  const [state, setState] = useState({
    //btn style
    dailyBtnStyle:
      "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
    WeeklyBtnStyle: "font-normal  cursor-pointer hover:text-white ",
    MonthlyBtnStyle:
      "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
    //common
    time_interval: "weak",
    //work
    Work_currentTime: Work.weekly.current,
    work_previousTime: Work.weekly.previous,
    //play
    play_currentTime: Play.weekly.current,
    play_previousTime: Play.weekly.previous,
    //study
    study_currentTime: Study.weekly.current,
    study_previousTime: Study.weekly.previous,
    //Exercise
    Exercise_currentTime: Exercise.weekly.current,
    Exercise_previousTime: Exercise.weekly.previous,
    //Social
    Social_currentTime: Social.weekly.current,
    Social_previousTime: Social.weekly.previous,
    //Self Care
    SelfCare_currentTime: Self_Care.weekly.current,
    SelfCare_previousTime: Self_Care.weekly.previous,
  });
  //jsx components
  function ProfileCard() {
    function DailyBtn() {
      setState({
        //btn style
        dailyBtnStyle: "font-normal cursor-pointer hover:text-white",
        WeeklyBtnStyle:
          "font-normal  cursor-pointer hover:text-white text-Desaturated_blue",
        MonthlyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        //common
        time_interval: "Day",
        //work
        Work_currentTime: Work.daily.current,
        work_previousTime: Work.daily.previous,
        //play
        play_currentTime: Play.daily.current,
        play_previousTime: Play.daily.previous,
        //study
        study_currentTime: Study.daily.current,
        study_previousTime: Study.daily.previous,
        //Exercise
        Exercise_currentTime: Exercise.daily.current,
        Exercise_previousTime: Exercise.daily.previous,
        //Social
        Social_currentTime: Social.daily.current,
        Social_previousTime: Social.daily.previous,
        //Self Care
        SelfCare_currentTime: Self_Care.daily.current,
        SelfCare_previousTime: Self_Care.daily.previous,
      });
    }
    function WeeklyBtn() {
      setState({
        //btn style
        dailyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        WeeklyBtnStyle: "font-normal  cursor-pointer hover:text-white ",
        MonthlyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        //common
        time_interval: "weak",
        //work
        Work_currentTime: Work.weekly.current,
        work_previousTime: Work.weekly.previous,
        //play
        play_currentTime: Play.weekly.current,
        play_previousTime: Play.weekly.previous,
        //study
        study_currentTime: Study.weekly.current,
        study_previousTime: Study.weekly.previous,
        //Exercise
        Exercise_currentTime: Exercise.weekly.current,
        Exercise_previousTime: Exercise.weekly.previous,
        //Social
        Social_currentTime: Social.weekly.current,
        Social_previousTime: Social.weekly.previous,
        //Self Care
        SelfCare_currentTime: Self_Care.weekly.current,
        SelfCare_previousTime: Self_Care.weekly.previous,
      });
    }
    function MonthlyBtn() {
      setState({
        //btn style
        dailyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        WeeklyBtnStyle:
          "text-Desaturated_blue font-normal  cursor-pointer hover:text-white ",
        MonthlyBtnStyle: " font-normal cursor-pointer hover:text-white",
        //common
        time_interval: "Month",
        //work
        Work_currentTime: Work.monthly.current,
        work_previousTime: Work.monthly.previous,
        //play
        play_currentTime: Play.monthly.current,
        play_previousTime: Play.monthly.previous,
        //study
        study_currentTime: Study.monthly.current,
        study_previousTime: Study.monthly.previous,
        //Exercise
        Exercise_currentTime: Exercise.monthly.current,
        Exercise_previousTime: Exercise.monthly.previous,
        //Social
        Social_currentTime: Social.monthly.current,
        Social_previousTime: Social.monthly.previous,
        //Self Care
        SelfCare_currentTime: Self_Care.monthly.current,
        SelfCare_previousTime: Self_Care.monthly.previous,
      });
    }
    return (
      <section
        className="mt-[5.063rem] rounded-[0.938rem] bg-Dark_blue 
       md:col-span-2 md:row-span-1 xl:col-span-1 xl:row-span-2 xl:mt-[0rem] xl:max-w-[22.1rem] 2xl:max-w-none"
      >
        <section
          className="flex items-center gap-x-[1.25rem]
       rounded-[0.938rem] bg-Blue p-[2.563rem] pl-[1.875rem] xl:flex-col xl:items-start 
       xl:p-0 xl:pb-[5rem] xl:pl-[2rem] xl:pr-[5.063rem] xl:pt-[2.313rem]"
        >
          <img
            src={profile_picture}
            alt="profile_picture"
            className="lx:self-start w-[3rem] rounded-full border-2 border-solid 
          border-white md:w-[5.5rem] xl:mb-[2.688rem] xl:border-[0.25rem]"
          />
          <div>
            <h3 className="text-[0.938rem] font-normal text-Pale_Blue ">
              Report for
            </h3>
            <h1
              className=" text-[1.5rem] font-light md:text-[2.5rem] 
            xl:flex xl:flex-col xl:leading-[3.75rem]"
            >
              Jeremy <span>Robson</span>
            </h1>
          </div>
        </section>
        <section
          className="flex flex-wrap justify-between p-[1.625rem] 
      pb-[2rem]  xl:flex-col xl:items-start  xl:gap-[1.313rem] "
        >
          <button className={state.dailyBtnStyle} onClick={DailyBtn}>
            Daily
          </button>
          <button className={state.WeeklyBtnStyle} onClick={WeeklyBtn}>
            Weekly
          </button>
          <button className={state.MonthlyBtnStyle} onClick={MonthlyBtn}>
            Monthly
          </button>
        </section>
      </section>
    );
  }

  function WorkCard() {
    return (
      <CardWrapper>
        <CardImage image={workImage} />
        <CardBody
          title="Work"
          currentTime={state.Work_currentTime}
          interval={state.time_interval}
          time={state.work_previousTime}
        />
      </CardWrapper>
    );
  }
  function PlayCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="z-[3] flex h-[5.38rem] items-center justify-end overflow-hidden rounded-t-[0.938rem] bg-Soft_blue__play">
          <img
            src={playImage}
            alt="workImage"
            className="mr-[1.063rem] mt-[0.938rem] w-[7rem]"
          />
        </section>
        <section
          className="z-10 mt-[-1.875rem] cursor-pointer 
      rounded-[0.938rem] bg-Dark_blue px-[1.5rem] py-[1.75rem] hover:bg-hover_color"
        >
          <section className="flex flex-col justify-between">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Play</h2>
              <button className="flex cursor-pointer gap-1 rounded-full">
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
              </button>
            </div>
            <div className="flex items-center justify-between xl:mt-6 xl:flex-col xl:items-start  xl:justify-normal">
              <BigHourCount currentTime={state.play_currentTime} />
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.play_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function StudyCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="z-[3] flex h-[5.38rem] items-center justify-end overflow-hidden rounded-t-[0.938rem] bg-Light_red__study">
          <img
            src={StudyImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[-0.625rem] w-[6rem]"
          />
        </section>
        <section
          className="z-10 mt-[-1.875rem] cursor-pointer 
      rounded-[0.938rem] bg-Dark_blue px-[1.5rem] py-[1.75rem] hover:bg-hover_color"
        >
          <section className="flex flex-col justify-between">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Study</h2>
              <div className="flex cursor-pointer gap-1">
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:mt-6 xl:flex-col xl:items-start  xl:justify-normal">
              <BigHourCount currentTime={state.study_currentTime} />
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.study_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function ExerciseCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="z-[3] flex h-[5.38rem] items-center justify-end overflow-hidden rounded-t-[0.938rem] bg-Lime_green__exercise">
          <img
            src={ExerciseImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[-0.625rem] w-[7.5rem]"
          />
        </section>
        <section
          className="z-10 mt-[-1.875rem] cursor-pointer 
      rounded-[0.938rem] bg-Dark_blue px-[1.5rem] py-[1.75rem] hover:bg-hover_color"
        >
          <section className="flex flex-col justify-between">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Exercise</h2>
              <div className="flex cursor-pointer gap-1">
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:mt-6 xl:flex-col xl:items-start  xl:justify-normal">
              <BigHourCount currentTime={state.Exercise_currentTime} />
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.Exercise_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function SocialCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="z-[3] flex h-[5.38rem] items-center justify-end overflow-hidden rounded-t-[0.938rem] bg-Violet__social">
          <img
            src={SocialImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[0.188rem] w-[5.7rem]"
          />
        </section>
        <section
          className="z-10 mt-[-1.875rem] cursor-pointer 
      rounded-[0.938rem] bg-Dark_blue px-[1.5rem] py-[1.75rem] hover:bg-hover_color"
        >
          <section className="flex flex-col justify-between">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Social</h2>
              <div className="flex cursor-pointer gap-1">
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:mt-6 xl:flex-col xl:items-start  xl:justify-normal">
              <BigHourCount currentTime={state.Social_currentTime} />
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.Social_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function SelfCareCard() {
    return (
      <section className="mb-[5.6rem] grid md:mb-[0rem] xl:w-[15.9rem]">
        <section className="z-[3] flex h-[5.38rem] items-center justify-end overflow-hidden rounded-t-[0.938rem] bg-Soft_orange__self_care">
          <img
            src={Self_careImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[-0.625rem] w-[6rem]"
          />
        </section>
        <section
          className="z-10 mt-[-1.875rem] cursor-pointer 
      rounded-[0.938rem] bg-Dark_blue px-[1.5rem] py-[1.75rem] hover:bg-hover_color"
        >
          <section className="flex flex-col justify-between">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Self Care</h2>
              <div className="flex cursor-pointer gap-1">
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
                <div className="h-2 w-2 rounded-full bg-Pale_Blue"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:mt-6 xl:flex-col xl:items-start  xl:justify-normal">
              <BigHourCount currentTime={state.SelfCare_currentTime} />
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.SelfCare_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  return (
    <article className="xl:flex xl:h-screen xl:items-center xl:justify-center">
      <main
        className="ml-6 mr-6 md:flex md:flex-col md:gap-5 xl:max-w-[90rem]
       xl:flex-row xl:items-center xl:justify-center"
      >
        <ProfileCard />
        <div
          className="md:grid md:grid-cols-2 md:grid-rows-4 md:items-center 
        md:gap-[1.87rem] xl:grid-cols-3 xl:grid-rows-2 "
        >
          <WorkCard />
          <PlayCard />
          <StudyCard />
          <ExerciseCard />
          <SocialCard />
          <SelfCareCard />
        </div>
      </main>
    </article>
  );
}

export default App;
