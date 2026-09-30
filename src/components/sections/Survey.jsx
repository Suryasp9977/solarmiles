import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { surveyChecks } from '../../data/content.js'

export default function Survey() {
  return (
    <section className="alt" id="survey">
      <div className="wrap">
        <SectionHeading title="What happens on the survey?" subtitle="Our consultant checks everything that affects generation." />
        <div className="grid g4">
          {surveyChecks.map((item) => <Card key={item.title} {...item} />)}
        </div>
        <p className="hint" style={{ marginTop: 18, fontSize: 16 }}>
          Roof not concrete or in poor shape? Ask us about roof options during your survey.
        </p>
      </div>
    </section>
  )
}
