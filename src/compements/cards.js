import React from 'react';
import axios from 'axios';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardGroup } from 'reactstrap';
var img = {
    width: "276px",
    height:"194px"
}
class Cards extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sports: '',
            techcrunch: '',
            politics: '',
            gadgets: ''
        }
    }
    componentDidMount(props){
        axios.get('https://newsapi.org/v2/everything?q=gadgets&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                gadgets: response.data.articles[0]
            })
        })

        axios.get('https://newsapi.org/v2/everything?q=sports&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                sports: response.data.articles[1]
            })
        })

        axios.get('https://newsapi.org/v2/everything?q=techcrunch&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                techcrunch: response.data.articles[0]
            })
        })

        axios.get('https://newsapi.org/v2/everything?q=politics&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                politics: response.data.articles[0]
            })
            console.log('====================================')
            console.log(this.state.politics)
            console.log(this.state.sports)
            console.log(this.state.techcrunch)
            console.log(this.state.gadgets)
            console.log('====================================')
        })
    }
    render(){
        return(
            <div>
                <CardGroup>
                    <Card>
                        <CardImg top width="100%" style= {img} src={this.state.sports.urlToImage} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sports</CardTitle>
                        <CardSubtitle>{this.state.sports.title}</CardSubtitle>
                        <CardText>{this.state.sports.description}</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" style={img} src={this.state.gadgets.urlToImage} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Gadgets</CardTitle>
                        <CardSubtitle>{this.state.gadgets.title}</CardSubtitle>
                        <CardText>{this.state.gadgets.description}</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" style={img}src={this.state.politics.urlToImage} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Politics</CardTitle>
                        <CardSubtitle>{this.state.politics.title}</CardSubtitle>
                        <CardText>{this.state.politics.description}</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" style = {img} src={this.state.techcrunch.urlToImage} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Tech Crunch</CardTitle>
                        <CardSubtitle>{this.state.techcrunch.title}</CardSubtitle>
                        <CardText>{this.state.techcrunch.description}</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Cards