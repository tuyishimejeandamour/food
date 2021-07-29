import FlexCenter from '../shared/flexcenter'
import Margin from '../shared/margin'
import Bar from './bar'
import './chart.css'

function Chart() {
    return(
        <Margin margin="15px">
           <div className="chart-container">
               <div className="bars">
                 <Bar height="12%"  />
                 <Bar height="32%" />
                 <Bar height="6%" />
                 <Bar height="22%" />
                 <Bar height="44%" />
                 <Bar height="64%" />
                 <Bar height="74%" />
               </div>
               <div className="bars-names">
                 <FlexCenter className="bars-names-title">mo</FlexCenter>
                 <FlexCenter className="bars-names-title">tue</FlexCenter>
                 <FlexCenter className="bars-names-title">we</FlexCenter>
                 <FlexCenter className="bars-names-title">th</FlexCenter>
                 <FlexCenter className="bars-names-title">fi</FlexCenter>
                 <FlexCenter className="bars-names-title">sat</FlexCenter>
                 <FlexCenter className="bars-names-title">su</FlexCenter>
               </div>
            </div> 
        </Margin>
    )
}

export default Chart