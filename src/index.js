import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

//ReactDOM.render(_Que_, _Donde_)
ReactDOM.render(
  <Card 
    title="Technique Guides"
    description="Learn amazing street workout and calisthenics"
    img="https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/89518961_498408731106358_5387733054867374080_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_eui2=AeE5Zl22jYsmnecy1Z06EpvnwcejaLdqByMJTjezV28yJBxUykEVY-LRCeyLZdFTi_gMTHOSnseV-q6dzM6TiLDWMRNKur7Geym7E7_FVr5ypw&_nc_oc=AQnJ9RSmTzNpyH8ndTnj5-OsIQGgGUCPUZ_N_4PnFXmla3UDnpXK0duMG7M31kMaPEqBJNlLbyVj6bfw5PJygtAu&_nc_ht=scontent.fhmo2-1.fna&oh=3dbdbfc273d9ea3e30a4ef99c03c07e6&oe=5EADB6B2"
    leftColor="#A74CF2"
    rightColor="#617BFB"
  />, 
  container);