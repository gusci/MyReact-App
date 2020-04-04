import React from 'react'
//import exerciseImg from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component {

    constructor(props){
        super(props)
        this.state={
            imagen: 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/48355158_201436584136909_8392074777342246912_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeHlDTaGuXsJ-FUo5kODt2uM_5Pcy2G05RIk-ZOhMr-y7cBcR3yI6UUgRKawyr6648fr_daAYlSv_kveFwhpdxRwQ9RI7ymhcOris2b5_4Vzaw&_nc_oc=AQkj6-goZPQjnptWWQEcgo9Qxf94H_sYYLxt7hBaH2ERk6573hUmBm8GwszGcgRPLcIdau-Peny6jS9Qd2-TgS-Y&_nc_ht=scontent.fhmo2-1.fna&oh=eb2654a9eb8aad22c214c042a0234a49&oe=5EAD4CBE'
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                imagen: 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/48397596_200938590853375_7293512702410883072_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_eui2=AeF9RU0TmopJVcJZrySGNeJfCigcrYeWdpUKKByth5Z2lV06e61dGw0mC0TSP4TebZk&_nc_oc=AQkqWmaJ5-WLVktR4IHYyT92VyhZnBtQtHym7Nfn-nCddl6QBBImQD4OZoCceIRdADuRX1FFifQdtG4wJ87CkAe8&_nc_ht=scontent.fhmo2-1.fna&oh=13217ac2dcb329f6beb1cf6179f92c29&oe=5EAE2F03'
            })
        }, 5000)
    }

    render(){
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card "
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.imagen} className="float-right imginbox" />
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card