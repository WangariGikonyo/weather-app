<Heading />
<div className='float'>
    <LocationForm getWeather={this.getWeather} />
  </div>
  <div className='float'>
    <Weather
      temperature={this.state.temperature}
      city = {this.state.city}
      country = {this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      icon={this.state.icon}
      error={this.state.error}
    />
  </div>

<FiveDays
  forecastdays={this.state.forecastdays}
/>
