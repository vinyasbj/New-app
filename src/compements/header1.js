import React from 'react'
import axios from 'axios'
import {Carousel, CarouselCaption, CarouselInner, CarouselItem,View, Mask} from 'mdbreact';
var img = {
    "width": "auto",
    "height": "610px"
}

class Headerss extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9b367754c0ba4126a744acb9101223c9')
        .then((response)=>{
            this.setState({
                articles: response.data.articles

            })
            console.log('====================================')
            console.log(response.data.articles)
            console.log('====================================')
        })
    }

    render(){
        return(
            <Carousel activeItem={1} length={this.state.articles.length} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>
                        {this.state.articles.map(article => {
                            return(
                                <CarouselItem itemId="1">
                                    <View>
                                    {/* <img className="d-block w-100" src={this.state.article.urlToImage} alt="First slide" style={img} /> */}
                                    <Mask overlay="black-light" />
                                    </View>
                                    <CarouselCaption>
                                    <h3 className="h3-responsive">{this.state.article.title}</h3>
                                    <p>First text</p>
                                </CarouselCaption>
                            )
                        })}
                        </CarouselItem>
                </CarouselInner>
            </Carousel>
        )
    }
}

export default Headerss