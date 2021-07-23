import Header from "./component/Header";
import Main from "./component/Main";
import University from "./component/University";
import university_logo from "./component/university_logo";
import Goals from "./component/Goals";
import goals_logo from "./component/goals_logo";
import Work from "./component/Work";
import Wall from "./component/Wall";
import walls_logo from "./component/walls_logo";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <div className=" flex flex-col bg-gray-200 ">
          <div className=" text-center font-bold p-10 text-lg sm:block hidden">
            Мы сотрудничаем более чем с{" "}
            <div className="text-blue-300 ">
              200 ведущими университетами и компании
            </div>
            <div className=" flex flex-row space-x-20 justify-center">
              {university_logo.map((logo) => (
                <University image={logo.image} alt={logo.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" flex text-4xl font-bold p-10 ">
          Добейтесь своих целей с Coursera
        </div>
        <div className="grid lg:grid-cols-4 p-22 sm:grid-cols-2 ">
          <div className="flex space-x-20">
            {goals_logo.map((goal) => (
              <Goals image={goal.image} alt={goal.label} text={goal.text} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Work />
      </div>
      <div>
        {walls_logo.map((wall, index) => (
          <Wall image={wall.image} alt={wall.label} text={wall.text} index={index} />
        ))}
      </div>
    </div>
  );
}
