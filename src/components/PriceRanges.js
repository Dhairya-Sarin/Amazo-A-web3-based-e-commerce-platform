import {Space , InputNumber} from "antd"
import "./PriceRanges.css"
function PriceRanges({priceMin , setPriceMin , priceMax , setPriceMax})
{
    function changePrice(min,max)
    {
        setPriceMin(min);
        setPriceMax(max);
    }
    return (
        <>
        <h2>Price Ranges</h2>
        <p className="prices" onClick={() => changePrice(0,1000)}>Under Rs.1000</p>
        <p className="prices" onClick={() => changePrice(1000,2500)}>Rs.1000 to Rs.2500</p>
        <p className="prices" onClick={() => changePrice(2500,5000)}>Rs.2500 to Rs.5000</p>
        <p className="prices" onClick={() => changePrice(5000,100000)}>Rs.5000 & Above</p>
        <Space>
        <InputNumber
      value={priceMin}
      formatter={value => `${value}`}
      onChange={(value) => changePrice(value,priceMax)}
    />
    <InputNumber
      value={priceMax}
      formatter={value => `${value}`}
      onChange={(value) => changePrice(priceMin,value)}
    />
        </Space>
        <br/>
    <br/>
        </>
    );
}

export default PriceRanges;