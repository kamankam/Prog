import Header from "./component/Header";
import Main from "./component/Main";
import University from "./component/University";
import Goals from "./component/Goals";

const university_logo = [
  {
    label: "Oxford University",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/4/44/MIT_Seal.svg/548px-MIT_Seal.svg.png",
  },
  {
    label: "Oxford University",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/3_НГУлого_новый_голубой_рус.png/440px-3_НГУлого_новый_голубой_рус.png",
  },
];

const goals = [
  {
    label: "learn",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/4/44/MIT_Seal.svg/548px-MIT_Seal.svg.png",
    text: "Получите актуальные навыки,такие как бизнес-аналитика, графический дизайн, Python и т. д.",
  },
  {
    label: "learn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/3_НГУлого_новый_голубой_рус.png/440px-3_НГУлого_новый_голубой_рус.png",
    text: "Получите актуальные навыки,такие как бизнес-аналитика, графический дизайн, Python и т. д.",
  },
  {
    label: "learn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/3_НГУлого_новый_голубой_рус.png/440px-3_НГУлого_новый_голубой_рус.png",
    text: "Получите актуальные навыки,такие как бизнес-аналитика, графический дизайн, Python и т. д.",
  },
  {
    label: "learn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/3_НГУлого_новый_голубой_рус.png/440px-3_НГУлого_новый_голубой_рус.png",
    text: "Получите актуальные навыки,такие как бизнес-аналитика, графический дизайн, Python и т. д.",
  },
];

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
            <a className="text-blue-300 ">
              200 ведущими университетами и компании
            </a>
            <div className=" flex flex-row space-x-20">
              {university_logo.map((logo) => (
                <University image={logo.image} alt={logo.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex text-4xl font-bold  justify-center p-10">
          Добейтесь своих целей с Coursera
        </div>
        <div className="grid lg:grid-cols-4 p-5 items-center gap-4 sm:grid-cols-2  ">
          <div>
            <div className="flex flex-row">
              {goals.map((goal) => (
                <Goals image={goal.image} alt={goal.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
