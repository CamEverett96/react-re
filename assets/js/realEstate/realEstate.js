import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData ,
      city:'All',
      homeType:'0',
      bedrooms: 1,
      min_price:0,
      max_price:10000000,
      min_floor_space:0,
      max_floor_space: 50000,
      gym: false,
      swimming_pool: false,
      finished_basement:false ,
      Elevators: false ,
      filteredData: listingsData ,


    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }
  change(event){
    var name = event.target.name
    var value =(event.target.type === 'checkbox')? event.target.checked : event.target.value

    this.setState({
        [name]: value
      }, () => {
        console.log(this.state)
        this.filteredData()
      })
  }
  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.Price >= this.state.min_price && item.Price <= this.state.max_price && item.floorspace >= this.min_floor_space && item.floorspace <= this.max_floor_space && item.rooms >= this.state.bedrooms
    })
if(this.state.city != "All") {
  newData = newData.filter((item) => {
    return item.city == this.state.city
  })
}

if(this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
  })
}
    this.setState({
      filteredData: newData,
    })
  }
  render () {
    return (<div>
      <Header/>
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} />
        <Listings listingsData={this.state.filteredData}/>
      </section>
        </div>)
      }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
