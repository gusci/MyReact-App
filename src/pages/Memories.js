import React from 'react'
import MemoriesList from '../components/MemoriesList'
import Welcome from '../components/Welcome';
import AddButton from '../components/AddButton';

class Memories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [{
                "id": 1,
                "title": "My memories at Metal & Rock Events",
                "description": "Add your memories and aneglots of your best moments in Metal or Rock and Roll events",
                "img": "https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/44991698_165516997728868_921458574494793728_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_eui2=AeHrzKLAlDOeCstZi0k0b3sYoOaoi2eYZj6g5qiLZ5hmPjMbk4uso1AicmH0Ql_9UnU&_nc_oc=AQk7xLZkcr9CDXou0hRB0M4NFVGVgkUpY1VaKzrrQhgwS0C2MGPyVpKYhT5tB4pQigieI6IPo7ZHg_an3kaXTx4l&_nc_ht=scontent.fhmo2-1.fna&oh=8242070175463a5b17b85a9b123dd819&oe=5EAE7CAF",
                "leftColor": "#08298A",
                "rightColor": "#0B173B"
            },{
                "id": 2,
                "title": "Toasting with the band",
                "description": "Having a nice beer mug listening to Metal music at Estacion Nuclear Bar",
                "img": "https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/48355158_201436584136909_8392074777342246912_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeFHOXF9pX7htVlrZYH7t7uV32F-dtnZFFLfYX522dkUUrg-ocWmArgVlJ-GLs6w_zA&_nc_oc=AQnvSSzJTMcBucG1-Vm2GnwZ36dYCGPCN58tTVnzuD4ZjYn7DPovCawJT4UXMmw4L8I6uMk4QP01BlKI2sy56CW2&_nc_ht=scontent.fhmo2-1.fna&oh=c7691b3b3c8a2d51a543fbe340db46f8&oe=5EAD4CBE",
                "leftColor": "#17EAD9",
                "rightColor": "#6078EA"
            },{
                "id": 3,
                "title": "Pleyades at Prehispania Bar",
                "description": "Attending the Metal event, to enjoy live music and a good beer mug.",
                "img": "https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/44982909_165518801062021_6468427859688947712_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_eui2=AeGQfkmZ9497B3jtbo6y6dGhBQd4-Yh-SMcFB3j5iH5Ix-R_aRx8EGJAMA7NA4wHCOI&_nc_oc=AQlBRBk2xVsnSlN5ZJBhZJQFbUg6fn2yD1me7Tl4N-alFZlj-xOt_HoS6BGWAtrRg5eBnxdz82QThu6Zn74TF23d&_nc_ht=scontent.fhmo2-1.fna&oh=3a9a7b1760df03607897e840157859f3&oe=5EACC9F5",
                "leftColor": "#FAD961",
                "rightColor": "#F76B1C"
            }]
            
        }
    }

    render(){
        return(
            <div>
                <Welcome
                    username="Gusci"
                />
                <MemoriesList 
                    memories = {this.state.data}
                />
                <AddButton />
            </div>
        )
    }

}

export default Memories
