import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click Me" styles="small" />
      <Button title="Click Me" styles="medium" />
      <Button title="Click Me" styles="large" />
      <Button title="Click Me" styles="rounded-sm" />
      <Button title="Click Me" styles="rounded-md" />
      <Button title="Click Me" styles="rounded-lg" />

    </div>
  )
}
export default Landing