import React from 'react'
import axios from 'axios'
import {Carousel, CarouselCaption, CarouselInner, CarouselItem,View, Mask} from 'mdbreact';
var img = {
    "width": "auto",
    "height": "610px"
}

class Headers extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            images:''
        }
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9b367754c0ba4126a744acb9101223c9')
        .then((response)=>{
            this.setState({
                article1: response.data.articles[0].title,
                article2: response.data.articles[1].title,
                article3: response.data.articles[2].title,
                article4: response.data.articles[3].title,
                article5: response.data.articles[4].title,
                article6: response.data.articles[5].title,
                article7: response.data.articles[12].title,
                article8: response.data.articles[7].title,
                article9: response.data.articles[8].title,
                article10: response.data.articles[9].title,
                image1: response.data.articles[0].urlToImage,
                image2: response.data.articles[1].urlToImage,
                image3: response.data.articles[2].urlToImage,
                image4: response.data.articles[3].urlToImage,
                image5: response.data.articles[4].urlToImage,
                image6: response.data.articles[5].urlToImage,
                image7: response.data.articles[12].urlToImage,
                image8: response.data.articles[7].urlToImage,
                image9: response.data.articles[8].urlToImage,
                image10: response.data.articles[9].urlToImage

            })
            console.log('====================================')
            console.log(response.data.articles[0])
            console.log('====================================')
        })
    }

    render(){
        return(
            <div>
            <Carousel activeItem={1} length={10} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>
                        <CarouselItem itemId="1">
                            <View>
                            <img className="d-block w-100" src={this.state.image1} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article1}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="2">
                            <View>
                            <img className="d-block w-100" src={this.state.image2} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article2}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="3">
                            <View>
                            <img className="d-block w-100" src={this.state.image3} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article3}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="4">
                            <View>
                            <img className="d-block w-100" src={this.state.image4} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article4}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="5">
                            <View>
                            <img className="d-block w-100" src={this.state.image5} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article5}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="6">
                            <View>
                            <img className="d-block w-100" src={this.state.image6} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article6}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="7">
                            <View>
                            <img className="d-block w-100" src={this.state.image7} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article8}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="8">
                            <View>
                            <img className="d-block w-100" src={this.state.image8} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article8}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="9">
                            <View>
                            <img className="d-block w-100" src={this.state.image9} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article9}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="10">
                            <View>
                            <img className="d-block w-100" src={this.state.image10} alt="First slide" style={img} />
                            <Mask overlay="black-light" />
                            </View>
                            <CarouselCaption>
                            <h3 className="h3-responsive">{this.state.article10}</h3>
                            {/* <p>First text</p> */}
                            </CarouselCaption>
                        </CarouselItem>
                </CarouselInner>
            </Carousel>
            </div>
        )
    }
}

export default Headers