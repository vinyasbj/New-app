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
            science: '',
            gadgets: ''
        }
    }
    componentDidMount(props){
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                gadgets: response.data.articles[0]
            })
        })

        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                sports: response.data.articles[1]
            })
        })

        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                techcrunch: response.data.articles[0]
            })
        })

        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=9b367754c0ba4126a744acb9101223c9').then((response)=> {
            this.setState({
                science: response.data.articles[0]
            })
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
                        <CardImg top width="100%" style={img}src={this.state.science.urlToImage} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Science</CardTitle>
                        <CardSubtitle>{this.state.science.title}</CardSubtitle>
                        <CardText>{this.state.science.description}</CardText>
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