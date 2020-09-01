import React,{Component} from 'react';
import './App.css';
import { Main } from './components/MainComponent';
import {Form} from './components/FormComponent';

const API_Keys = "a75445c1135f5e1096545d54c37a1f15";

class App extends Component {

  constructor(){
    super();
    this.state={
        city:null,
        country:null,
        temp:null,
        temp_min:null,
        temp_max:null,
        description:"",
        icon:null,
        error:false
    };
  }

  calCelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell;
  }
  icon(iconcode){
    let icon_url="http://openweathermap.org/img/w/" + iconcode + ".png";
    return icon_url;
  }

  getWeather=async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city && country){
      const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+","+country+"&"+'appid='+API_Keys);

    const response = await api_call.json();
    console.log(response)
    this.setState({
      city:response.name,
      country:response.sys.country,
      temp:this.calCelsius(response.main.temp),
      temp_min:this.calCelsius(response.main.temp_min),
      temp_max:this.calCelsius(response.main.temp_max),
      description:response.weather[0].description,
      icon:this.icon(response.weather[0].icon)
    })
  }
  else{
    this.setState({
      error:true
    })
  }
  }

  render(){
  return (
    <div className="App">
      <Form loadWeather={this.getWeather} error={this.state.error}/>
      <Main
      city={this.state.city}
      country={this.state.country}
      temp={this.state.temp}
      temp_min={this.state.temp_min}
      temp_max={this.state.temp_max}
      description={this.state.description}
      icon={this.state.icon}/>
    </div>
  );
  }
}

export default App;
