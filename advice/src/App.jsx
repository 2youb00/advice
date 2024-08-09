import { useState, useEffect } from 'react'
function App() {
  const Api_Url='https://api.adviceslip.com/advice';
  const [advice_inf, setAdvice] = useState({advice: '',
                                        id:''});
  const fetchAdvice = async () => {
    const response = await fetch(Api_Url);
    const data = await response.json();
    setAdvice(prv_advice_info => ( {...prv_advice_info , advice : data.slip.advice }));
    setAdvice(prv_advice_info => ( {...prv_advice_info , id : data.slip.id }));
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="container">
        <h3>#{advice_inf.id}</h3>
      <div className="heading">
      <h1>{advice_inf.advice}</h1>
      </div>
      <button className='btn_new_adv' type="button" onClick={fetchAdvice}><span>NEW ADVICE !</span></button>
    </div>
  )
}

export default App
