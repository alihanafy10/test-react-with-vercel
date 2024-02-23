import Bottom from "./Bottom";
import Input from "./Input";
import style from "./Inputs.module.css";

export default function Inputs() {
  
  

  return (
    <div className={`mt-5  ${style.conatniInput}`}>
      <Input typeing={"text" } texte={"userName"} />
      <Input typeing={"text" } texte={"userAge"} />
      <Input typeing={"email" } texte={"userEmail"} />
      <Input typeing={"password"} texte={"userPassword"} />
      <Bottom/>
    </div>
  );
}

