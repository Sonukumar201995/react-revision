import User from "./User";
import Wrapper from "./Wrapper";

export default function App()
{
  return(
    <div>
      <h1>more about props</h1>
      {/* <User name="sonu kumar"/>
      <User /> */}

      <Wrapper color="orange"> <h1>Hello EveryOne</h1></Wrapper>
      <Wrapper color="green"> <h1>Hello EveryOne</h1></Wrapper>
      <Wrapper color="yellow"> <h1>Hello EveryOne</h1></Wrapper>
    </div>
  )
}