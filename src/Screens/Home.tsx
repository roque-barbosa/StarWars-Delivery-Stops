import { ContentWrapper } from "../Components/Home/ContentWrapper"
import { StopsCalculator } from "../Components/Home/StopsCalculator"

export const Home: React.FC = () => {
  return (
    <ContentWrapper>
      <StopsCalculator />
    </ContentWrapper>
  )
}