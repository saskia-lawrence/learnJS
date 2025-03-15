const data = [
    { name: 'num1', value: val.num1 },
    { name: 'num2', value: val.num2 },
    { name: 'num3', value: val.num3 },
    { name: 'num4', value: val.num4 },
];
{data.map((elem, index) => (
<input
  type="text"
  maxLength="1" //input length
  key={index}
  name={elem.name}
  value={elem.value} 
  ref={(el) => (inputRefs.current[index] = el)} //useRef value
  onChange={(e) => handleOTPChange(e, index)}
  onKeyDown={(e) => handleKeyDown(e, index)}
  className="w-12 h-12 text-center text-lg font-bold border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-800"
/>);
    const [phone, setPhone] = useState("");
<input
  type="text"
  placeholder="Enter your mobile number" // input inside text
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-[250px] border border-gray-400 shadow-md rounded-md p-2 text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>;
