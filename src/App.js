import Header from "./component/Header";
import Main from "./component/Main";
import University from "./component/University";
import Goals from "./component/Goals";
import Work from "./component/Work";
//import Wall from "./component/Wall";

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
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/achieve-your-goals/Icon-Learn.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
    text: "Получите актуальные навыки,такие как бизнес-аналитика, графический дизайн, Python и т. д.",
  },
  {
    label: "learn",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/achieve-your-goals/Icon-Get-Ready.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
    text: "Получите необходимые навыки для работы ",
  },
  {
    label: "learn",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/achieve-your-goals/Icon-Earn-Degree.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
    text: "Получите диплом",
  },
  {
    label: "learn",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/achieve-your-goals/Icon-Upskill-your-org.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
    text: "Развивайте свою организацию",
  },
];

const walls = [
  {
    label: "men_wall",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/79oOuCjA73r8MIX8Vj8KO2/b758aef174e8f68f6e265e6c3085befc/top-quality-image.png?auto=format%2Ccompress&dpr=2&w=624&h=463&q=40&fit=clip",
    text: "Высочайшее качество. Получайте знания от ведущих университетов и компаний. Смотрите записи лекций по бизнесу, компьютерным наукам, науке о данных, изучению языков и другим предметам от лучших преподавателей.",
  },
  {
    label: "circles_wall",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/accessible-updated-certs.svg?auto=format%2Ccompress&dpr=2&w=518&h=501&q=40&fit=clip",
    text: "Доступно. Найдите гибкие и доступные варианты обучения. Множество вариантов, включая бесплатные курсы и дипломы университетов по невероятной цене. Учитесь в удобном темпе, полностью онлайн.",
  },
  {
    label: "window_1_wall",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/applied-learning.png?auto=format%2Ccompress&dpr=2&w=655&h=481&q=40&fit=clip",
    text: "Прикладное обучение. Оттачивайте навыки с углубленным обучением. Применяйте полученные знания, в комфортном темпе выполняя тесты и практические проекты. Получайте отзывы о своих работах от других учащихся по всему миру.",
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
            <div className="flex space-x-10 ">
              {goals.map((goal) => (
                <Goals image={goal.image} alt={goal.label} text={goal.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Work />
      </div>
      {/* <div>
        <Wall text="efef" />
        <Wall text="LKNLOI" inverted />
        <Wall text="efef" />
      </div> */}
    </div>
  );
}
