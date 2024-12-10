import StepCard from "../components/StepCard"
import { steps } from "../constants/index"

const Steps = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 mt-[-100px]">
        {steps.map((step)=>(
          <StepCard key={step.id} {...step}/>
        ))}
    </section>
  )
}

export default Steps
